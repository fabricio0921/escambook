//import liraries

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Login, InsertUser, Products, Messages,Login2} from "../screens";
import TabNavigators from '../TabNavigators';


const Stack = createNativeStackNavigator();
// create a component
const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Users" component={InsertUser} />


                <Stack.Screen name="Tabs" component={TabNavigators} />

            </Stack.Navigator>

        </NavigationContainer>

    );
};

// define your styles

//make this component available to the app
export default Navigators;
