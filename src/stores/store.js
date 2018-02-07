import {observable, action} from 'mobx';
import { AsyncStorage } from "react-native";

import {isEmpty} from 'lodash';
import {content} from '../lib/auth/token';

import authAPI from '../lib/api/auth';
import usersAPI from '../lib/api/users';
import activitiesAPI from '../lib/api/activities';

class Store {
  @observable isAuth = false;
  @observable openPicker = false;
  @observable token = undefined;

  @observable user = {};
  @observable account = {};

  @observable activities = [];
  @observable promo = {};
  @observable detailObject = {};

  @observable name = `BudaMunt`;
  @observable newComment = false;

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
  };

  init = () => {
    if (this.token === undefined) this.hasToken();

    activitiesAPI.read()
      .then(activities => {
        activities.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.activities = activities
        this.promo = activities[Math.floor(Math.random() * activities.length)];
      })
      .catch(e => console.log(e));
  }

  constructor(){
    this.init();
  }

  @action login = () => {
    const errors = this.validate(this.data);
    if (!isEmpty(errors)) this.errors = errors

    const {email: login, password} = this.data;

    authAPI.login({login, password})
      .then(({token}) => {
        if (!token) return this.errors.password = 'Verkeerd email/wachtwoord';
        const {email} = content(token);

        this.getUser(email, token);
        this.setItem(token);
        this.isAuth = true;
      })
      .catch(e => this.errors.password = 'Verkeerd email/wachtwoord');
  }

  @action hasToken = () => {
      AsyncStorage.getItem('token')
        .then(token => {
          if (!token) return this.token = '';
          const {email} = content(token);
          this.getUser(email, token);

          this.token = token
          this.isAuth = token !== null ? true : false;
        })
        .catch(err => console.log(err));
  }

  @action logout = () => {
    this.removeItem();
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
    console.log(errors);
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
        console.log(a);
        a.comments = a.comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.activities.map(c => (c._id === a._id) ? c.comments = a.comments : null);
      })
      .then(()=> this.comment = '');
  }

  @action setNewComment = bool => this.newComment = bool;
  @action setType = type => this.data.type = type;
  @action setItem = (t) => AsyncStorage.setItem('token', t);
  @action removeItem = () => AsyncStorage.removeItem('token');
  @action changeInput = (key, value) => this.data[key] = value;
  @action setname = name => this.name = name.data
  @action setOpenPicker = () => this.openPicker = !this.openPicker;

  getUser = (email, token) => {
    usersAPI.read(email, token)
      .then(({user, account}) => {
        this.user = user;
        this.account = account
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
}

const store = new Store();
export default store;
