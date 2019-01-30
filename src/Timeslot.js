
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer } from './context/Global';

const Timeslot = ({ day, timeslot }) => {
  return (
    <Consumer>
      {({ handleClaimSlot, isSlotTaken }) => {
        const cellClasses = classnames({
          row__cell: true,
          taken: () => isSlotTaken(day, timeslot)
        });

        return (
          <button
            className={cellClasses}
            onClick={() => handleClaimSlot(day, timeslot, 1202)}
            disabled={() => isSlotTaken(day, timeslot)}
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
