import React,{useEffect, useState} from 'react';
import {StyleSheet, View, Text , SectionList, Image, Pressable,Button, Platform,FlatList,RefreshControl, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';


export default function Home({navigation}){
  var data = []
  var sec = [];



  const [refreshing, setRefreshing] = useState(false);
  

  const onRefresh = async () => {
    setRefreshing(true);
    await    sec.push({title: '',data})
    setRefreshing(false);
  };
  
   
  const db = getDatabase();
// Retrieve new posts as they are added to our database
  const dbRef = ref(db, 'location/');

  onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      data.push({key: childKey, item: childData})
    });
  });
  sec.push({title: '',data})

  useEffect(() => {
    sec.push({title: '',data})
  }, []);

 


  const Card = ({ty, index,info}) => {
    console.log(".................tydata",ty.item.prevData.item.item)
    return (
      <View>
        <TouchableOpacity
        style={{margin:15,backgroundColor:'white'}}
        onPress={()=>{navigation.navigate("Tracker",{ty})}}
        >
          <View style={{width:'100%',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{ty.item.prevData.item.item.StoreName}</Text>
          </View>
       
       <View style={{padding:10}}>
       <Text>Location : {ty.item.prevData.item.item.Location}</Text>
        <Text>Owner : {ty.item.prevData.item.item.Owner}</Text>
        

       </View>

      
        </TouchableOpacity>


      </View>
    )
  }

    return(
      <View style={styles.container}>

      <View style={styles.sectionHeader}>
      <Image style={styles.img} source={require('../../assets/gootders_03.png')} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={styles.subText}>Hello, </Text>
              <Text style={styles.text}> Admin</Text>
          </View>
      </View>
  </View>


<FlatList
              data={data}
              keyExtractor={({ key }) => key}
              renderItem={({item, index}) => <Card  ty={item} index={index} />}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            /> 


  </View>
    );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
img:{
    width: 200,
    height: 100,
    marginTop: 20,
},
btn:{
    width: 100,
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 30,
},

sectionHeader: {
  backgroundColor:'#F7F8FA',
  borderBottomEndRadius: 50,
  borderBottomStartRadius: 50,
  marginLeft: 5,
  paddingBottom:20,
},
item: {
  paddingBottom: 10,
  paddingTop: 20,
  paddingLeft:10,
  paddingRight: 10,
  fontSize: 18,
  height: 60,
  textAlign: 'left'
},

subText:{
    fontSize: 22,
    color: 'rgb(128, 128, 128)',
    paddingLeft:20,
},
text:{
    fontSize: 22,
},


  containers: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ecf0f1',
    flexDirection: 'column',
    padding: 8,
  },
  spacer: {
    height: 8
  },
  printer: {
    textAlign: 'center',
  }



    
});














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



// export default function Tracking(){


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

