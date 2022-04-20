import React,{useEffect, useState} from 'react';
import {StyleSheet, View, Text , SectionList, Image, Pressable,Button, Platform,FlatList,RefreshControl, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
  const dbRef = ref(db, 'Checkout/');

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
    console.log(".................fffffffffffffffff",ty.item.prevDatas)
    const data =ty.item.prevDatas
    return (
      <View>
        <TouchableOpacity
        style={{margin:15,backgroundColor:'white'}}
        onPress={()=>{navigation.navigate("PrintInfo",{data})}}
        >
          <View style={{width:'100%',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{ty.item.prevData.StoreName}</Text>
          </View>
       
       <View style={{padding:10}}>
       <Text>Location : {ty.item.prevData.Location}</Text>
        <Text>Owner : {ty.item.prevData.Owner}</Text>
        <Text>Contact : {ty.item.prevData.Contant}</Text>
       
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