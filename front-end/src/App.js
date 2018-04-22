import React, { Component } from 'react';
import EventsDisplay from './EventsDisplay.js'
import HeaderComponent from './Components/HeaderComponent';
import Event_Detail from './Components/Event-Detail/event-detail'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <EventsDisplay />
        <Event_Detail/>
      </div>
    );
  }
}
export default App;
