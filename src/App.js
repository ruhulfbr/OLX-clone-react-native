import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Login from './screens/Login'
import Signup from './screens/Signup'
import CreateAd from './screens/CreateAd'
import ListItem from './screens/ListItem'
import Profile from './screens/Profile'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    background :"#e9f0f6",
    text: "#304558",
  },
};



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthNavigator = () =>{
   return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="signup" component={Signup} options={{headerShown:false}} />
    </Stack.Navigator>
   );
}


const BottomNavigator = () =>{
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color,size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home'
              } else if (route.name === 'Create Add') {
                iconName = 'plus-circle';
              }
              else if (route.name === 'Profile') {
                iconName = 'user';
              }
              else if (route.name === 'Logout') {
                iconName = 'log-out';
              }

              // You can return any component that you like here!
              return <Feather name={iconName} size={30} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'deepskyblue',
            inactiveTintColor: 'gray',
            style:{
              paddingTop:5
            }
          }}
      >
        <Tab.Screen name="Home" component={ListItem} options={{title:""}}/>
        <Tab.Screen name="Create Add" component={CreateAd} options={{title:""}} />
        <Tab.Screen name="Profile" component={Profile} options={{title:""}} />
      </Tab.Navigator>
  );
}

const Navigation =()=>{

  const [user, setUser] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged((userExist)=>{
        if(userExist){
          setUser(true)
        }else{
          setUser(false)
        }
    });
           
    }, []);
  
   return(
    <NavigationContainer>
       { user ?  <BottomNavigator /> : <AuthNavigator />}
    </NavigationContainer>
   );
}


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container} backgroundColor="deepskyblue">
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="deepskyblue" />
          {/* <Login/> */}
          {/* <Signup/> */}
          {/* <CreateAd/> */}
          {/* <ListItem/> */}
          <Navigation />
      </SafeAreaView>
    </PaperProvider>
    
  );
};

const styles = StyleSheet.create({
    container:{
      backgroundColor:"#e9f0f6",
      flex:1
    }
});

export default App;
