import {observable, action} from 'mobx';
import { AsyncStorage } from "react-native";

import {isEmpty} from 'lodash';
import {content} from '../lib/auth/token';

import authAPI from '../lib/api/auth';
import usersAPI from '../lib/api/users';
import activitiesAPI from '../lib/api/activities';

class Store {
  @observable isAuth = false;
  @observable token = undefined;

  @observable user = {};
  @observable account = {};

  @observable activities = [];
  @observable promo = {};
  @observable detailObject = {};

  @observable name = `BudaMunt`

  @observable errors = {}
  @observable data = {
    email: '',
    password: '',
    amount: ''
  }

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

  @action setItem = (t) => AsyncStorage.setItem('token', t);
  @action removeItem = () => AsyncStorage.removeItem('token');
  @action changeInput = (key, value) => this.data[key] = value;
  @action setname = name => this.name = name.data

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
