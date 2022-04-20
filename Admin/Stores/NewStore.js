import * as React from 'react';
import { View, Text , StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
//import database from '@react-native-firebase/database';

// Your web app's Firebase configuration
/*const firebaseConfig = {
    apiKey: "AIzaSyDGTM-ZXvr4Wmo31afIVLxqWTScd1c-6KM",
    authDomain: "ccfc-ce810.firebaseapp.com",
    databaseURL: "https://ccfc-ce810-default-rtdb.firebaseio.com",
    projectId: "ccfc-ce810",
    storageBucket: "ccfc-ce810.appspot.com",
    messagingSenderId: "68146802683",
    appId: "1:68146802683:web:eca1d72be798d75d85a55e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);*/

export default function NewStore({navigation}){

    const [storeName,setStoreName] = React.useState('');
    const [location,setLocation] = React.useState('');
    const [owner,setOwner] = React.useState('');
    const [contant,setContant] = React.useState('');
    return(
        <View style={styles.container}>
            <Text 
                style={styles.label}>Store Names</Text>
            <TextInput
                value={storeName}
                placeholder='Store Name' onChangeText={(text) => setStoreName(text)}  style={styles.textBox} />
            <Text 
                style={styles.label}>Store Location</Text>
            <TextInput
                value={location}
                placeholder='Store Location'  onChangeText={(text) => setLocation(text)} style={styles.textBox} />
            <Text 
                style={styles.label}>Store Owner</Text>
            <TextInput
                value={owner}
                placeholder='Store Owner'  onChangeText={(text) => setOwner(text)}   style={styles.textBox} />
            <Text 
                
                style={styles.label}>Contacts</Text>
            <TextInput
                value={contant}
                placeholder='Contacts' onChangeText={(text) => setContant(text)}  style={styles.textBox} />

            <Button style={styles.button} onPress={() => storeHighScore(storeName,location,owner, contant,navigation)} title='Submit'/>
       
        </View>
    );
}

function storeHighScore(store,location,owner, contacts,navigation) {
    const db = getDatabase();
    const reference = ref(db, 'Stores/');
    push(reference, {
        StoreName: store,
        Location: location,
        Owner:owner,
        Contacts: contacts,
      });
      navigation.navigate('Store List', { msg: '' });
}

const styles = StyleSheet.create({
    container:{
        padding: 30
    },
    label:{
        fontSize: 16,
    },
    textBox:{
        backgroundColor: '#efefef',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20,

    },
    button:{
        marginTop: 10,
    }
});


