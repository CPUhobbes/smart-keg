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
        <ul>
          <li className="smart-keg__header-spacer" />
          <li className="smart-keg__header-title">Smart Keg</li>
          <li className="smart-keg__header-button">
            <button
              onClick={this.onSettingsClick}
              className="settings"
            >
            Settings
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
