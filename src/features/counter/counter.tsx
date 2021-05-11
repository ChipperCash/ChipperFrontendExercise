import React from 'react';
import {useSelector} from 'react-redux';
import {Text, Button, View, StyleSheet} from 'react-native';
import {increment, decrement} from './counter-slice';
import {RootState, useAppDispatch} from '../../store';

const chipperPrimary = '#8413F5';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter);
  return (
    <View style={styles.container}>
      <Button
        color={chipperPrimary}
        title="+"
        onPress={() => dispatch(increment({quantity: 1}))}
        accessibilityLabel="Counter up"
      />
      <Text style={styles.text}>{count}</Text>
      <Button
        color={chipperPrimary}
        title="-"
        onPress={() => dispatch(decrement({quantity: 1}))}
        accessibilityLabel="Counter down"
      />
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
