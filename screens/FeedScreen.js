import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWritingButton from '../components/FloatingWritingButton';
import LogContext from '../contexts/LogContext';

const FeedScreen = () => {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrollToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrollToBottom={onScrollToBottom} />
      <FloatingWritingButton hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedScreen;
