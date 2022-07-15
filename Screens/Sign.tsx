import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { setItemAsync } from 'expo-secure-store';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../firebase-config';

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
        setItemAsync("User",JSON.stringify(newEmailAccount));    
        navigation.navigate("Home");    
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
        setItemAsync("User",JSON.stringify(emailAccount));   
        navigation.navigate("Home");         
      } catch (error) {
        console.log(error);
        if(error instanceof Error){
          Alert.alert(error.message);
        }
      }
    }

    const onFacebookButtonPress = async () => {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile']);
    
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
    
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
    
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
    
      // Create a Firebase credential with the AccessToken
      const facebookCredential = FacebookAuthProvider.credential(data.accessToken);
      
      // Sign-in the user with the credential
      return signInWithCredential(auth, facebookCredential);
    }

    const handleFacebookSignIn = async () => {
      try {
        const facebookAccount = onFacebookButtonPress();
        setItemAsync("User",JSON.stringify(facebookAccount));   
        navigation.navigate("Home");         
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
        <Button title='sign in with facebook' onPress={handleFacebookSignIn}/>
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