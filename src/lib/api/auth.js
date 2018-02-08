const url = `https://budamunt.herokuapp.com/api/auth`;
const audience = 'app'
import buildBody from '../buildBody';

export default {

  login: data => {
    const body = buildBody(data, [`login`, `password`], {audience});
    const method = `POST`;
    const headers = new Headers({'Content-Type': `application/json`});

    return fetch(`${url}`, {body, method, headers, mode: `cors`})
      .then(r => r.json());
  }

};
