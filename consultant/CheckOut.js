import * as React from 'react';
import { View, Text , Image, Button, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles'
import { useNavigation } from '@react-navigation/native';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { useRoute } from '@react-navigation/native';

export default function CheckOut(){

    const route = useRoute();

    const prevDatas = route.params;
const prevData =prevDatas.prevData.prevData.item.item
    console.log(".......data.....",)


    const navigation =useNavigation();
    const [product,setProduct] = React.useState('');
    const [price,setPrice] = React.useState('');

    function storeHighScore(
    
        product, price ,prevDatas, prevData
        ) {
       const db = getDatabase();
       const reference = ref(db, 'Checkout/');
       push(reference, {
        product,  price, prevDatas, prevData
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
                <Text 
                    style={styles.label}>Product</Text>
                <TextInput
                    value={product}
                    placeholder='Product' onChangeText={(text) => setProduct(text)}  style={styles.textBox} />
                <Text 
                    style={styles.label}>Price</Text>
                <TextInput
                    value={price}
                    placeholder='Price' onChangeText={(text) => setPrice(text)}  style={styles.textBox} />
                   
                    <TouchableOpacity style={{backgroundColor: 'green', 
                    borderRadius: 30, padding: 10, flexDirection: 'row',
                     justifyContent:"space-between"}} 
                     onPress={() => storeHighScore(
                        product, 
                        price,
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


