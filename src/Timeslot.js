
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer } from './context/Global';

const Timeslot = ({ day, timeslot }) => {
  return (
    <Consumer>
      {({ handleClaimSlot, isSlotTaken, initFetch }) => {
        const slotIsTaken = initFetch ? isSlotTaken(day, timeslot) : false;

        const cellClasses = classnames({
          row__cell: true,
          taken: slotIsTaken
        });

        return (
          <button
            className={cellClasses}
            onClick={() => handleClaimSlot(day, timeslot, 1202)}
            disabled={slotIsTaken}
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
