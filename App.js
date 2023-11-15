import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

//este Stack va a contener toda nuestra navegacion

const Stack = createStackNavigator()

//para tener mas orden en el codigo, creo una funcion MyStack para crear vistas o screens

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen />
    </Stack.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#41B21E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
