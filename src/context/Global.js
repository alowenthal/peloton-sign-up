import React from 'react';
import PropTypes from 'prop-types';

const GlobalContext = React.createContext();

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'blah blah'
    };
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
