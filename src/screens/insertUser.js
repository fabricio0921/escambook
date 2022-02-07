//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

// create a component
class InsertUser extends Component {
    constructor(props) {

        super(props)

        this.state = {

            nome: '',
            email: '',
            senha: '',


        }

    }


    InsertUserServer = () => {

        fetch('http://192.168.1.11:80/app/InsertStudentData.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                name: this.state.nome,

                email: this.state.email,

                password: this.state.senha,



            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                Alert.alert(responseJson);

            }).catch((error) => {
                console.error(error);
            });

    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Insert</Text>
                <TextInput
                    placeholder='Nome'
                    style={styles.tInput}
                    onChangeText={TextInputValue => this.setState({ nome: TextInputValue })}
                />
                <TextInput
                    placeholder='Email'
                    style={styles.tInput}
                    onChangeText={TextInputValue => this.setState({ email: TextInputValue })}
                />
                <TextInput
                    placeholder='Senha'
                    style={styles.tInput}
                    onChangeText={TextInputValue => this.setState({ senha: TextInputValue })}
                />

                <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.InsertUserServer} >

                    <Text style={styles.TextStyle}> Cadastrar </Text>

                </TouchableOpacity>
                

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    tInput: {
        textAlign: 'center',
        width: '90%',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 5,


    },
    TouchableOpacityStyle: {
 
        paddingTop:10,
        paddingBottom:10,
        borderRadius:100,
        marginBottom:7,
        marginTop:20,
        width: '20%',
        height:70,
        backgroundColor: '#00BCD4',
        justifyContent:'center',
        alignItems:'center'
     
      },
});

//make this component available to the app
export default InsertUser;
