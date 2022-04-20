import * as React from 'react';
import { View, Text , StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';

export default function NewQuestion({navigation}){

    const [question,setQuestion] = React.useState('');
    const [optiona,setOptionA] = React.useState('');
    const [optionb,setOptionB] = React.useState('');
    const [optionc,setOptionC] = React.useState('');
    return(
        <View style={styles.container}>
            <Text 
                style={styles.label}>Shelf Capacity</Text>
            <TextInput
                value={question}
                placeholder='Question' onChangeText={(text) => setQuestion(text)}  style={styles.textBox} />
            <Text 
                style={styles.label}>A. Vodacom has majority</Text>
            <TextInput
                value={optiona}
                placeholder='Option A' onChangeText={(text) => setOptionA(text)} style={styles.textBox} />
            <Text 
                style={styles.label}>B. Vodacom has an even split</Text>
            <TextInput
                value={optionb}
                placeholder='Option B' onChangeText={(text) => setOptionB(text)}   style={styles.textBox} />
            <Text 
                
                style={styles.label}>C. Vodacom has minority</Text>
            <TextInput
                value={optionc}
                placeholder='Option C' onChangeText={(text) => setOptionC(text)}  style={styles.textBox} />

            <Button style={styles.button} onPress={() => add(question,optiona,optionb,optionc,navigation)} title='Submit'/>
       
        </View>
    );
}

function add(question,optiona,optionb,optionc,navigation) {
    const db = getDatabase();
    const reference = ref(db, 'Questions/');
    push(reference, {
        Question: question,
        OptionA: optiona,
        OptionB:optionb,
        OptionC: optionc,
      });
      navigation.navigate('Question List', { msg: '' });
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


