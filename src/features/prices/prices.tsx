import React from 'react';
import {useSelector} from 'react-redux';
import {Button, View, StyleSheet, Text} from 'react-native';
import {fetchPriceHistory} from './prices-slice';
import {useAppDispatch, RootState} from '../../store';

export const Prices = () => {
  const dispatch = useAppDispatch();
  const prices = useSelector((state: RootState) => state.prices.data);
  return (
    <View style={styles.container}>
      <Button
        color="#8413F5"
        title="Fetch Prices"
        onPress={() => dispatch(fetchPriceHistory())}
        accessibilityLabel="Fetch Prices"
      />
      {prices && (
        <>
          <Text>Time</Text>
          <Text>{prices[0][0]}</Text>
          <Text>Low</Text>
          <Text>{prices[0][1]}</Text>
          <Text>High</Text>
          <Text>{prices[0][2]}</Text>
          <Text>Open</Text>
          <Text>{prices[0][3]}</Text>
          <Text>Close</Text>
          <Text>{prices[0][4]}</Text>
          <Text>Volume</Text>
          <Text>{prices[0][5]}</Text>
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
