import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../firebase-config';
import { setItemAsync } from 'expo-secure-store';

interface Props {
  navigation: any
}

export default function Sign({navigation} : Props ) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    

    const handleCreateAccount = async () => {
      try {
        const newEmailAccount = await createUserWithEmailAndPassword(auth, email, password);
        await setItemAsync('session', JSON.stringify(newEmailAccount));
        navigation.navigate('TabNavigator', { screen: 'Home' });    
      } catch (error) {
        console.log(error);
        if(error instanceof Error){
          Alert.alert(error.message);
        }
      }
    }

    const handleSignIn = async () => {
      try {
        const emailAccount = await signInWithEmailAndPassword(auth, email, password);
        await setItemAsync('session', JSON.stringify(emailAccount));
        navigation.navigate('TabNavigator', { screen: 'Home' });      
      } catch (error) {
        console.log(error);
        if(error instanceof Error){
          Alert.alert(error.message);
        }
      }
    }

    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput style={styles.input} onChangeText={(text)=> setEmail(text)}/>
        <Text>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} onChangeText={(text)=> setPassword(text)}/>
        <Button title='login' onPress={handleSignIn}/>
        <Button title='create account' onPress={handleCreateAccount}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      height: 30,
      width: 200,
      borderColor: 'black',
      borderRadius: 8,
      borderWidth:1,
      marginBottom: 10
    }
  });