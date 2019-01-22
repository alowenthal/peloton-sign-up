
import React from 'react';
import PropTypes from 'prop-types';

import Timeslot from './Timeslot.js';

const Row = ({ day, timeslots }) => {
  const timeslotsMarkup = timeslots.map((timeslot) => <Timeslot day={day} timeslot={timeslot} />);

  return (
    <React.Fragment>
    <div className="row">
      <span className="row__day">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
      {timeslotsMarkup}
    </div>
    </React.Fragment>
  );
};

Row.propTypes = {}

export default Row;
