import { StatusBar } from 'expo-status-bar';
import { useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [allRestaurants, setAllRestaurant] = useState()
  useEffect(() => {
    const getData = async() => {
    try {
        const response = await fetch('https://my-first-firestore-cd.web.app/restaurants/')
        const data = await response.json()
        setAllRestaurant(data)  
      } catch (err) {
        console.error(err) 
    }
    }
getData()
  }, [])


  return (
    <View style={styles.container}>
      {allRestaurants?.map(singleRest=> (
      <Text key={singleRest.id}>{singleRest.name} </Text>))}
      {/* {allRestaurants?.map((singleRest=> {
        return <Text>{singleRest.name}</Text>
      }))} */}
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
