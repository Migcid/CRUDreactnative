import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

//importando fonts desde gFonts.
/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Borel&family=Capriola&family=Kalam&family=Roboto+Mono&family=Roboto:wght@100;300&display=swap');*/


//este Stack va a contener toda nuestra navegacion

const Stack = createNativeStackNavigator()
import createUsers from './screens/createUsers.js'
import usersDetail from './screens/usersDetails.js'
import usersList from './screens/usersList.js'


//para tener mas orden en el codigo, creo una funcion MyStack para crear vistas o screens

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="CreateUsers" component={createUsers} />
      <Stack.Screen name="UsersDetails" component={usersDetail} />
      <Stack.Screen name="UsersLists" component={usersList} />
    </Stack.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer >
      <MyStack/>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#41B21E',
    alignItems: 'center',
    justifyContent: 'center',
    color: "blue",
    fontFamily:"Roboto mono",
  },
});
