import {observable, action} from 'mobx';
import { AsyncStorage } from "react-native";

import {isEmpty} from 'lodash';

import authAPI from '../lib/api/auth';

let index = 0

class Store {
  @observable isAuth = false;
  @observable token = undefined;

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
    console.log(login, password);

    authAPI.login({login, password})
      .then(({token}) => {
        this.setItem(token);
        this.isAuth = true;
      })
      .catch(e => this.errors.password = 'Verkeerd email/wachtwoord');
  }

  @action hasToken = () => {
      AsyncStorage.getItem('token')
        .then(res => {
          this.token = res
          this.isAuth = res !== null ? true : false;
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
