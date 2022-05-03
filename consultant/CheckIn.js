import React,{useState} from 'react';
import { View, Text , StyleSheet,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { getDatabase, ref, onValue, push, serverTimestamp } from 'firebase/database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// import Geolocation from 'react-native-geolocation-service';
import { useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';


// navigator.geolocation = require('react-native-geolocation-service');

export default function Checkin({route: { params } }){

    const route = useRoute();

    const prevData = route.params;


    
  const [location, setLocation] = useState(
    { coords:{
      accuracy: 899.9990234375,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 0,
      latitude: -25.7159813,
      longitude: 28.360622,
      speed: 0,
    },
  }
  );
  const [errorMsg, setErrorMsg] = useState(null);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  const latitude=location.coords.latitude
  const longitude=location.coords.longitude

  const current={
    latitude:latitude,
    longitude:longitude
  }

  function storeHighScore(
    current, prevData
    ) {
   const db = getDatabase();
   const reference = ref(db, 'location/');
   push(reference, {
    Current : current,
    prevData: prevData
     });
    
     navigation.navigate('Quizs',{prevData})
}

console.log(".......data.................ff",prevData)
    const navigation = useNavigation();

    const [isEdit, setIsEdit] = useState(false);
    const [coodinate, setCoodinates] = useState(0)
    const { id } = params;
    const db = getDatabase();
    const dbRef = ref(db, 'Stores/' + id);
    let childKey;
    let [store, setStore] = useState();
    
    // onValue(dbRef, (snapshot) => {
    //     childKey = snapshot.key;
    //     const childData = snapshot.val();
    //     [store, setStore] = useState({
    //         StoreName: childData['StoreName'],
    //         location :childData['Location'],
    //         owner: childData['Owner'],
    //         contant : childData['Contacts']
    //        }); 
    // });


    console.log("this is contact")
    // Geolocation.getCurrentPosition(data => {
    //     setCoodinates(data.coords.altitude)
    // })
    //const [storeName, setStoreName] = useState(store.StoreName);
    return(
        <View style={[styles.container,{marginTop:30}]}>
            <Image style={[styles.img,{marginTop:30}]} source={require('../assets/gootders_03.png')} />
            <Ionicons name="md-home" style={styles.icon} size={50} color={'#ccc'}/>
            <Text style={{fontSize: 25, fontWeight: '700',padding:10, alignSelf:'center'}}>{prevData.item.item.StoreName}</Text>           
            
            <Text style={styles.label}>Store Location</Text>
            <Text style={styles.textViewer}>{prevData.item.item.Location}</Text>
            <Text style={styles.label}>Store Owner</Text>
            <Text style={styles.textViewer}>{prevData.item.item.Owner}</Text>
            <Text style={styles.label}>Contacts</Text>
            <Text style={styles.textViewer}>{prevData.item.item.Contant}</Text>

            {/* <Text style={styles.label}>{coodinate}</Text> */}

         
            
            <TouchableOpacity style={styles.btn} 
               onPress={() => storeHighScore(current,prevData)}       
          >
                <Text style={{color: 'white'}}>Confirm</Text>  
            </TouchableOpacity>      


        </View>
    );
}

function TrackCreate(location,useid,navigation) {
    const db = getDatabase();
    const reference = ref(db, 'Track/');
    push(reference, {
        CheckInTime: serverTimestamp(),
        LocationID: location,
        UserID:useid,
        CheckOutTime: ":",
        Duration: ":",
      });
      navigation.navigate('quiz', { id: location });
}

const styles = StyleSheet.create({
    container:{
        padding: 30,
        paddingTop:0,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        backgroundColor:'#F7F8FA',
        marginTop: 0,
    },
    label:{
        fontSize: 16,
        fontWeight: '700'
    },
    textViewer:{
        marginBottom: 20,
        fontSize: 16,
    },
    textBox:{
        backgroundColor: '#efefef',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    btn:{
        height: 50,
        marginTop: 30,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 30,
        alignSelf: 'stretch'
    },
    icon:{
        alignSelf: 'center',
    },

    img:{
        width: 200,
        height: 50,
    },
});


