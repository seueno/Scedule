import React, { Component } from 'react';
import {
  View,
} from 'react-native';
//import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Calendar from './calendar.js';
import  Footer  from './footer.js';

export default class App extends React.Component {

  render() {
    
    return (
      <View style={{ marginTop: 20 }}>
        <Calendar />
        <Footer />
      </View>
    );
  }


}
