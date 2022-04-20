

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
// import Data from './Data';
// import NewStore from '../Stores/NewStore'
// import StoreView from '../Stores/StoreView'
import PrintInfo from './PrintInfo'
import Tracker from './Tracker'

const Stack = createNativeStackNavigator();

export default function AddStore(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name='Store List'
                component={Home}/>
            
               <Stack.Screen 
                name='PrintInfo'
                component={PrintInfo}/>
               <Stack.Screen 
                name='Tracker'
                component={Tracker}
                
                />
             


        </Stack.Navigator>
    );
}
