import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native"
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import COLORS from '../consts/color';
import { getDatabase, ref, setValues, push, set } from 'firebase/database';

// import firebase from 'firebase/app';
//import "firebase/auth";

import { getAuth ,createUserWithEmailAndPassword} from 'firebase/auth'


const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5%"
    },
    img:{
        width: 200,
        height: 100,
        marginTop: 20,
    },
})

export default function SignUpScreen({ navigation }) {
    const auth = getAuth();
    const [values, setValues] = useState({
        email: "",
        pwd: "",
        pwd2: "",
        name: "",
        surname: "",
        contacts:"",
    })
    // const [googleSubmitting, setGoogleSubmitting] = useState(false);


    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function SignUp() {

        const { email, pwd, pwd2, name, surname, contacts } = values
        if (pwd == pwd2) {
            createUserWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                // Signed in 
                var position = "";
                const user = userCredential.user;
                if(email.includes('retrolex.co.za')){
                    position = "Admin"
                }else{
                    position = "Consultant"
                }
                add(user.uid, name,surname, contacts,position);

                //const user = userCredential.user;
                //alert(user.uid);
                

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                // ..
            });
        } else {
            alert("Passwords are different!")
        }
    }
    function add(user,name,surname, contacts, position) {
        const db = getDatabase();
        const reference = ref(db, 'Users/'+ user);
        set(reference, {
            Name: name,
            Surname: surname,
            Contacts:contacts,
            Position: position,
          });

          if(position == "Consultant"){
            navigation.navigate('Consulted', { id: user });
          }else{
            navigation.navigate('Admin', { id: user });
          }
    }
    return (
        
        <SafeAreaView
        style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
        <ScrollView style={styles.scrollView}>

        <View style={{flexDirection: 'row', marginTop: 40}}>
            <Image style={styles.img} source={require('../assets/gootders_03.png')} />
        </View>
        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            WELCOME TO FIELDER
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign up to continue
          </Text>
        </View>
        <View style={styles.view}>

        <TextBox 
        placeholder="Name" 
        onChangeText={text => 
        handleChange(text, "name")} />

        <TextBox 
        placeholder="Surname" 
        onChangeText={text => 
        handleChange(text, "surname")} />

        <TextBox 
        placeholder="Contacts" 
        onChangeText={text => 
        handleChange(text, "contacts")} />


        <TextBox 
        placeholder="Email Address" 
        onChangeText={text => 
        handleChange(text, "email")} />

        <TextBox 
        placeholder="Password" 
        secureTextEntry={true}  
        onChangeText={text => 
        handleChange(text, "pwd")}/>

        <TextBox 
        placeholder="Confirme Password" 
        secureTextEntry={true}  
        onChangeText={text => 
        handleChange(text, "pwd2")}/>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
            <Btn onClick={() => SignUp()} title="Sign Up" style={{ width: "48%" }} />
            <Btn onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "#344869" }} />
        </View>

      
        </View>
        </ScrollView>
        </SafeAreaView>
    );
};