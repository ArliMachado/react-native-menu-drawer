import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import { Container } from './styles';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#88B04B'

  },
  title: {
    fontSize: 20,
    color: '#FFF',
  }
})

export default Dashboard;
