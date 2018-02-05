import jwtDecode from 'jwt-decode';

export const content = token => jwtDecode(token);
export const read = token => jwtDecode(token);

export const timestamp = () => Math.floor(Date.now() / 1000);

export const isValid = () => {

  let valid = true;
  const t = content();

  if (t) {
    if (t.exp && (t.exp - timestamp()) < 0) {
      valid = false;
    }
    if (t.nbf && (timestamp() - t.nbf) > 0) {
      valid = false;
    }
  } else {
    valid = false;
  }

  return valid;

};

export default {
  content,
  isValid,
  read
};
