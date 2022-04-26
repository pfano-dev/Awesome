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


export default function CheckOut(){

    const route = useRoute();


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    time = new Date().toLocaleTimeString();
 
    day = today.toString() +"/ "+ time;

    const prevDatas = route.params;

    console.log('dadadadsd..........sddadsdd',prevDatas)

const prevData =prevDatas.prevData.prevData.prevData.item.item
   

  
    const Time_Date = day;
    const CCFC_Name_Surname= prevData.names;
    const Area= prevData.value;
    const Contant = prevData.Contant;
    const Location = prevData.Location;
    const Owner = prevData.Owner;
    const StoreName = prevData.StoreName;
    const which_wholesaler_are_they_linke_to = prevData.Question1;
    const do_they_sell_Vodacom_products = prevData.Question2;
    const do_they_have_product_knowledge_training = prevData.Question3;
    const do_they_experience_network_issues = prevData.Question4;
    const do_they_Rica = prevData.Question5;
    const network_Coverage_Inside_the_store = prevData.chosenOption;
    const network_Outside_the_store = prevData.chosenOption1;
    const time_taken = prevDatas.prevData.finalTime;
    const shelf_capacity = prevDatas.prevData.question;
    const competitor_capacity = prevDatas.prevData.question1;
    const average_store_traffic = prevDatas.prevData.question2;
    const location_type = prevDatas.prevData.question3;
    const brand_rand_value = prevDatas.prevData.question4;
    const branding_audit= prevDatas.prevData.question5;
    const branding_Requirements = prevDatas.isSel +"/ " + prevDatas.isSel1 +"/ " +prevDatas.isSel2 +"/ " +prevDatas.isSel3 + "/ "+prevDatas.isSel4

    

    function storeHighScores(
         Time_Date,
         CCFC_Name_Surname,
         Area,
         Contant,
         Location,
         Owner ,
         StoreName ,
         which_wholesaler_are_they_linke_to ,
         do_they_sell_Vodacom_products ,
         do_they_have_product_knowledge_training,
         do_they_experience_network_issues ,
         do_they_Rica ,
         network_Coverage_Inside_the_store,
         network_Outside_the_store,
         time_taken ,
         shelf_capacity ,
         competitor_capacity ,
         average_store_traffic ,
         location_type ,
         brand_rand_value ,
         branding_audit ,
         branding_Requirements
        
        ) {
       const db = getDatabase();
       const reference = ref(db, 'exel/');
       push(reference, {
        Time_Date:Time_Date,
        CCFC_Name_Surname : CCFC_Name_Surname,
        Area:Area,
        Contant : Contant ,
        Location : Location ,
        Owner : Owner ,
        StoreName : StoreName,
        which_wholesaler_are_they_linke_to :which_wholesaler_are_they_linke_to ,
        do_they_sell_Vodacom_products : do_they_sell_Vodacom_products ,
        do_they_have_product_knowledge_training : do_they_have_product_knowledge_training ,
        do_they_experience_network_issues : do_they_experience_network_issues ,
        do_they_Rica : do_they_Rica ,
        network_Coverage_Inside_the_store: network_Coverage_Inside_the_store,
        network_Outside_the_store:network_Outside_the_store,
        time_taken :time_taken,
        shelf_capacity :  shelf_capacity,
        competitor_capacity : competitor_capacity,
        average_store_traffic : average_store_traffic,
        location_type : location_type ,
        brand_rand_value : brand_rand_value,
        branding_audit :branding_audit,
        branding_Requirements : branding_Requirements
         });
         
   }
    
   useEffect(() => {
    storeHighScores(
        Time_Date,
        CCFC_Name_Surname,
        Area,
        Contant,
        Location,
        Owner ,
        StoreName ,
        which_wholesaler_are_they_linke_to ,
        do_they_sell_Vodacom_products ,
        do_they_have_product_knowledge_training ,
        do_they_experience_network_issues ,
        do_they_Rica ,
        network_Coverage_Inside_the_store,
        network_Outside_the_store,
        time_taken ,
        shelf_capacity ,
        competitor_capacity ,
        average_store_traffic ,
        location_type ,
        brand_rand_value ,
        branding_audit ,
        branding_Requirements
    )
  }, []);
  


    const navigation =useNavigation();

    function storeHighScore(
    
    prevDatas, prevData
        ) {
       const db = getDatabase();
       const reference = ref(db, 'Checkout/');
       push(reference, {
        prevDatas, prevData
         });
         navigation.navigate('Welcome')
   }

    

    return(
        <View style={{flex: 1}}>
             <View style={styles.sectionHeader}>
                <Image style={styles.img} source={require('../assets/gootders_03.png')} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={styles.subText}>Hello, </Text>
                        <Text style={styles.text}> consultant</Text>
                    </View>

                </View>
            </View>


            <View style={styles.container}>
            
                    <TouchableOpacity style={{backgroundColor: 'green', 
                    borderRadius: 30, padding: 10, flexDirection: 'row',
                     justifyContent:"space-between"}} 
                     onPress={() => storeHighScore(
                        prevDatas, prevData
               )}>
                     
                   
                        <Text style={{color: 'white', padding: 10}}>
                            CheckOut
                        </Text>
                        <Ionicons name="md-arrow-forward" style={styles.icon} size={40} color={'#ccc'}/>
                    </TouchableOpacity>
        
            </View>
         
        </View>
    );
}



const styless = StyleSheet.create({
    container: {
      justifyContent: "center",
      marginLeft:20
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