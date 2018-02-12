import {observable, action} from 'mobx';
import {AsyncStorage, NetInfo} from "react-native";
import SocketIOClient from 'socket.io-client';

import {isEmpty, pick} from 'lodash';
import {content} from '../lib/auth/token';

import authAPI from '../lib/api/auth';
import usersAPI from '../lib/api/users';
import activitiesAPI from '../lib/api/activities';
import transactionsAPI from '../lib/api/transactions';

class Store {
  @observable isConnected = false;
  @observable isAuth = false;
  @observable openPicker = false;
  @observable token = undefined;

  @observable user = {};
  @observable account = {};

  @observable activities = [];
  @observable allActivities = [];
  @observable promo = {};
  @observable detailObject = {};

  @observable name = `BudaMunt`;

  @observable newComment = false;
  @observable setOverlay = false;
  @observable askPin = false;
  @observable openFilter = false;

  @observable dealerAmount = '';
  @observable pinCode = '';
  @observable dealerHash = '';
  @observable dealerText = 'Welcome';
  @observable pinDealer = false;
  @observable dealerQR = false;

  @observable type = '';
  @observable step = 0
  @observable notificationStyle = {marginTop: -120}

  @observable errors = {};
  @observable data = {
    email: '',
    password: '',
    amount: '',
    type: 'R',
    price: '',
    title: '',
    categorie: '',
    description: '',
    comment: '',
    hash: '',
    pin: ''
  };

  @observable registrationData = {
    name: '',
    firstName: '',
    email: '',
    phone: '',
    password: '',
    dealer: '',
    description: '',
    street: '',
    houseNumber: '',
    bus: ' ',
    zip: '',
    pin: '',
    pinRepeat: '',
    username: ''
  }

  @observable filterData = {
    type:[],
    categorie: ''
  }

  init = () => {
    NetInfo.addEventListener('connectionChange', this.handleFirstConnectivityChange);

    if (this.token === undefined) this.hasToken();

    if (this.isConnected) {

      // Load from API
      activitiesAPI.read()
        .then(activities => {
          activities.sort((a, b) => new Date(b.date) - new Date(a.date));
          this.activities = activities
          this.allActivities = activities
          this.promo = activities[Math.floor(Math.random() * activities.length)];

          this.setItem('activities', JSON.stringify(activities));
        })
        .catch(e => console.log(e));

    } else {
        // Load from storage
        AsyncStorage.getItem('activities')
          .then(activities => {
            if (!activities) return;
            activities = JSON.parse(activities);
            activities.sort((a, b) => new Date(b.date) - new Date(a.date));

            this.activities = activities
            this.allActivities = activities
            this.promo = activities[Math.floor(Math.random() * activities.length)];
          })
    }
  }

  constructor(){
    this.init();
  }

  @action validateAndGoNext = (step, arr) => {
    const errors = this.validate(pick(this.registrationData, arr))
    delete errors.bus;
    if (!isEmpty(errors)) return this.errors = errors;
    this.setStep(step);
  }

  @action submitUser = (navigation, arr) => {
    const errors = this.validate(pick(this.registrationData, arr))

    if (!isEmpty(errors)) return this.errors = errors;

    const pinCorrect = this.validatePin(pick(this.registrationData, arr));
    if (!pinCorrect) return this.errors = {pinRepeat: 'Pincodes komen niet overeen & moeten 4 characters bevatten.'}
    this.setOverlay = true;

    this.registrationData[`username`] = `${this.registrationData.firstName.toLowerCase()}${this.registrationData.name.toLowerCase()}`;

    if (this.errors.file) delete this.registrationData[`file`];
    if (this.errors.bus) delete this.registrationData[`bus`];

    if (this.type === 'person') {
      delete this.registrationData[`dealer`];
      delete this.registrationData[`description`];
    }

    usersAPI.insert(this.registrationData)
      .then(user => {
        const {password, email} = this.registrationData

        authAPI.login({login: email, password})
          .then(({token}) => {
            if (!token) {
              this.setOverlay = false;
              return this.errors = {pinRepeat: 'Verkeerd email/wachtwoord'};
            }
            const {email} = content(token);

            this.getUser(email, token);
            this.setItem('token', token);
            this.isAuth = true;
            this.setOverlay = false;

            navigation.navigate('Home');
          })
      })
      .catch(e => this.errors = {password: e});
  }

