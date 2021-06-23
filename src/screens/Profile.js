import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function Profile() {

    const Logout = ()=>{
        auth().signOut();
    }

    return (
        <View style={styles.mainPage}>
            <Text style={styles.emailText}>My Email : { auth().currentUser.email }</Text>
            <Button onPress={()=>Logout()} title="Logout" />
        </View>
    )
}

const styles = StyleSheet.create({
    mainPage:{
        padding:15,
        paddingBottom:0,
    },
    emailText:{
       fontSize:20,
       textAlign:"center",
       color:"gray",
       marginBottom:20
    },
})