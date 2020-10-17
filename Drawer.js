import React, {useState} from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feater from "react-native-vector-icons/dist/Feather";
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Button, Text, Image } from "react-native";

import Dashboard from "./screens/Dashboard";
import Messages from "./screens/Messages";
import Contact from "./screens/Contact";
import Animated from 'react-native-reanimated';
// import { Container } from './styles';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style}) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Feater
              name="menu"
              size={25}
              color="#071E22"
              style={styles.button}
              onPress={() => navigation.openDrawer()}
            />
          )
        }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </Animated.View>
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
          labelStyle={{ marginLeft: -16 }}
          onPress={() => props.navigation.navigate('Dashboard')}
          icon={() => <AntDesign name="dashboard" color="black" size={16}/>}
        />
        <DrawerItem
          label="Messages"
          labelStyle={{ marginLeft: -16 }}
          onPress={() => props.navigation.navigate('Messages')}
          icon={() => <AntDesign name="message1" color="black" size={16}/>}

        />
        <DrawerItem
          label="Contact"
          labelStyle={{ marginLeft: -16 }}
          onPress={() => props.navigation.navigate('Contact')}
          icon={() => <AntDesign name="phone" color="black" size={16}/>}

        />
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  stack: {
    flex: 1,
  },
  button: {
    marginTop: 15,
    marginLeft: 10,

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
  //33,34
  //https://www.youtube.com/watch?v=iD8N6cxyffw&t=252s
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  });

  const screensStyles = { transform: [{ scale }]};

  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      initialRouteName="Dashboard"
      drawerContentOptions={{
        activeBackgroundColor: "transparent",
        activeTintColor: "green",
        inactiveTintColor: "green"
      }}
      drawerContent={props => {
        setTimeout(() => {
          setProgress(props.progress);
        }, 100)
        return <DrawerContent {...props} />
      }}>
      <Drawer.Screen name="Screens">
        {props => <Screens {...props} style={screensStyles} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}
