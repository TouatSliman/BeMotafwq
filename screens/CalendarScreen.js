import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Alert } from 'react-native';
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
const events_data = [
  {
    title: 'رياضيات',
    startTime: genTimeBlock('MON', 8, 30),
    endTime: genTimeBlock('MON', 10),
    location: 'القسم 401',
    extra_descriptions: ['أحمد'],
  },
  {
    title: 'رياضيات',
    startTime: genTimeBlock('WED', 8, 30),
    endTime: genTimeBlock('WED', 10),
    location: 'القسم 401',
    extra_descriptions: ['أحمد'],
  },
  {
    title: 'فيزياء',
    startTime: genTimeBlock('MON', 10),
    endTime: genTimeBlock('MON', 11, 30),
    location: 'المختبر 201',
    extra_descriptions: ['سارة'],
  },
  {
    title: 'فيزياء',
    startTime: genTimeBlock('WED', 11, 30),
    endTime: genTimeBlock('WED', 13),
    location: 'المختبر 201',
    extra_descriptions: ['سارة'],
  },
  {
    title: 'اللغة الصينية',
    startTime: genTimeBlock('TUE', 8, 30),
    endTime: genTimeBlock('TUE', 10),
    location: 'القسم 402',
    extra_descriptions: ['ذو الفقار'],
  },
  {
    title: 'العربية',
    startTime: genTimeBlock('FRI', 8, 30),
    endTime: genTimeBlock('FRI', 10),
    location: 'القسم 402',
    extra_descriptions: ['أحمد'],
  },
  {
    title: 'اللغة الإنجليزية',
    startTime: genTimeBlock('THU', 8,30),
    endTime: genTimeBlock('THU', 10),
    location: 'القسم 402',
  },
  {
    title: 'اللغة الإنجليزية',
    startTime: genTimeBlock('FRI', 14),
    endTime: genTimeBlock('FRI', 15, 30),
    location: 'القسم 402',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 7;
    this.pivotDate = genTimeBlock('mon');
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert('onEventPress', JSON.stringify(evt));
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={events_data}
            pivotTime={7}
            pivotEndTime={24}
            pivotDate={this.pivotDate}
            nDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="ar"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    direction: 'rtl',
    paddingBottom: 70,
  },
});
