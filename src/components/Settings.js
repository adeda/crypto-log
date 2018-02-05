import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const Settings = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Settings Screen
    </Text>
  </View>
);

ProfileScreen.navigationOptions = {
  title: 'Settings',
};

export default Settings;
