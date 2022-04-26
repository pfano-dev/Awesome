import React, { useState } from 'react';
import { StyleSheet,View, Text , Image, Button, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';




const data = [
    { label: 'Mabopane', value: 'Mabopane' },
    { label: 'Garankuwa', value: 'Garankuwa' },
    { label: 'Letlhabile', value: 'Letlhabile' },
    { label: 'Soshanguve', value: 'Soshanguve' },
    { label: 'Winterveldt', value: 'Winterveldt' },
    { label: 'Themba', value: 'Themba' },
    { label: 'Hamanskraal', value: 'Hamanskraal' },
    { label: 'Majakaneng', value: 'Majakaneng' },
    { label: 'Mandela', value: 'Mandela' },
  ];
  

export default function NewStore({navigation}){

    const [names,setNames] = React.useState('');
    const [storeName,setStoreName] = React.useState('');
    const [location,setLocation] = React.useState('');
    const [owner,setOwner] = React.useState('');
    const [contant,setContant] = React.useState('');
 






    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  
  console.log(value)
  
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Area
          </Text>
        );
      }
      return null;
    };
  
   







    
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
                    style={styles.label}>CCFC Name & Surname</Text>
                <TextInput
                    value={names}
                    placeholder='names' onChangeText={(text) => setNames(text)}  style={styles.textBox} />
                <Text 
                    style={styles.label}>Outlet Name</Text>
                <TextInput
                    value={storeName}
                    placeholder='Store Name' onChangeText={(text) => setStoreName(text)}  style={styles.textBox} />


<View style={styless.container}>
      {renderLabel()}
      <Dropdown
        style={[styless.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styless.placeholderStyle}
        selectedTextStyle={styless.selectedTextStyle}
        inputSearchStyle={styless.inputSearchStyle}
        iconStyle={styless.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'AREA' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styless.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>


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
                    
                    style={styles.label}>Contact Number</Text>
                <TextInput
                    value={contant}
                    placeholder='Contact Number' onChangeText={(text) => setContant(text)}  style={styles.textBox} />
                   
                    <TouchableOpacity style={{backgroundColor: 'green', borderRadius: 30, padding: 10, flexDirection: 'row', justifyContent:"space-between"}} onPress={() => navigation.navigate('AdditionalRQ',{names,storeName, location, owner, contant, value})} >
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


const styless = StyleSheet.create({
    container: {
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

