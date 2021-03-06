import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Sign from './Screens/Sign';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer >
                <Stack.Navigator initialRouteName="TabNavigator">
                  <Stack.Screen 
                      name="TabNavigator" 
                      component={TabNavigator}
                      options={{headerShown:false}} 
                  />
                  <Stack.Screen 
                      name="Login" 
                      component={Sign} 
                      options={{title:"Login"}}
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
