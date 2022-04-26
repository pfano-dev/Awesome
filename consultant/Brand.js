import React,{useState, useEffect} from 'react';
import { StyleSheet,View, Text , Image, Button, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles'
import { useNavigation } from '@react-navigation/native';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { useRoute } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';


export default function Brand(){
    const navigation =useNavigation();
    const route = useRoute();
    const prevData = route.params;

    console.log(".................................",prevData)

const [isSelected, setSelection] = useState(false);
const [isSelected1, setSelection1] = useState(false);
const [isSelected2, setSelection2] = useState(false);
const [isSelected3, setSelection3] = useState(false);
const [isSelected4, setSelection4] = useState(false);

const [isSel, setSel] = useState("");
const [isSel1, setSel1] = useState("");
const [isSel2, setSel2] = useState("");
const [isSel3, setSel3] = useState("");
const [isSel4, setSel4] = useState("");

const fun =()=>{

    if(isSelected){
      setSel('Posters')
      console.log(isSel)
    }
     if(isSelected1){
      setSel1('Buntings')
      console.log(isSel1)
    }
     if(isSelected2){
      setSel2('Paiting')
      console.log(isSel2)
    }
     if(isSelected3){
      setSel3('Snapper frames')
      console.log(isSel3)
    }
     if(isSelected4){
      setSel4('Chromo deck')
      console.log(isSel4)
    }
  
    }
  


    
 
 

    return(
      <ScrollView>
        <View style={{flex: 1, alignItems:'center'}}>
             <View style={[styles.sectionHeader,{width:'100%'}]}>
                <Image style={styles.img} source={require('../assets/gootders_03.png')} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={styles.subText}>Hello, </Text>
                        <Text style={styles.text}> consultant</Text>
                    </View>

                </View>
            </View>

            <View style={styless.container}>
<View style={{borderWidth:1, borderColor:'gray',padding:10,width:'90%'}}>
<View><Text style={{fontWeight:'bold',fontSize:30,marginVertical:20}}>Branding Requirements</Text></View>
<View style={styless.checkboxContainer}>
  <Checkbox
    value={isSelected}
    onValueChange={setSelection}
    style={styless.checkbox}
  />
  
  <Text style={styless.label}>Posters</Text>
</View>

<View style={styless.checkboxContainer}>
  <Checkbox
    value={isSelected1}
    onValueChange={setSelection1}
    style={styless.checkbox}
  />
  
  <Text style={styless.label}>Buntings</Text>
</View>

<View style={styless.checkboxContainer}>
  <Checkbox
    value={isSelected2}
    onValueChange={setSelection2}
    style={styless.checkbox}
  />
  
  <Text style={styless.label}>Painting</Text>
</View>

<View style={styless.checkboxContainer}>
  <Checkbox
    value={isSelected3}
    onValueChange={setSelection3}
    style={styless.checkbox}
  />
  
  <Text style={styless.label}>Snapper frames</Text>
</View>
<View style={styless.checkboxContainer}>
  <Checkbox
    value={isSelected4}
    onValueChange={setSelection4}
    style={styless.checkbox}
  />
  
  <Text style={styless.label}>Chromo deck</Text>
</View>

            
            <TouchableOpacity style={{backgroundColor: '#1e88e5', 
                    borderRadius: 30, padding: 10,
                     justifyContent:'center',alignItems:'center', marginVertical:10}} 
                     onPress={()=>fun()}
                 >
                     
                   
                        <Text style={{color: 'white',fontSize:20}}>
                           Save
                        </Text>
                      
                    </TouchableOpacity>


</View>
            
                   
                    <TouchableOpacity style={{backgroundColor: 'green', 
                    borderRadius: 30, padding: 10, flexDirection: 'row',
                     justifyContent:"space-between", marginTop:30}} 
                     onPress={()=> navigation.navigate('CheckOut',{prevData,isSel,isSel1,isSel2,isSel3,isSel4})}
                 >
                     
                   
                        <Text style={{color: 'white', padding: 10}}>
                           NEXT
                        </Text>
                        <Ionicons name="md-arrow-forward" style={styles.icon} size={40} color={'#ccc'}/>
                    </TouchableOpacity>
        
            </View>
         
        </View>
        </ScrollView>
    );
}



const styless = StyleSheet.create({
    container: {
    width:'100%',
    padding:10,
    alignItems:'center'
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
      fontSize:20,

    },
  });