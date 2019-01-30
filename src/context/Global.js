import React from 'react';
import PropTypes from 'prop-types';
import firebase from '../firestore.js';

const db = firebase.firestore();

const GlobalContext = React.createContext();

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handleClaimSlot: this.handleClaimSlot.bind(this),
      isSlotTaken: this.isSlotTaken.bind(this),
      initFetch: false
    };
  }

  componentDidMount() {
    this.getLatestData();
  }

  getLatestData() {
    db.collection("2019").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const slots = doc.data();
          this.setState({
            [doc.id]: slots,
            initFetch: true
          });
        });
    });
  }

  isSlotTaken(day, timeSlot) {
    const _day = this.state[day];
    const slotAvailable = !_day ? false : _day[timeSlot];

    if (slotAvailable) {
      return true;
    } else {
      return false;
    }
  }

  handleClaimSlot(day, timeSlot, apt) {
    const slotAvailable = !this.state[day][timeSlot];

    if (slotAvailable) {
      this.getLatestData();

      const dayOfWeek = db.collection('2019').doc(day);

      return dayOfWeek.update({
        [timeSlot]: apt
      });
    } else {
      console.log('Sorry slot taken');
    }
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

Provider.propTypes = {}

const Consumer = GlobalContext.Consumer;

export { Provider, Consumer };
