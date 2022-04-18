import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';


import auth from '@react-native-firebase/auth'

function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Signup = () => {
    if (email != '' && password != '') {
      auth().createUserWithEmailAndPassword(email, password).then((res) => {
        console.log('response', res)
        Alert.alert('User created Successfully')
      })
        .catch((error) => {
          console.log('error', error)
          Alert.alert(error.message)
        })
    }
    else {
      Alert.alert('Both are mandatory')
    }
  }

  const login = () => {
    auth().signInWithEmailAndPassword(email, password).then((res) => {
      console.log('response', res)
      navigation.navigate('Home')
    })
      .catch((error) => {
        console.log('error', error)
        Alert.alert(error.message)
      })
  }


  return (
    <View style={styles.Container}>
      <Text style={{ marginBottom: 10, fontSize: 30, color: 'black' }}>Login</Text>
      <TextInput
        style={{
          height: 50, width: 250, borderColor: 'black',
          textAlign: 'center', borderWidth: 2, marginTop: 5, borderRadius: 15
        }}
        placeholder='Email'
        value={email}
        placeholderTextColor={'black'}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          height: 50, width: 250, borderColor: 'black',
          textAlign: 'center', borderWidth: 2, marginTop: 5, borderRadius: 15
        }}
        onChangeText={setPassword}
        placeholder='password'
        secureTextEntry={true}
        value={password}
        placeholderTextColor={'black'}
      />

      <View style={styles.button}>
        <Button title='Signup' onPress={Signup} />
        <Button title='Login' onPress={login}/>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 150,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

});

export default Login;
