import React, { Component } from 'react';
import  Counter  from './redux-counter/components/Counter'
import ModalScreen from './redux-modal/component/Modal'
import Screen from './redux-modal/component/Screen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen/>
      </div>
    );
  }
}

export default App;
