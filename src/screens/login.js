//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    function passing() {
        fetch('http://192.168.1.11:80/app/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                email:email,

                password:password

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // If server response message same as Data Matched
                if (responseJson === 'Data Matched') {

                    //Then open Profile activity and send user email to profile activity.
                    navigation.navigate('Tabs');

                }
                else {

                    Alert.alert(responseJson);
                   
                }

            }).catch((error) => {
                console.error(error);
            });


    }




return (
    <View style={styles.container}>
        <StatusBar barStyle='dark-content'
            backgroundColor='#F5FFFA'
            translucent
        />
        <View style={styles.headerContainer}>

            <Text style={styles.headerTitle}>Login</Text>
        </View>
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.content}>Entre com seu nome de usuário e senha e boa leitura</Text>
        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>

                <TextInput
                    placeholder='Nome de Usuário'
                    placeholderTextColor='grey'
                    selectionColor='grey'
                    style={styles.inputText}
                    onChangeText={text => setEmail(text)}
                />
            </View>
        </View>

        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>

                <TextInput
                    placeholder='Senha'
                    placeholderTextColor='grey'
                    selectionColor='grey'
                    style={styles.inputText}
                    onChangeText={text => setPass(text)}
                />
            </View>
        </View>
        <TouchableOpacity style={styles.btLogin} onPress={() => passing()}>
            <Text>Login</Text>
        </TouchableOpacity>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Users')}>
            <Text>Cadastrar</Text>
        </TouchableOpacity>




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
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerTitle: {
        fontSize: 20,

        lineHeight: 20 * 1.4,

        textAlign: 'center'
    },
    inputContainer: {
        backgroundColor: '#F0F8FF',
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#B0E0E6',
        justifyContent: 'center',
        width: '90%',
        height: 40,
        marginTop: 10

    },
    inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',


    },


    inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        width: '85%',
        height: '75%',
        color: 'black',
        flex: 1

    },
    btLogin: {
        width: '90%',
        height: 40,
        backgroundColor: '#B0E0E6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 8

    }
});

//make this component available to the app
export default Login;
