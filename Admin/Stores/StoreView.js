import React,{useState} from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function StoreView({route: { params } }){
    const [isEdit, setIsEdit] = useState(false);
    const { id } = params;
    const db = getDatabase();
    const dbRef = ref(db, 'Stores/' + id);

    let [store, setStore] = useState();
    
    onValue(dbRef, (snapshot) => {
        const childKey = snapshot.key;
        const childData = snapshot.val();
        [store, setStore] = useState({
            StoreName: childData['StoreName'],
            location :childData['Location'],
            owner: childData['Owner'],
            contact : childData['Contacts']
           }); 
    });
    const [storeName, setStoreName] = useState(store.StoreName);
    return(
        <View style={styles.container}>
            <Ionicons name="md-home" style={styles.icon} size={100} color={'#ccc'}/>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                   <TouchableOpacity style={styles.controlButtons}>
                        <Ionicons name="md-trash-bin" size={20} color={'#333'}/>   
                    </TouchableOpacity>     
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.label}>Store Names</Text>
                    {
                        isEdit? <TextInput  onChangeText={(storeName) => setStoreName(storeName)}  style={styles.textBox} value={storeName} />:
                        <Text style={styles.textViewer}>{store.StoreName}</Text>
                    }
                </View>
                {
                    isEdit? // if editing
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.controlButtons}  onPress={() =>  alert('am in') /*(id,store,"StoreName",storeName) */}>
                                <Ionicons name="checkmark" size={20} color={'#111'}/>   
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controlButtons}  onPress={() => setIsEdit(false)}>
                                <Ionicons name="close" size={20} color={'#111'} />   
                        </TouchableOpacity>
                    </View>
                    : // if not editing 
                    <View>
                        <TouchableOpacity style={styles.controlButtons} onPress={() => setIsEdit(true)}>
                                <Ionicons name="md-brush" size={20} color={'#111'} />   
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <Text style={styles.label}>Store Location</Text>
            <Text style={styles.textViewer}>{store.location}</Text>
            <Text style={styles.label}>Store Owner</Text>
            <Text style={styles.textViewer}>{store.owner} </Text>
            <Text style={styles.label}>Contacts</Text>
            <Text style={styles.textViewer}>{store.contact}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        padding: 30
    },
    label:{
        fontSize: 16,
        fontWeight: '700'
    },
    textViewer:{
        marginBottom: 20,
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
    },
    icon:{
        alignSelf: 'center',
    },
    controlButtons:{
        shadowColor: "#333",
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: '#ccc',
        justifyContent:'center',
        alignItems:'center',
        margin: 10,
    }
});


