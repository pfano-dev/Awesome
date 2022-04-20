import { StyleSheet, Text, View } from 'react-native';
import React,{ useState, useEffect,useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import MapView,{ Marker } from 'react-native-maps';


const Tracker = () => {
    const route = useRoute();

    const prevData = route.params;

    console.log('.........',prevData)

     const curentLocation =  prevData.ty.item.Current;

    const latitude =   prevData.ty.item.Current.latitude;
    const longitude =  prevData.ty.item.Current.longitude;
          console.log( longitude)
          
          const mapRef = useRef()

  return (
    <MapView
                ref={mapRef}
                style={{width: '100%', height:'100%' }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
    
  
 <Marker
    //   key={index}
      coordinate={curentLocation}
      title={'myCurrentLocation'}
    //   description={marker.description}
    
    />
      </MapView>

  )
}

export default Tracker

const styles = StyleSheet.create({})





// import {StyleSheet, View, Text , SectionList} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import React, { useState, useEffect,useRef } from 'react';
// import * as Location from 'expo-location';
// import MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';
// import { useNavigation } from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';
// import { getDatabase, ref, onValue, push, set } from 'firebase/database';



// export default function Tracker(){


//   var data = [{item:{
//     Current:{
//       latitude:-25.88301165458914,
//       longitude:28.159965296524835,

//     }
//   }}]
//   var sec = [];

//   const db = getDatabase();
// // Retrieve new posts as they are added to our database
//   const dbRef = ref(db, 'location/');

//   onValue(dbRef, (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//       const childKey = childSnapshot.key;
//       const childData = childSnapshot.val();
//       data.push({key: childKey, item: childData})
//     });
//   });
//   sec.push({title: '',data})


//   useEffect(() => {
   
//     sec.push({title: '',data})

//   }, []);
//   const post = data[data.length - 1];


// console.log(".......last data",post)

// console.log(post.item.Current)
// const curentLocation = post.item.Current;

// const latitude =  post.item.Current.latitude;
// const longitude =  post.item.Current.longitude;
//       console.log( longitude)
      

//       const mapRef = useRef()


//     return(
//         // <View style={styles.container}>
//         //     <View style={styles.container}>
//         //       <SectionList
//         //         sections={sec}
//         //         renderItem={({item}) => tempElement(item,navigation)}
//         //         renderSectionHeader={({section}) => 
//         //         <Text style={styles.sectionHeader}>{section.title}</Text>}
//         //         keyExtractor={(item, index) => index}
//         //       />
//         //     </View>

//             <MapView
//             ref={mapRef}
//             style={{width: '100%', height:'100%' }}
//     initialRegion={{
//       latitude: latitude,
//       longitude: longitude,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }}
//   >

// <Marker
//     //   key={index}
//       coordinate={curentLocation}
//       title={'myCurrentLocation'}
//     //   description={marker.description}
    
//     />
//   </MapView>
           
//     );
// }

// // function tempElement(item,navigation){
// //     return(
// //         <TouchableOpacity onPress={() => {navigation.navigate('Store', { id: item.key})}} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
// //             <Ionicons name="md-home" style={styles.icon} size={50} color={'#ccc'}/>
// //             <Text style={styles.item}>{item.item}</Text>
// //             <Text style={styles.paragraph}>{text}</Text>
// //         </TouchableOpacity>
// //     );
// // }

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         padding: 10,
//       },

//     btn:{
//         width: 150,
//         height: 50,
//         backgroundColor: 'green',
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignSelf: 'flex-end',
//         borderRadius: 30,
//     },

//     sectionHeader: {
//       paddingTop: 2,
//       paddingLeft: 10,
//       paddingRight: 10,
//       paddingBottom: 2,
//       fontSize: 14,
//       fontWeight: 'bold',
//       backgroundColor: 'rgba(247,247,247,1.0)',
//       flex:2,
//     },
//     item: {
//       paddingBottom: 10,
//       paddingTop: 20,
//       paddingLeft:10,
//       paddingRight: 10,
//       fontSize: 18,
//       height: 60,
//       textAlign: 'left'
//     },

  
      

    
// });

