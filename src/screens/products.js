//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import General from '../contants/General';


// create a component
const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList

                data={General.WELCOME_CONTENTS}
                keyExtractor={item => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                overScrollMode='never'

                renderItem={({ item }) => (
                    <View style={styles.containerProducts}>
                        <Text style={styles.textProducts}> {item.title}</Text>
                        <Text style={styles.textProducts}> {item.content}</Text>
                    </View>


                )}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    btContainer: {
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    containerProducts:{
        flex:1,
        width:'75%',
        height:60,
        borderColor:'#B0E0E6',
        borderWidth:1,
        marginRight:5,
        borderRadius:8,
        shadowColor:'blue',
        shadowOffset:5
        
    },
    textProducts:{
        margin:5,
        alignSelf:'flex-start'
    }
});

//make this component available to the app
export default Products;
