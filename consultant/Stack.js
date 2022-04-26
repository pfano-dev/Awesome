import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Welcome'
import Checkin from './CheckIn'
import Quiz from './Quiz'
import NewStore from './NewStore'
import AdditionalRQ from './AdditionalRQ'
import StoreList from './StoreList';
import Quizs from './Quizs';
import CheckOut from './CheckOut';
import Brand from './Brand';


const Stack = createNativeStackNavigator();
export default function ConsultedStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name='Welcome'
                component={Welcome}/>
        

            <Stack.Group screenOptions={{presentation: 'modal'}}>

                <Stack.Screen 
                    name='CheckIn'
                    component={Checkin}/>

<Stack.Screen 
                name='Quizs'
                component={Quizs}/>

                    <Stack.Screen 
                    name='NewStore'
                    component={NewStore}/>
                    <Stack.Screen 
                    name='AdditionalRQ'
                    component={AdditionalRQ}/>
                       <Stack.Screen 
                name='StoreList'
                component={StoreList}/>
                <Stack.Screen 
                    name='CheckOut'
                    component={CheckOut}/>
                <Stack.Screen 
                    name='Brand'
                    component={Brand}/>


            </Stack.Group>
            
        </Stack.Navigator>
    );
}