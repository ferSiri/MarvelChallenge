import { StyleSheet, Text, View } from 'react-native';

interface Props {
  navigation: any
}

export default function Home({navigation} : Props) {
    
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