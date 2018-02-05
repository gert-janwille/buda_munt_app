const url = `https://budamunt.herokuapp.com/api/users`;
import buildBody from '../buildBody';

export default {
  read: (email, token) => {
    const method = `GET`;
    const headers = new Headers({
      'Content-Type': `application/json`,
      authorization: token
    });

    return fetch(`${url}?email=${email}`, {method, headers, mode: `cors`})
      .then(r => r.json())
      .catch(er => console.log(er));
  },

  insert: data => {
    const body = buildBody(data, [`username`, `name`, `firstName`, `password`, `email`, `phone`, `street`, `houseNumber`, `bus`, `zip`, `dealer`, `description`, `pin`]);
    const method = `POST`;
    const headers = new Headers({
      'Content-Type': `application/json`
    });

    return fetch(`${url}`, {body, method, headers, mode: `cors`})
      .then(r => r.json())
      .catch(er => console.log(er));
  }

};
