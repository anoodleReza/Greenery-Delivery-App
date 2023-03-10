import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { Surface, Button, Text, TextInput } from 'react-native-paper';
import * as React from 'react';
import { Formik } from 'formik';

export default function MerchantRegister( {navigation}) {

  return (
    <Formik
      initialValues={{ 
        username: '', 
        email: '', 
        password: '', 
        confirmPassword:''}
      }
      onSubmit={(values)=>{
        console.log(values);
        navigation.dispatch(StackActions.replace("MerchantRegDetails"));
      }}
      
    >
      {({ handleChange,handleBlur, handleSubmit, values }) => (
      <View style={styles.container}>
        {/* Image section */}
        <Image style = {{ width: 250, height: 250 }} source={require('../assets/logo.png')} />

        {/* Input section */}
        <TextInput
          mode="outlined"
          placeholder="Enter Username..."
          style={styles.input}
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={values.username}
        />
        <TextInput
          mode="outlined"
          placeholder="Enter email address..."
          style={styles.input}
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        <TextInput
          mode="outlined"
          placeholder="Enter password..."
          style={styles.input}
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
        />
        <TextInput
          mode="outlined"
          placeholder="Confirm password..."
          style={styles.input}
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
        />

        {/* Bottom Buttons */}
        <Button         
          style={styles.buttonDefault}
          textColor='black'
          mode="contained" 
          onPress={handleSubmit}
          // onPress={() => {navigation.dispatch(StackActions.replace("MerchantRegDetails"));}}
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
    )}
    </Formik>
  );
}

const submission = () => {
  
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

//register backend
const handleLogin = (credentials) => {
  co
}
