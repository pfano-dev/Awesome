import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text , SectionList, Image,ScrollView} from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioForm from 'react-native-simple-radio-button';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Quizs = () => {
  const route = useRoute();

    const prevData = route.params;

   
  const navigation = useNavigation();

    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
      });

      


      useEffect(() => {
        let isCancelled = false;
    
        const advanceTime = () => {
          setTimeout(() => {
            let nSeconds = time.seconds;
            let nMinutes = time.minutes;
            let nHours = time.hours;
    
            nSeconds++;
    
            if (nSeconds > 59) {
              nMinutes++;
              nSeconds = 0;
            }
            if (nMinutes > 59) {
              nHours++;
              nMinutes = 0;
            }
            if (nHours > 24) {
              nHours = 0;
            }
    
            !isCancelled && setTime({ seconds: nSeconds, minutes: nMinutes, hours: nHours });
          }, 1000);
        };
        advanceTime();
    
        return () => {
          //final time:
          // console.log(time);
          isCancelled = false;
        };
      }, [time]);
    

const finalTime = 'final time is ' + time.hours+ ' : ' +time.minutes  +' : '+time.seconds
      const [chosenOption, setChosenOption] = useState(''); //will store our current user options
      const options = [
        { label: 'Vodacom has majority', value: 'vodacom has majority' },
        { label: 'Vodacom has an even split', value: 'vodacom has an even split' },
        { label: 'Vodacom has minority', value: 'vodacom has minority' },
      ]; //create our options for radio group

      const [chosenOption1, setChosenOption1] = useState(''); //will store our current user options
      const options1 = [
        { label: 'Available to every competitor', value: 'vailable to every competitor' },
        { label: 'Available to minority of the competitor', value: 'available to minority of the competitor' },
        { label: 'Available to some or little of the competitor', value: 'available to some or little of the competitor' },
      ]; //create our options for radio group

      const [chosenOption2, setChosenOption2] = useState(''); //will store our current user options
      const options2 = [
        { label: 'Over 100 people per day', value: 'over 100 people per day' },
        { label: 'Over 60 people per day', value: 'over 60 people per day' },
        { label: 'Below 30 people per day', value: 'Below 30 people per day' },
      ]; //create our options for radio group

      const [chosenOption3, setChosenOption3] = useState(''); //will store our current user options
      const options3 = [
        { label: 'Good', value: 'good' },
        { label: 'Not bad', value: 'not bad' },
        { label: 'Bad', value: 'bad' },
      ]; //create our options for radio group

      const [chosenOption4, setChosenOption4] = useState(''); //will store our current user options
      const options4 = [
        { label: 'Over 50k a week of Vodacom items are sold', value: 'over 50k a week of Vodacom items are sold' },
        { label: 'Over 30k a week of Vodacom items are sold', value: 'Over 30k a week of Vodacom items are sold' },
        { label: 'Less than 10k a week of Vodacom items are sold', value: 'Less tha 10k a week of Vodacom items are sold' },
      ]; //create our options for radio group

      const [chosenOption5, setChosenOption5] = useState(''); //will store our current user options
      const options5 = [
        { label: 'There is Vodacom branding outside the store, inside the store and by the point of sale 3/3', value: 'there is vodacom branding outside the store, inside the store and by the point of sale 3/3' },
        { label: 'There is Vodacom branding on 2 of the 3 options in and around the store', value: 'There is Vodacom branding on 2 of the 3 options in and around the store' },
        { label: 'There is 1 or 0 of the 3 Vodacom branding options used', value: 'There is 1 or 0 of the 3 Vodacom branding options used' },
      ]; //
     
     



const question = 'Shelf capacity: ' + chosenOption
const question1 = 'Competitor capacity: ' + chosenOption1
const question2 = 'Average store traffic: ' + chosenOption2
const question3 = 'Location type: ' + chosenOption3
const question4 = 'Brand rand value: ' + chosenOption4
const question5 = 'Branding audit: ' + chosenOption5

    function storeHighScore(
        question,
        question1,
        question2,
        question3,
        question4,
        question5,
        finalTime
      
        ) {
       const db = getDatabase();
       const reference = ref(db, 'Tquestion/');
       push(reference, {
        Question : question,
        Question1 : question1,
        Question2 : question2,
        Question3 : question3,
        Question4 : question4,
        Question5 : question5,
        FinalTime : finalTime
         });
       
         navigation.navigate('CheckOut',{prevData,question,
          question1,
          question2,
          question3,
          question4,
          question5,
          finalTime})
   }



  return (
      <ScrollView>


    <View style={{flex:1}}>
    <View style={styles.sectionHeader}>
                <Image style={styles.img} source={require('../assets/gootders_03.png')} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={styles.subText}>Hello, </Text>
                        <Text style={styles.text}> consultant</Text>
                    </View>
                </View>
            </View>


    <Text style={{textAlign:'center'}}>
      {`
        ${time.hours < 10 ? '0' + time.hours : time.hours} : ${time.minutes < 10 ? '0' + time.minutes : time.minutes} :${time.seconds < 10 ? '0' + time.seconds : time.seconds}
      `}
    </Text>
<View style={{width:'100%',padding:10}}>

<Text style={{marginVertical:19}}>Shelf capacity</Text>
      <RadioForm
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      />

</View>
 


<View style={{width:'100%',padding:10}}>

<Text style={{marginVertical:19}}>Competitor capacity</Text>
      <RadioForm
        radio_props={options1}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption1(value);
        }} //if the user changes options, set the new value
      />

</View>


<View style={{width:'100%',padding:10}}>

<Text style={{marginVertical:19}}>Average store traffic</Text>
      <RadioForm
        radio_props={options2}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption2(value);
        }} //if the user changes options, set the new value
      />

</View>


<View style={{width:'100%',padding:10}}>

<Text style={{marginVertical:19}}>Location type</Text>
      <RadioForm
        radio_props={options3}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption3(value);
        }} //if the user changes options, set the new value
      />

</View>


<View style={{width:'100%',padding:10}}>

<Text style={{marginVertical:19}}>Brand rand value</Text>
      <RadioForm
        radio_props={options4}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption4(value);
        }} //if the user changes options, set the new value
      />

</View>
 
 
<View style={{width:'100%',padding:10}}>

<Text style={{marginVertical:19}}>Branding audit</Text>
      <RadioForm
        radio_props={options5}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption5(value);
        }} //if the user changes options, set the new value
      />

</View>

<TouchableOpacity style={styles.btn} onPress={() => storeHighScore(
                question,
                question1,
                question2,
                question3,
                question4,
                question5,
                finalTime
       )}>
                <Text style={{color: 'white'}}>Submit</Text>  
            </TouchableOpacity>      

  </View>
  </ScrollView>
  )
}

export default Quizs


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
        margin:30,
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

});
