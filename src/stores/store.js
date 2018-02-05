import {observable, action} from 'mobx';
import { AsyncStorage } from "react-native";

import {isEmpty} from 'lodash';
import {content} from '../lib/auth/token';
import authAPI from '../lib/api/auth';
import usersAPI from '../lib/api/users';

class Store {
  @observable isAuth = false;
  @observable token = undefined;

  @observable user = {};
  @observable account = {};

  @observable name = `BudaMunt`

  @observable errors = {}
  @observable data = {
    email: '',
    password: ''
  }

  @action login = () => {
    const errors = this.validate(this.data);
    if (!isEmpty(errors)) this.errors = errors

    const {email: login, password} = this.data;

    authAPI.login({login, password})
      .then(({token}) => {
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
          const {email} = content(token);
          this.getUser(email, token);

          this.token = token
          this.isAuth = token !== null ? true : false;
        })
        .catch(err => reject(err));
  }

  @action logout = () => {
    this.removeItem();
    this.isAuth = false;
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
