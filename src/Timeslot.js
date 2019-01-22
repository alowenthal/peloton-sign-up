
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer } from './context/Global';

const Timeslot = ({ day, timeslot }) => {
  const cellClasses = classnames({
    row__cell: true
  });

  return (
    <Consumer>
      {({ handleClaimSlot }) => {
        return (
          <button
            className={cellClasses}
            onClick={() => handleClaimSlot(day, timeslot, 1202)}
          >
            {timeslot}
          </button>
        );
      }}
    </Consumer>
  );
};

Timeslot.propTypes = {}

export default Timeslot;
