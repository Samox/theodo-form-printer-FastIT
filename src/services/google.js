const gapi = window.gapi

export const CLIENT_ID = '932358196218-67c89d4v3v5tif0hf4ta2uvu3n365db8.apps.googleusercontent.com';
export const DISCOVERY_DOCS = ["https://script.googleapis.com/$discovery/rest?version=v1"];
export const SCOPES = 'https://www.googleapis.com/auth/forms';

gapi.loadAsync = () => new Promise(
  (resolve, reject) => {
    gapi.load('client:auth2', resolve);
  }
);

export default gapi;