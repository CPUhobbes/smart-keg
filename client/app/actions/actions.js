/* eslint no-underscore-dangle: ["error", { "allow": ["_loadAPI"] }] */
import md5Hash from 'md5';
import Immutable from 'immutable';
import Types from './actionTypes';
import api from '../helpers/helpers';

export function _loadAPI(apiData) {
  return { type: Types.LOAD_API, apiData };
}

export function loadAPI() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return dispatch =>
    new Promise((resolve) => {
      resolve(api.loadAPI());
    })
      .then((result) => {
        dispatch(_loadAPI(result));
      })
      .catch((error) => {
        throw error;
      });
}

export function updateSetting(key, value) {
  return {
    type: Types.UPDATE_SETTING,
    key,
    value,
  };
}

export function onClickLogin(id, password) {
  return async (dispatch) => {
    const hashPassword = md5Hash(password);

    const request = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: id, password: hashPassword }),
    };

    const setting = {
      id: '',
      isLoggedIn: false,
      failedLogin: false,
      isAdmin: false,
    };

    await fetch('http://localhost:3000/login/validate', request)
      .then(res => res.json())
      .then((data) => {
        if (data) {
          setting.id = id;
          setting.isLoggedIn = true;
          setting.isAdmin = data.admin;
        } else {
          setting.failedLogin = true;
        }
      })
      .catch(() => {
        setting.failedLogin = true;
      });

    return dispatch(updateSetting('userSession', Immutable.fromJS(setting)));
  };
}
