import React from 'react';
import './App.scss';

import Row from './Row.js';
import { Provider } from './context/Global';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentWeek: '',
      daysOfWeek: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ],
      timeSlotsAvail: [
        '6:00am',
        '6:30am',
        '7:00am',
        '7:30am',
        '8:00am',
        '8:30am',
        '9:00am',
        '9:30am',
        '10:00am',
        '10:30am',
        '11:00am',
        '11:30am',
        '12:00pm',
        '12:30pm',
        '1:00pm',
        '1:30pm',
        '2:00pm',
        '2:30pm',
        '3:00pm',
        '3:30pm',
        '4:00pm',
        '4:30pm',
        '5:00pm',
        '5:30pm',
        '6:00pm',
        '6:30pm',
        '7:00pm',
        '7:30pm',
        '8:00pm',
        '8:30pm',
        '9:00pm',
        '9:30pm',
        '10:00pm',
        '10:30pm',
      ],
      slotsStatus: []
    }
  }

  render() {
    const { daysOfWeek, timeSlotsAvail } = this.state;

    const weekMarkup = daysOfWeek.map((day) => <Row day={day} timeslots={timeSlotsAvail} />);
    const timeslotsMarkup = timeSlotsAvail.map((timeslot) => <li>{timeslot}</li>);

    return (
      <Provider>
        <div className="sign-up">
          <ul className="sign-up__key--times">
            {timeslotsMarkup}
          </ul>
          {weekMarkup}
        </div>
      </Provider>
    );
  }
}
