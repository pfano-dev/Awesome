import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Index from './index'
import ConsultedStack from '../consultant/Stack'
import MainContainer from '../Admin/MainContainer'
import SignUpScreen from './sign-up';
import Home from '../Admin/Data/Home';
import Welcome from '../consultant/Welcome';

const Stack = createStackNavigator();

export default function AuthStack(){
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name='Login'
                    component={Index}/>
                    <Stack.Screen 
                    name='signup'
                    component={SignUpScreen}/>
                <Stack.Screen 
                    name='Consulted'
                    component={ConsultedStack}/>
                <Stack.Screen 
                    name='Admin'
                    component={MainContainer}/>

                 <Stack.Screen 
                    name='Home'
                    component={Home}/>

                 <Stack.Screen 
                    name='Welcome'
                    component={Welcome}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}