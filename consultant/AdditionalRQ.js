import { View, Image,ScrollView,  KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import RadioForm from 'react-native-simple-radio-button';

export default function AdditionalRQ(){

    const route = useRoute();

    const prevData = route.params;

    console.log("............",prevData)
    console.log("this is data",prevData.contant);

    const contant = prevData.contant;
    const storeName = prevData.storeName;
    const location = prevData.location;
    const owner =prevData.owner;
    const names =prevData.names;
    const value =prevData.value;

    const [chosenOption, setChosenOption] = useState('Good'); //will store our current user options
    const options = [
      { label: 'Good', value: 'Good' },
      { label: 'Average', value: 'Average' },
      { label: 'Bad', value: 'Bad' },
    ]; //create our options for radio group

    const [chosenOption1, setChosenOption1] = useState('Good'); //will store our current user options
    const options1 = [
      { label: 'Good', value: 'Good' },
      { label: 'Average', value: 'Average' },
      { label: 'Bad', value: 'Bad' },
    ]; //create our options for radio group

    const navigation = useNavigation();

    function storeHighScore(
         question1,
         question2,
         question3,
         question4,
         question5,
         contant,
         storeName,
         location,
         owner,
         names,
         value,
         chosenOption,
         chosenOption1
         ) {
        const db = getDatabase();
        const reference = ref(db, 'Stores/');
        push(reference, {
            Question1 : question1,
            Question2 : question2,
            Question3 : question3,
            Question4 : question4,
            Question5 : question5,
            Contant   : contant,
            StoreName : storeName,
            Location : location,
            Owner : owner,
            names :  names,
            value :value,
            chosenOption : chosenOption,
            chosenOption1 : chosenOption1
            
          });
          navigation.navigate('Welcome',{  question1,
            question2,
            question3,
            question4,
            question5,
            contant,
            storeName,
            location,
            owner,
            names,
            value,
            chosenOption,
            chosenOption1
          });
    }


    const [question1,setQuestion1] = React.useState('');
    const [question2,setQuestion2] = React.useState('');
    const [question3,setQuestion3] = React.useState('');
    const [question4,setQuestion4] = React.useState('');
    const [question5,setQuestion5] = React.useState('');

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styless.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       
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
<ScrollView>
<View style={styless.inner}>
                <Text 
                    style={styles.label}>Which wholesaler are they linked to?</Text>
                <TextInput
                    value={question1}
                    placeholder='Type here...' onChangeText={(text) => setQuestion1(text)}  style={styless.textInput}  />
                <Text 
                    style={styles.label}>Do they sell Vodacom products?</Text>
                <TextInput
                    value={question2}
                    placeholder='Type here...' onChangeText={(text) => setQuestion2(text)} style={styless.textInput}  />
                <Text 
                    style={styles.label}>Do they have product knowledge/training?</Text>
                <TextInput
                    value={question3}
                    placeholder='Type here...' onChangeText={(text) => setQuestion3(text)}   style={styless.textInput}  />
                <Text 
                    style={styles.label}>Do they experience network issues?</Text>
                <TextInput
                    value={question4}
                    placeholder='Type here...' onChangeText={(text) => setQuestion4(text)}  style={styless.textInput}  />
                    <Text 
                    style={styles.label}>Do they Rica?</Text>
                <TextInput
                    value={question5}
                    placeholder='Type here...' onChangeText={(text) => setQuestion5(text)}  style={styless.textInput}  />
                    <View>

                    <View style={{width:'100%',padding:10}}>

<Text style={{marginVertical:19,fontSize: 16,}}>Network coverage inside the store?</Text>
      <RadioForm
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      />

</View>

<View style={{width:'100%',padding:10}}>

<Text style={{marginVertical:19,fontSize: 16,}}>Network outside the store?</Text>
      <RadioForm
        radio_props={options1}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption1(value);
        }} //if the user changes options, set the new value
      />

</View>

 

                    <Button style={styles.button} onPress={() => storeHighScore(question1, question2,
                 question3, question4, 
                 question5 ,   contant,
         storeName,
         location,
         owner,
         names,
         value,
         chosenOption,
         chosenOption1
       )} title='Submit'/>

                    </View>
                    </View>
                    </ScrollView>
            
        </View>

       
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
}







const styless = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    }
  });