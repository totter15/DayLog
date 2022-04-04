import {format} from 'date-fns';
import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import CalenderView from '../components/CalenderView';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

const CalenderScreen = () => {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponents={
        <CalenderView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default CalenderScreen;
