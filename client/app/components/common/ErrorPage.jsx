import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

class Header extends React.PureComponent {
  onSettingsClick = () => {
    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return <div className="">Error!</div>;
  }
}

Header.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
