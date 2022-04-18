import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Alert
} from 'react-native';

import database from '@react-native-firebase/database'


let register = item => {
    database().ref('/items').push({
        name: item,

    })
}
const mail = gem => {
    database().ref('/items').push({
        email: gem
    })
}

const passw = gim => {
    database().ref('/items').push({
        pass: gim
    })
}

function Register({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handlesubmit = () => {
        register(name);
        mail(email)
        passw(pass)
        Alert.alert('Sucessfully Registered')
    }
    return (
        <View style={styles.sectionContainer}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}> Register </Text>
            <TextInput
                style={{ height: 50, width: 250, textAlign: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 15 }}
                placeholder='Name'
                placeholderTextColor={'black'}
                onChangeText={text => setName(text)} />
            <TextInput
                style={{ height: 50, textAlign: 'center', width: 250, borderColor: 'black', borderWidth: 2, marginTop: 5, borderRadius: 15 }}
                placeholder='Email'
                placeholderTextColor={'black'}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={{
                    height: 50, width: 250, borderColor: 'black',
                    textAlign: 'center', borderWidth: 2, marginTop: 5, borderRadius: 15
                }}
                placeholder='Password'
                placeholderTextColor={'black'}
                onChangeText={text => setPass(text)}
            />


            <TouchableHighlight
                style={{
                    height: 50, width: 100, alignItems: 'center', justifyContent: 'center',
                    borderColor: 'black', borderWidth: 2, marginTop: 10, borderRadius: 15,
                }}

                onPress={handlesubmit}>
                <Text style={{ fontSize: 18, color: 'black' }}>Register</Text>

            </TouchableHighlight>
            <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight
                    style={{
                        height: 50, width: 100, alignItems: 'center', justifyContent: 'center',
                        borderColor: 'black', borderWidth: 2, marginTop: 10,
                        borderRadius: 15,
                    }}>
                    <Text style={{ justifyContent: 'center', color: 'black' }}
                        onPress={() => navigation.navigate('Login')}>Sign in</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
};



const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default Register;
