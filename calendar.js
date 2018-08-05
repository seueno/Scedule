import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



export default class ClanedarComponents extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      day: '',
    };
  }

  
  // タッチした日付を取得
  setSelected(day){
    //const day = day.dateString;
    this.setState({ day });

  }

  // 長押しした日付を取得
  longPressed(day) {
    this.setState({ day });
    alert(day);
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <CalendarList 
        horizontal={true}
        pagingEnabled={true}
        onDayPress={(day) => {this.setSelected(day.dateString)}}
        onDayLongPress={(day) => {this.longPressed(day.dateString)}}
        markedDates={{[this.state.day] : {selected: true, disableTouchEvent: true, selectedColor: 'blue'}}}/>
        <Agenda 
        selected ={'2018-08-30'}
        onCalendarToggled={(calendarOpened) => {alert('calendarOpened')}}
        onDayPress={(day) => {alert('day pressed')}}/>
      </View>
    );
  }
}