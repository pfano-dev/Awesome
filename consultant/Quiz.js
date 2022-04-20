import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text , SectionList, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
// import { RadioButton } from 'react-native-paper';

export default function Quiz({navigation}){


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
          console.log(time);
          isCancelled = true;
        };
      }, [time]);
    


  var data = []
  var sec = [];
  var index = 0;
  const [checked, setChecked] = React.useState('first');
  const [indexHook, setIndexHook] = React.useState(1);
  
  const db = getDatabase();
// Retrieve new posts as they are added to our database
  const dbRef = ref(db, 'Questions/');

  while(data.length == 0){
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          data.push({
            key: childKey, 
            question: childData['Question'],
            optiona: childData['OptionA'],
            optionb: childData['OptionB'],
            optionc: childData['OptionC'],
            })
        });
      });
  }

  const [questionText, setQuestionText] = React.useState(data[0].question);
  const [optionaText, setOptionAText] = React.useState(data[0].optiona);
  const [optionbText, setOptionBText] = React.useState(data[0].optionb);
  const [optioncText, setOptionCText] = React.useState(data[0].optionc);

    return(
        <View style={styles.container}>
            
            <View style={styles.sectionHeader}>
                <Image style={styles.img} source={require('../assets/gootders_03.png')} />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.subText}>Hello, </Text>
                    <Text style={styles.text}> consultant</Text>
                </View>
            </View>
           

            <Text>
      {`
        ${time.hours < 10 ? '0' + time.hours : time.hours} :
        ${time.minutes < 10 ? '0' + time.minutes : time.minutes} :
        ${time.seconds < 10 ? '0' + time.seconds : time.seconds}
      `}
    </Text>


            <View style={styles.container}>
                <Text> Questions ({indexHook} / {data.length}) </Text>
                    <View>
                        <Text style={styles.item}>{questionText}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <RadioButton
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}
                            />
                            <Text style={{paddingTop: 5}}>{optionaText}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <RadioButton
                                value="second"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('second')}
                            />
                            <Text style={{paddingTop: 5}}>{optionbText}</Text>
                        </View>
                         
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <RadioButton
                                value="third"
                                status={ checked === 'third' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('third')}
                            />
                            <Text style={{paddingTop: 5}}>{optioncText}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'stretch', }}>
                        <TouchableOpacity style={styles.btn} onPress={()=> {
                            {
                                setIndexHook(indexHook - 1);
                                if(indexHook >= 0){
                                    if(indexHook < data.length){
                                        /*setQuestionText(data[indexHook].question);
                                        setOption1Text(data[indexHook].option1);
                                        setOption2Text(data[indexHook].option2);
                                        setOption3Text(data[indexHook].option3);
                                        alert('index: ' + indexHook +" question " + data[indexHook].question + '\n\n' 
                                        + "question 1: " + data[0].question + '\n' +
                                        "question 2: " + data[1].question + '\n' +
                                        "question 3: " + data[2].question )*/

                                        alert(indexHook  +"\t"+ data.length);
                                    }else{
                                        setIndexHook(data.length - 1);
                                        alert(indexHook + "Yes less");
                                    }
                                    
                                }else{
                                    setIndexHook(1);
                                    alert(indexHook);
                                }
                            }
                        }}>
                            <Ionicons name="ios-arrow-back-outline" style={styles.icon} size={20} color={'#ccc'}/>
                            <Text style={{color: 'white'}}>Previous</Text>  
                        </TouchableOpacity>  
                        <TouchableOpacity style={styles.btn} onPress={()=> {
                             {
                                setIndexHook(indexHook + 1);

                                if(indexHook < data.length){
                                    setQuestionText(data[indexHook].question);
                                    setOptionAText(data[indexHook].optiona);
                                    setOptionBText(data[indexHook].optionb);
                                    setOptionCText(data[indexHook].optionc);

                                    /*alert('index: ' + indexHook +" question " + data[indexHook].question + '\n\n' 
                                    + "question 1: " + data[0].question + '\n' +
                                    "question 2: " + data[1].question + '\n' +
                                    "question 3: " + data[2].question )*/
                                }else{
                                    setIndexHook(data.length-2);
                                    alert("You are done" + indexHook);
                                }
                            }
                        }}>
                            <Text style={{color: 'white'}}>Next</Text>  
                            <Ionicons name="ios-arrow-forward-sharp" style={styles.icon} size={20} color={'#ccc'}/>
                        </TouchableOpacity>    
                    </View>
            </View>
            
        </View>
    );
}
function dataChane(){

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
        margin: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
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

