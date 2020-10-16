import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Button, Text, Image } from "react-native";

import Dashboard from "./screens/Dashboard";
import Messages from "./screens/Messages";
import Contact from "./screens/Contact";
// import { Container } from './styles';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <Button title='Menu' onPress={() => navigation.openDrawer()}>
          </Button>
        )
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  )

}

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} >
      <View>
        <View style={styles.avatarContent}>
          <Image source={{
            uri:
              "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            height: 60,
            width: 60
          }}
          resizeMode="center"
          style={styles.avatar}
          />
          <Text style={styles.avatarText}>Usuario</Text>
          <Text style={styles.avatarTextContact}>usuario@mail.com</Text>
        </View>
        <DrawerItem
          label="Dashboard"
          onPress={() => props.navigation.navigate('Dashboard')}
        />
        <DrawerItem
          label="Messages"
          onPress={() => props.navigation.navigate('Messages')}
        />
        <DrawerItem
          label="Contact"
          onPress={() => props.navigation.navigate('Contact')}
        />
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    color: '#071E22',
    fontSize: 12

  },

  avatarContent: {
    flex: 0.4,
    margin: 20,
    marginBottom: 50,
  },
  avatar: {
    borderRadius: 30
  },

  avatarText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  avatarTextContact: {
    fontSize: 12,
  }
})

export default () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Screens" component={Screens} />
    </Drawer.Navigator>
  )
}
