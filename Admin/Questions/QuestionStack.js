import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Questions from './Questions'
import NewQuestion from './AddQuestion'
import QuestionView from './QuestionView'

const Stack = createNativeStackNavigator();

export default function QuestionStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name='Question List'
                component={Questions}/>
            <Stack.Screen 
                name='Add new question'
                component={NewQuestion}/>
            <Stack.Screen 
                name='QuestionView'
                component={QuestionView}/>
        </Stack.Navigator>
    );
}