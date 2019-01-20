import React, { Component } from 'react';
import './App.scss';
import firebase from './firestore.js';

var db = firebase.firestore();

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentWeek: '',
      monday: [],
      tuesday: []
    }

    this.handleClaimSlot = this.handleClaimSlot.bind(this);
  }

  componentDidMount() {
    db.collection("2019").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const slots = doc.data().slots;
            this.setState({
              [doc.id]: slots
            });
        });
    });
  }

  handleClaimSlot(day, timeSlot, apt) {
    const slotAvailable = !this.state[day][timeSlot];

    if (slotAvailable) {
      console.log('Slot available!');
      // const dayOfWeek = db.collection('2019').doc(day);
      //
      // return dayOfWeek.update({
      //   slots: firebase.firestore.FieldValue.arrayUnion({
      //     apartment: apt,
      //     timeSlot
      //   })
      // });
    } else {
      console.log('Sorry slot taken');
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClaimSlot('tuesday', '6:30', 4545)}>Assign Slot Monday 6:30</button>
      </div>
    );
  }
}

export default App;
