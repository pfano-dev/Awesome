import React, { useState } from 'react'
import { View,TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform ,
    TouchableWithoutFeedback, Keyboard, ScrollView, Image,SafeAreaView} from 'react-native';
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import COLORS from '../consts/color'
import { getAuth ,signInWithEmailAndPassword} from 'firebase/auth'
import { getDatabase, ref, onValue } from 'firebase/database';
import {ToastAndroid} from 'react-native';

// export const signOut = ({ navigation }) => {
//      navigation.navigate('signup')
//   };

//   export const signOut = () => {
//     getAuth()
//       .signOut()
//       .then(() => {
//         navigation.navigate('signup')
//       });
//   };

export default function Loginscreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    const [userProfile , setUser] = useState({})


 



    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, pwd } = values


            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, pwd).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                const db = getDatabase();
                // Retrieve new posts as they are added to our database
                const dbRef = ref(db, 'Users/'+ user.uid);
                onValue(dbRef, (snapshot) => {
                    const childKey = snapshot.key;
                    const childData = snapshot.val();
                    setUser({
                        name: childData['Name'],
                        surname : childData['Surname'],
                        contact : childData['Contact'],
                        position : childData['Position']
                       })
                });
                //alert(userProfile.position)
                if(userProfile.position == "Consultant"){
                    navigation.replace('Consulted', { id: user.uid });
                }
                if(userProfile.position == "Admin"){
                    navigation.replace('Admin', { id: user.uid }); 
                }
                else{

                    ToastAndroid.show('log in', ToastAndroid.SHORT);
                }
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }

    return(

        <KeyboardAvoidingView style={styles.container}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <ScrollView>
          <View style={styles.inner}>
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
         <Image style={styles.img} source={require('../assets/gootders_03.png')} />
        </View>

        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            WELCOME BACK
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign in to continue
          </Text>
        </View>


        <View style={styles.view}>
            <TextBox 
                placeholder="Email Address" 
                onChangeText={text => 
                handleChange(text, "email")} />

            <TextBox 
                placeholder="Password" 
                onChangeText={text => 
                handleChange(text, "pwd")} 
                secureTextEntry={true} />
            
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
                <Btn onClick={() => Login()} title="Login" style={{ width: "48%" }} />
                <Btn onClick={() => navigation.navigate("signup")} title="Sign Up" style={{ width: "48%", backgroundColor: "#344869" }} />
            </View>
        </View>
    </SafeAreaView>
    </View>
        </ScrollView>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {
   
    width:'100%',
    backgroundColor:'white'
    },
    inner: {
    
      flex: 1,
     
   
    },
  
    textInput: {
      height: 60,
      backgroundColor:'#eee',
      fontSize:20,
      paddingLeft:20,
      marginBottom: 36,
      borderRadius:10,
      marginTop:10
    },
    btnContainer: {
      backgroundColor: "#90caf9",
      marginTop: 22,
      height:50,
      alignItems:'center'
      ,justifyContent:"center",
      borderRadius:10
    },
  
    innerView: {
      justifyContent:'space-between',
      flexDirection:'row'
    },


    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "60%"
    },
    img:{
        width: 200,
        height: 100,
        marginTop: 20,
    },

  });
  