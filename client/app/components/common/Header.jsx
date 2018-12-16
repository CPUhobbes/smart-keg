import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

class Header extends React.PureComponent {
  onSettingsClick = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    return (
      <div className="smart-keg__header">
        <div />
        <div className="smart-keg__header-title">Smart Keg</div>
        <div>
          <button
            onClick={this.onSettingsClick}
            className="smart-keg__header-button"
          >
           Settings
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
