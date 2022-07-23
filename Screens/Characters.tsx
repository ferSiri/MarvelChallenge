import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';

interface Props {
  navigation: any
}

export default function Home({navigation} : Props) {

  useEffect(() => {
    //const subscriber = auth().onAuthStateChanged(()=>console.log("algo"));
    //return subscriber; // unsubscribe on unmount
  }, []);

    return (
      <View style={styles.container}>
        <Text>This is the home screen</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });