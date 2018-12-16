import Immutable from 'immutable';

export default Immutable.fromJS({
  api: {},
  userSession: {
    id: '',
    isLoggedIn: false,
    failedLogin: false,
    isAdmin: false,
  },
});
