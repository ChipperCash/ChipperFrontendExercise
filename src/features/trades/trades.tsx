import React from 'react';
import {useSelector} from 'react-redux';
import {Button, View, StyleSheet, Text} from 'react-native';
import {fetchTradeHistory} from './trades-slice';
import {useAppDispatch, RootState} from '../../store';

export const Trades = () => {
  const dispatch = useAppDispatch();
  const trades = useSelector((state: RootState) => state.trades?.data);

  return (
    <View style={styles.container}>
      <Button
        color="#8413F5"
        title="Fetch Trades"
        onPress={() => dispatch(fetchTradeHistory())}
        accessibilityLabel="Fetch Trades"
      />
      {trades && (
        <>
          <Text>Time</Text>
          <Text>{trades[0].time}</Text>
          <Text>Coinbase Trade ID</Text>
          <Text>{trades[0].trade_id}</Text>
          <Text>Trade Price</Text>
          <Text>{trades[0].price}</Text>
          <Text>Trade Size</Text>
          <Text>{trades[0].size}</Text>
          <Text>Trade Size</Text>
          <Text>{trades[0].side}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
