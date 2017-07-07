const gapi = window.gapi

export const CLIENT_ID = '1064483391468-34odtv7dj3tidc5mfbtkitf89bapl184.apps.googleusercontent.com';
export const DISCOVERY_DOCS = ["https://script.googleapis.com/$discovery/rest?version=v1"];
export const SCOPES = 'https://www.googleapis.com/auth/forms';
export const SCRIPT_ID = 'MUR7LYGtI9263SIUdj6IzcAW4mt_V9Ca2';

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
