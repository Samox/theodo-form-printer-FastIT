const gapi = window.gapi

export const CLIENT_ID = '390849018080-n6hvq5jg9hkl67l2fsi4ldeljs57o34r.apps.googleusercontent.com';
export const DISCOVERY_DOCS = ["https://script.googleapis.com/$discovery/rest?version=v1"];
export const SCOPES = 'https://www.googleapis.com/auth/forms';
export const SCRIPT_ID_UK = 'MeRye5A_wHzCuyYvIJ85WNJ6eS0vCcuvm';
export const SCRIPT_ID = 'Mo36SB4NMSPPn9MLWxomXTQW4mt_V9Ca2';

gapi.loadAsync = () => new Promise(
  (resolve, reject) => {
    gapi.load('client:auth2', resolve);
  }
);

gapi.loginAsync = () => new Promise(
  (resolve, reject) => {
    gapi.auth2.getAuthInstance().signIn().then(resolve, reject);
  }
);

gapi.logoutAsync = () => new Promise(
  (resolve, reject) => {
    gapi.auth2.getAuthInstance().signOut().then(resolve, reject);
  }
);

export default gapi;
