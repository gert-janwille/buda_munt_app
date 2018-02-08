const url = `https://budamunt.herokuapp.com/api/accounts`;
import buildBody from '../buildBody';

export default {

  get: (data, amount, token) => {
    const method = `PUT`;
    const body = buildBody(data, [`hash`, `pin`]);
    const headers = new Headers({
      'Content-Type': `application/json`,
      authorization: token
    });

    return fetch(`${url}/receive/${amount}`, {body, method, headers, mode: `cors`})
      .then(r => r.json())
      .catch(er => console.error(er));
  }

};
