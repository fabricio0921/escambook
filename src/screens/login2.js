//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';


    

// create a component
class Login2 extends Component {
    static navigationOptions =
     {
        title: 'LoginActivity',
     };
   
  constructor(props) {
   
      super(props)
   
      this.state = {
   
        UserEmail: '',
        UserPassword: ''
   
      }
   
    }

    UserLoginFunction = () =>{
 
        const { UserEmail }  = this.state ;
        const { UserPassword }  = this.state ;
        
        
       fetch('http://192.168.1.11:80/app/login.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
        
           email: UserEmail,
        
           password: UserPassword
        
         })
        
       }).then((response) => response.json())
             .then((responseJson) => {
       
               // If server response message same as Data Matched
              if(responseJson === 'Data Matched')
               {
       
                   //Then open Profile activity and send user email to profile activity.
                   this.props.navigation.navigate('Tabs', { Email: UserEmail });
       
               }
               else{
       
                 Alert.alert(responseJson);
               }
       
             }).catch((error) => {
               console.error(error);
             });
        
        
         }
        
    render() {
        return (
     
    <View style={styles.MainContainer}>
     
            <Text style= {styles.TextComponentStyle}>User Login Form</Text>
      
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Enter User Email"
     
              onChangeText={UserEmail => this.setState({UserEmail})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Enter User Password"
     
              onChangeText={UserPassword => this.setState({UserPassword})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
     
              secureTextEntry={true}
            />
     
            <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
          
      
     
    </View>
                
        );
      }
    
    
}

// define your styles
const styles = StyleSheet.create({
    MainContainer :{
 
        justifyContent: 'center',
        flex:1,
        margin: 10,
        },
         
        TextInputStyleClass: {
         
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
         borderColor: '#2196F3',
         
         // Set border Radius.
         borderRadius: 5 ,
        
        },
        
         TextComponentStyle: {
           fontSize: 20,
          color: "#000",
          textAlign: 'center', 
          marginBottom: 15
         }
});

//make this component available to the app
export default Login2;
