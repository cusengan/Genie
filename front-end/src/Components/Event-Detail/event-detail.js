import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import "./event-detail.css";
import "./event.js";
import history from '../../history';
import HeaderComponent from '../HeaderComponent';
import {selectEvent} from '../../actions/eventAction';
import {bindActionCreators} from 'redux';

// import FontIcon from 'material-ui/FontIcon';
//import Dialog from 'material-ui/Dialog';

const iconStyles = {color: '#999', fontSize: '1em'};

class Event_Detail extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      event_name: "Name",
      event_image: "Details",
      event_description: "Recyling is awesome!",
      num_attending: 10
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(){
    console.log(this.props.currentEvent._id);
    console.log('userID: ',this.props.user.userInfo._id);
    const url = `http://localhost:8080/event/${this.props.currentEvent._id}/${this.props.user.userInfo._id}`;
    console.log(url);
    if(this.props.user.loggedIn){
      axios.post(url, this.state).then((response) => {
        this.props.selectEvent(this.props.currentEvent);
      }).catch((e) => {
        console.log(e);
      });
    }
  }

  render(){
    return(
      <div classNameName="Event-Detail vcenter">
      <HeaderComponent/>
        <h2 > {this.props.currentEvent.name}  </h2> {/* event->name */}
        <img src={ require('./750806.jpg') } classNameName = "Event-Image" alt = "Event Image" /> {/* event->image */}
        <div className="Event-Description">
          <span> <strong> Event Discription: </strong></span>
          <span> {this.props.currentEvent.details} </span>  {/* event->description*/}
        </div>
        <div className="Num-Attending">
        <span> <strong> People Attending: </strong></span>
        <span> {this.props.currentEvent.users.length} </span>
        </div>
        <button type="btn" onClick={this.onButtonClick}>Join event </button>

      </div>
    )
  }
}

function mapStateToProps({user, currentEvent}){
  return {user, currentEvent};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectEvent}, dispatch);
}

export default connect(mapStateToProps)(Event_Detail);
