import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  View,
} from 'react-native';
import {Trades} from './features';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={styles.image}
        source={require('./assets/chipper-logo.png')}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.body}>
          If you see this you are ready for your interview
        </Text>
        <Text style={styles.body}>🚀 See you soon 🚀</Text>
        <Trades />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '50%',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
  },
});

export {App};
