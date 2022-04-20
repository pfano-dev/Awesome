import * as React from 'react';
import { View, Text , Image, Button, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles'


export default function NewStore({navigation}){

    const [storeName,setStoreName] = React.useState('');
    const [location,setLocation] = React.useState('');
    const [owner,setOwner] = React.useState('');
    const [contant,setContant] = React.useState('');
    return(
        <ScrollView>
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
                <Text 
                    style={styles.label}>Store Name</Text>
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
                   
                    <TouchableOpacity style={{backgroundColor: 'green', borderRadius: 30, padding: 10, flexDirection: 'row', justifyContent:"space-between"}} onPress={() => navigation.navigate('AdditionalRQ',{storeName, location, owner, contant})} >
                        <Text style={{color: 'white', padding: 10}}>
                            Next 
                        </Text>
                        <Ionicons name="md-arrow-forward" style={styles.icon} size={40} color={'#ccc'}/>
                    </TouchableOpacity>
        
            </View>
         
        </View>
        </ScrollView>
    );
}

function storeHighScore(store,location,owner, contacts,navigation) {
    navigation.navigate('AdditionalRQ', {StoreName: store,
        Location: location,
        Owner:owner,
        Contacts: contacts, 
    });
}


