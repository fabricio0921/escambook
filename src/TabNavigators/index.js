import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Messages, Favorites, Products } from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigators() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Livros" component={Products} options={{
            tabBarIcon:({focused})=>(
                <Ionicons name="book-outline" size={20} width={10} color="#4682B4"/>
            ),
            headerTintColor:'#4682B4',
            tabBarActiveTintColor: '#4682B4',
            tabBarInactiveTintColor: 'black',
        }} />
        <Tab.Screen name="Favoritos" component={Favorites} options={{
            tabBarIcon:({focused})=>(
                <Ionicons name="heart-outline" size={20} width={10}  color="#4682B4" />
            ),
            headerTintColor:'#4682B4',
            tabBarActiveTintColor: '#4682B4',
            tabBarInactiveTintColor: 'black',
        }} />
        <Tab.Screen name="Mensagens" component={Messages} options={{
            tabBarIcon:({focused})=>(
                <Ionicons name="mail-outline" size={20} width={10}  color="#4682B4"  />
            ),
            tabBarActiveTintColor: '#4682B4',
            tabBarInactiveTintColor: 'black',
            headerTintColor:'#4682B4',
            
            
        }}/>

      </Tab.Navigator>
    
  );
}

