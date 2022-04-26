import React,{useEffect, useState} from 'react';
import {StyleSheet, View, Text , SectionList, Image, Pressable,Button, Platform,FlatList,RefreshControl, } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import * as Print from 'expo-print';
// import { shareAsync } from 'expo-sharing';
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default function Home({navigation}){
  var data = []
  var sec = [];

  useEffect(() => {
    sec.push({title: '',data})
  }, []);


  const [refreshing, setRefreshing] = useState(false);
  

  const onRefresh = async () => {
    setRefreshing(true);
    await    sec.push({title: '',data})
    setRefreshing(false);
  };
  
   
  const db = getDatabase();
// Retrieve new posts as they are added to our database
  const dbRef = ref(db, 'exel/');

  onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      data.push(childData)
    });
  });
  sec.push({title: '',data})


 
const number = data.length
console.log(number)
  const Card = ({ty, index,info}) => {
  
   
    return (
      <View>
        <TouchableOpacity
        style={{margin:15,backgroundColor:'white'}}
        >
          <View style={{width:'100%',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{ty.StoreName}</Text>
          </View>
       
       <View style={{padding:10}}>
       <Text>Location : {ty.Location}</Text>
        <Text>Owner : {ty.Owner}</Text>
        <Text>Contact : {ty.Contant}</Text>
       
       </View>

      
        </TouchableOpacity>


      </View>
    )
  }




console.log('hellow data...............',data)
var ws = XLSX.utils.json_to_sheet(data);
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Cities");
const wbout = XLSX.write(wb, {
  type: 'base64',
  bookType: "xlsx"
});
const uri = FileSystem.cacheDirectory + 'cities.xlsx';
console.log(`Writing to ${JSON.stringify(uri)} with text: ${wbout}`);
const print = async () => {
await FileSystem.writeAsStringAsync(uri, wbout, {
  encoding: FileSystem.EncodingType.Base64
});
}
const printTo = async () => {
await Sharing.shareAsync(uri, {
  mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  dialogTitle: 'MyWater data',
  UTI: 'com.microsoft.excel.xlsx'
});
}


const all =()=>{
  print()
  printTo()
}




    return(
   
      <View style={styles.container}
    
      >
   <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{height:200}}
      >
      <View style={styles.sectionHeader}>
      <Image style={styles.img} source={require('../../assets/gootders_03.png')} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={styles.subText}>Hello, </Text>
              <Text style={styles.text}> Admin</Text>
          </View>
      </View>
  </View>
        </ScrollView>
        <View style={{padding:20, }}><Text style={{fontSize:25, fontWeight:'bold'}}>{number} {number== 0  ?" item" : " items"} </Text></View>
  <Button title='open excel' onPress={all}/>
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