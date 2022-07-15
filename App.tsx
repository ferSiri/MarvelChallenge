import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign from './Screens/Sign';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer >
                <Stack.Navigator initialRouteName="Login">
                  <Stack.Screen 
                      name="Login" 
                      component={Sign} 
                      options={{title:"Login"}}
                  />
                  <Stack.Screen 
                      name="Home" 
                      component={Home} 
                      options={{title:"Home"}}
                  />
                </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
