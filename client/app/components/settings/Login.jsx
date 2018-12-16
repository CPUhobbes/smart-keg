import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import * as actions from '../../actions/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      password: '',
    };

    this.onChangeId = this.onChangeInput.bind(this, 'id');
    this.onChangePassword = this.onChangeInput.bind(this, 'password');
  }

  componentDidUpdate(prevProps) {
    const { userSession, history } = this.props;

    const isLoggedIn = userSession.get('isLoggedIn');
    const wasLoggedIn = prevProps.userSession.get('isLoggedIn');

    if (isLoggedIn && isLoggedIn !== wasLoggedIn) {
      history.push('/settings');
    }
  }

  onChangeInput(type, event) {
    if (event) {
      this.setState({
        [type]: event.target.value,
      });
    }
  }

  onClickSubmit = () => {
    const { onClickLogin } = this.props;
    const { id, password } = this.state;

    onClickLogin(id, password);
  };

  render() {
    const { id, password } = this.state;

    return (
      <div className="smart-keg__login">
        <div className="smart-keg__login--container">
          <div className="smart-keg__login-id">
            ID
            <input type="text" value={id} onChange={this.onChangeId} />
          </div>
          <div className="smart-keg__login-password">
            Password
            <input
              value={password}
              onChange={this.onChangePassword}
              type="password"
            />
          </div>
          <div className="smart-keg__login-submit">
            <input type="submit" value="Log In" onClick={this.onClickSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userSession: state.settings.get('userSession'),
});

const mapDispatchToProps = dispatch => ({
  onClickLogin: (id, password) => dispatch(actions.onClickLogin(id, password)),
});

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  onClickLogin: PropTypes.func.isRequired,
  userSession: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
