import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { Surface, Button, Text, TextInput } from 'react-native-paper';
import * as React from 'react';

export default function MerchantRegister( {navigation}) {

  const [usernameReg, setUsernameReg] = React.useState('');
  const [mailReg, setMailReg] = React.useState('');
  const [passwordReg, setPasswordReg] = React.useState('');
  const [confirmPasswordReg, setConfirmPasswordReg] = React.useState('');

  const register = () => {
    Axios.post("https://localhost3001/register", {
      username: usernameReg, 
      email: mailReg, 
      password: passwordReg
    }).then((response)=>{
      console.log(response);
    });
  };

  return (
    <View style={styles.container}>
      {/* Image section */}
      <Image style = {{ width: 250, height: 250 }} source={require('../assets/logo.png')} />

      {/* Top Section */}
        <TextInput
          mode="outlined"
          placeholder="Enter Username..."
          style={styles.input}
          onChange={(e)=> {setUsernameReg(e.target.value)}}
        />
        <TextInput
          mode="outlined"
          placeholder="Enter email address..."
          style={styles.input}
          onChange={(e)=> {setMailReg(e.target.value)}}
        />
        <TextInput
          mode="outlined"
          placeholder="Enter password..."
          style={styles.input}
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          onChange={(e)=> {setPasswordReg(e.target.value)}}
        />
        <TextInput
          mode="outlined"
          placeholder="Confirm password..."
          style={styles.input}
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          onChange={(e)=> {setConfirmPasswordReg(e.target.value)}}
        />

      {/* Bottom Buttons */}
      <Button         
        style={styles.buttonDefault}
        textColor='black'
        mode="contained" 
        onPress={() => {
          register
          navigation.dispatch(StackActions.replace("MerchantRegDetails"));
        }}
        >
        Sign Up
      </Button>
      <Text>
        <Text>Already have an account? Sign In </Text>
        <Text style={styles.Highlight} onPress={() => {navigation.dispatch(StackActions.replace("MerchantSignIn"));}}>
          Here
        </Text>         
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Highlight: {
    color: '#0066FF',
    textDecorationLine: 'underline',
  },
  input:{
    width: 280,
    margin: 4.
  },  
  buttonDefault:{
    margin:10,
  },
  surface: {
    padding: 8,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },

});
