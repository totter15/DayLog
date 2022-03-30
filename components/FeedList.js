import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';

const FeedList = ({logs, onScrollToBottom}) => {
  const onScroll = e => {
    if (!onScrollToBottom) {
      return;
    }
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceFromBottom < 72) {
      onScrollToBottom(true);
    } else {
      onScrollToBottom(false);
    }
  };
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
