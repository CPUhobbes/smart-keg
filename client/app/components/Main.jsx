import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import * as actions from '../actions/actions';

class Main extends React.Component {
  static propTypes = {
    settings: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    updateLocation: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      userName: `USER-${Math.round(Math.random() * 10000000)}`,
    };
  }

  componentWillMount() {
    const { updateLocation } = this.props;
    updateLocation();
  }

  render() {
    const { settings } = this.props;
    const { userName } = this.state;
    if (settings) {
      // console.log(settings.toJS());
    }

    return (
      <div>
        <div>MAIN</div>
        <div>{userName}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  updateLocation: () => dispatch(actions.updateLocation('HOME')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
