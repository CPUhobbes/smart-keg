import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import Keg from './Keg';
import * as actions from '../actions/actions';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: `USER-${Math.round(Math.random() * 10000000)}`,
    };
  }

  render() {
    const beer = Immutable.fromJS({
      abv: '5.7',
      category: 'Pale Ale',
      description: 'Light citrus beer perfect for summer nights',
      ibu: '73',
      title: 'Magic in the Mountains',
    });

    const capacity = Immutable.fromJS({
      start: 5,
      remaining: 3.7,
      percent: 0.74,
    });

    return (
      <div>
        <Keg beer={beer} capacity={capacity} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
