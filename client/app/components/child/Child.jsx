import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import * as actions from '../../actions/actions';

class Child extends React.Component {
  static propTypes = {
    settings: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    updateLocation: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { updateLocation } = this.props;
    updateLocation();
  }

  render() {
    const { settings } = this.props;
    const id = '';
    if (settings) {
      console.log(settings.toJS());
    }

    return (
      <div>
        <div>CHILD COMPONENT</div>
        <div>Current ID - {id}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  updateLocation: () => dispatch(actions.updateLocation('CHILD')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Child);