  @action login = () => {
    const {email, password} = this.data;

    const errors = this.validate({email, password});
    if (!isEmpty(errors)) return this.errors = errors

    this.setOverlay = true;
    authAPI.login({login: email, password})
      .then(({token}) => {
        if (!token) {
          this.setOverlay = false;
          return this.errors = {password: 'Verkeerd email/wachtwoord'};
        }
        const {email} = content(token);

        this.getUser(email, token);
        this.setItem('token', token);
        this.isAuth = true;
        this.setOverlay = false;
      })
      .catch(e => this.errors = {password: e});
  }

  @action hasToken = () => {
      AsyncStorage.getItem('token')
        .then(token => {
          if (!token) return this.token = '';

          if (this.isConnected) this.getUser(content(token).email, token);

          AsyncStorage.getItem('user')
            .then(user => {
              if (!user) if (!user) return this.getUser(content(token).email, token);

              AsyncStorage.getItem('account')
                .then(account => {
                  if (!account) return this.getUser(content(token).email, token);

                  this.user = JSON.parse(user);
                  this.account = JSON.parse(account);

                  if (this.user.dealer) this.dealerText = `Welcome bij ${this.user.dealer}`;

                  this.token = token
                  this.isAuth = token !== null ? true : false;
                })
            });
        })
        .catch(err => console.log(err));
  }

  @action logout = () => {
    this.removeItem('token');
    this.removeItem('user');
    this.removeItem('account');
    this.isAuth = false;
  }

  @action getDetail = id => {
    this.detailObject = {};
    if (isEmpty(this.activities)) return;
    this.detailObject = this.activities.filter(c => c._id.toLowerCase() === id)[0];
  }

  @action submitActivity = navigation => {
    const {type, title, price, categorie, description} = this.data;
    const data = {type, title, price, categorie, description};
    const errors = this.validate(data);
    if (!isEmpty(errors)) return this.errors = errors

    this.errors = {};

    activitiesAPI.insert(data, this.token)
      .then(a => this.activities.splice(0, 0, a))
      .then(()=> {
        this.type = '',
        this.title = '',
        this.price = '',
        this.categorie = 'R',
        this.description = ''
      })
      .then(()=> navigation.navigate('List'));
  }

  @action insertNewComment = (user, id) => {
    const {comment} = this.data;
    if (comment.trim() === '') return this.errors = {comment: 'Je gaf geen bericht in.'};

    data = {
      description: comment,
      username: user.username,
      account: user.account,
      date: Date.now(),
    };

    activitiesAPI.update({comment: String(JSON.stringify(data))}, `comment`, id, this.token)
      .then(a => {
        this.setNewComment(false);
        a.comments = a.comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.activities.map(c => (c._id === a._id) ? c.comments = a.comments : null);
      })
      .then(()=> this.comment = '');
  }

  @action getCoins = navigation => {
    const {pin, hash, amount} = this.data;
    const errors = this.validate({pin, hash});
    if (!isEmpty(errors)) return this.errors = errors;

    transactionsAPI.get({pin, hash}, amount, this.token)
      .then(acc => {
        if (!acc.transactions) return this.errors = {pin: acc.message};
        this.account = acc;

        this.socket.emit(`message`, {to: hash, from: this.user.username, action: `transaction`});

        this.data.pin = '';
        this.data.amount = '';
        this.data.hash = '';
        this.askPin = false;

        navigation.navigate('Home');
        navigation.navigate('Profiel');
      })
      .catch(e => console.log(e));
  }

  @action setHash = data => {
    const {hash, amount} = this.data;
    if (amount.trim() === '') return this.errors = {amount: 'Geef een bedrag in.'}
    if (hash !== '') return;
    this.data.hash = data;
    this.askPin = true;
  }

  @action setFilterType = value => {
    const {type} = this.filterData;

    (type.indexOf(value) === -1)? this.filterData.type = [...type, value] : this.filterData.type.remove(value);
    if (this.filterData.type.length >= 2 || this.filterData.type.length <= 0) return this.activities = this.allActivities
    this.activities = this.allActivities.filter(obj => obj.type === this.filterData.type[0]);
  }

  @action changeFilterInput = (key, value) => {
    this.filterData[key] = value;
    if (value === 'kies' || value === '') return this.activities = this.allActivities
    this.activities = this.allActivities.filter(obj => obj.categorie === value);
  }

  @action setDealerAmount = key => {
    if (key === 'AC') return this.dealerAmount = '';
    if (key === 'C') return this.dealerAmount = this.dealerAmount.slice(0, -1);
    this.dealerAmount += key;
  }

