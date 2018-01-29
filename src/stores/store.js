import {observable, action} from 'mobx';

let index = 0

class Store {

  @observable name = `BudaMunt`

  @action setname = name => {
    this.name = name.data
  }

}

const store = new Store();
export default store;
