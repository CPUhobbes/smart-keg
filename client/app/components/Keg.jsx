import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

class Keg extends React.PureComponent {
  render() {
    const {
      beer,
      capacity,
    } = this.props;

    const abv = beer.get('abv');
    const category = beer.get('category');
    const description = beer.get('description');
    const ibu = beer.get('ibu');
    const title = beer.get('title');

    const capacityStart = capacity.get('start');
    const capacityRemain = capacity.get('remaining');
    const capacityPercent = capacity.get('percent');

    const capacityStyle = { height: `${100 * capacityPercent}%` };

    return (
      <div className="smart-keg__keg">
        <div className="smart-keg__keg--capacity-container">
          <div className="smart-keg__keg--capacity">
            <div
              className="smart-keg__keg--capacity-remaining"
              style={capacityStyle}
            />
          </div>
          <div className="smart-keg__keg--capacity-info">
            {capacityStart} - {capacityRemain} - {capacityPercent}
          </div>
        </div>
        <div className="smart-keg__keg--info">
          <div className="smart-keg__keg-title">
            {title}
          </div>
          <div className="smart-keg__keg-description">
            {description}
          </div>
          <div className="smart-keg__keg-specs">
            {category} - {ibu} - {abv}
          </div>
        </div>
      </div>
    );
  }
}

Keg.propTypes = {
  beer: PropTypes.instanceOf(Immutable.Map).isRequired,
  capacity: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default Keg;