  @action setPinCode = (key, navigation) => {
    if (key === 'C') return this.pinCode = this.pinCode.slice(0, -1);
    if (key === 'pay') return this.payDealer(navigation);
    if (this.pinCode.length === 4) return;
    this.pinCode += key;
  }

  @action payDealer = navigation => {
    if (this.pinCode.length !== 4) return;

    const pin = this.pinCode;
    const hash = this.dealerHash;

    transactionsAPI.get({pin, hash}, parseInt(this.dealerAmount), this.token)
      .then(acc => {
        if (!acc.transactions) return this.errors = {dealerPin: acc.message};
        this.account = acc;

        this.socket.emit(`message`, {to: hash, from: this.user.username, action: `transaction`});

        this.pinCode = '';
        this.dealerAmount = '';
        this.dealerHash = '';
        this.setPinDealer(false);

        this.dealerText = 'Bedankt voor uw aankoop';
        setTimeout(() => this.dealerText = `Welcome bij ${this.user.dealer}`, 5000);
      })
      .catch(e => console.log(e));

  }

  @action closeDeal = () => {
    this.pinCode = '';
    this.dealerAmount = '';
    this.dealerHash = '';
    this.setPinDealer(false);
    this.errors = {dealerPin: ''};

    this.dealerText = 'Betaling geanuleerd';
    setTimeout(() => this.dealerText = `Welcome bij ${this.user.dealer}`, 5000);
  }

  @action setAskPin = (bool, navigation) => {
    if (!bool) {
      this.data.pin = '';
      this.data.amount = '';
      this.data.hash = '';

      navigation.navigate('Home');
    }
    this.askPin = bool;
  }

  @action handleNotification = (direction, state) => {

    switch (direction) {
      case 'SWIPE_UP':
        this.notificationStyle = {marginTop: -120}
        console.log(state);
        console.log('up');
        break;
    }

  }


  @action showDealerQR = () => this.dealerQR = !this.dealerQR;
  @action setPinDealer = bool => this.pinDealer = bool;
  @action setDealerHash = data => this.dealerHash = data;
  @action setOpenFilter = bool => this.openFilter = bool;
  @action setNewComment = bool => this.newComment = bool;
  @action setType = type => this.data.type = type;
  @action setItem = (key, value) => AsyncStorage.setItem(key, value);
  @action removeItem = key => AsyncStorage.removeItem(key);
  @action changeInput = (key, value) => this.data[key] = value;
  @action changeInputRegister = (key, value) => this.registrationData[key] = value;
  @action setname = name => this.name = name.data
  @action setOpenPicker = () => this.openPicker = !this.openPicker;
  @action setStep = step => this.step = step;
  @action setTypeDirect = value => this.type = value;


  initSockets = account => {
    this.socket = SocketIOClient(`https://budamunt.herokuapp.com/`, {query: `account=${account}`});
    this.socket.on(`message`, e => this.handleWSmessage(e));
    // this.socket.on(`init`, e => console.log(e));
  }

  validatePin = ({pin, pinRepeat}) => pin === pinRepeat && pin.length === 4 ? true : false;

  getUser = (email, token) => {
    usersAPI.read(email, token)
      .then(({user, account}) => {
        this.user = user;
        this.account = account;

        this.setItem('user', JSON.stringify(user));
        this.setItem('account', JSON.stringify(account));

        // Start sockets
        this.initSockets(user.account);
      })
  }

  validate = data => {
    const errorStrings = [`Oeps, je gaf geen`, `Vergeet niet je`];
    const error = {};
    for (const key in data) {
      if (data[key] === `` || data[key] === ` `) error[key] = `${errorStrings[Math.floor(Math.random() * errorStrings.length)]} ${key}`;
    }
    return error;
  }

  handleFirstConnectivityChange = ({type}) => {
    if (type === 'none') return this.isConnected = false;

    this.isConnected = true;
    this.init();

    NetInfo.removeEventListener('connectionChange', this.handleFirstConnectivityChange);
  }

  updateUser = () => {
    usersAPI.read(this.user.email, this.token)
      .then(({user, account}) => {
        this.user = user;
        this.account = account;

        this.notificationStyle = {marginTop: 5}
        setTimeout(()=> this.notificationStyle = {marginTop: -120}, 5000)

        this.setItem('user', JSON.stringify(user));
        this.setItem('account', JSON.stringify(account));
      })
  }

  handleWSmessage = data => {
    const {action} = data;
    switch (action) {
    case `transaction`:
      this.updateUser();
      break;
    }
  }
}

const store = new Store();
export default store;
