import { StatusBar } from 'expo-status-bar';
import { useEffect, useState} from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, ScrollView, Image} from 'react-native';

const image = {uri:'https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }


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
      <ImageBackground resizeMode='cover' source={image} style={styles.container} >
        <ScrollView>
        {allRestaurants
          ? (allRestaurants?.map(singleRest=> (
            <>
          <Text style={styles.restaurantName} 
          key={singleRest.id}>
          {singleRest.name}
          </Text>
          <Image 
          source={{uri:singleRest.image}} 
          style={{ width: '100%' , height:100}}
           />
          </>
          )))
          : (
          <ActivityIndicator  size='large' color='orange'/>)
        }

      </ScrollView>
      <Text>Hi Carlie whats up!</Text>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantName:{
    color: 'white',
    fontSize: 70,
    marginVertical:150 
  }

});
