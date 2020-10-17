import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import { Container } from './styles';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#41D5FB'

  },
  title: {
    fontSize: 20,
    color: '#FFF',
  }
})

export default Contact;
