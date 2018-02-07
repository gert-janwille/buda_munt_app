const url = `https://budamunt.herokuapp.com/api/activities`;
import buildBody from '../buildBody';

export default {

  read: query => {
    const method = `GET`;
    const headers = new Headers({
      'Content-Type': `application/json`
    });

    return fetch(query ? `${url}?${query}` : url, {method, headers, mode: `cors`})
      .then(r => r.json())
      .catch(er => console.error(er));
  },

  update: (data, action, id, token) => {
    const method = `PUT`;
    const body = buildBody(data, [`comment`, `doneby`]);
    const headers = new Headers({
      'Content-Type': `application/json`,
      authorization: token
    });

    return fetch(`${url}/${action}?id=${id}`, {body, method, headers, mode: `cors`})
      .then(r => r.json())
      .catch(er => console.error(er));
  },

  insert: (data, token) => {
    const body = buildBody(data, [`type`, `description`, `title`, `price`, `categorie`]);
    const method = `POST`;
    const headers = new Headers({
      'Content-Type': `application/json`,
      authorization: token
    });

    return fetch(`${url}`, {body, method, headers, mode: `cors`})
      .then(r => r.json())
      .catch(er => console.error(er));
  }

};
