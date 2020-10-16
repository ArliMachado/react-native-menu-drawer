import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import { Container } from './styles';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Contact;