import { StatusBar } from 'expo-status-bar';
import { useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  useEffect(async () => {
    const response = await fetch('https://my-first-firestore-cd.web.app/restaurants/')
    const data = await response.json()
    console.log(data)
  }, [])


  return (
    <View style={styles.container}>
      <Text>Hi Carlie whats up!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
