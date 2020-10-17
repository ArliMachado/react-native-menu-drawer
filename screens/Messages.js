import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

// import { Container } from './styles';

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC46B'

  },
  title: {
    fontSize: 20,
    color: '#FFF',
  }
})


export default Messages;
