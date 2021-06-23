import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView,TouchableOpacity, ToastAndroid } from 'react-native'
import { TextInput, Button,HelperText } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Signup = ({navigation}) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const signUpAction = async () =>{
        if( email && password ){
            try{
                await auth().createUserWithEmailAndPassword(email,password);
                ToastAndroid.show("Successfully Registered", ToastAndroid.SHORT);
                setEmail('')
                setPassword('')
                navigation.goBack()
            }catch(error){
                ToastAndroid.show("Something went wrong please try again !", ToastAndroid.SHORT);
            }

        }else{
            ToastAndroid.show("Please Fill up the form !", ToastAndroid.SHORT);
        }
    }

    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box1}>
                <Image style={styles.box1_img} source={require('./assets/images/login_screen.png')} />
                <Text style={styles.loginTxt1}>Create New Account</Text>
            </View>
            <View style={styles.box2}> 
                <TextInput
                    style={styles.inputTxt}
                    label="Email"
                    mode="outlined"
                    type="email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.inputTxt}
                    label="Password"
                    mode="outlined"
                    type="password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
                <Button style={styles.loginBtn} mode="contained" onPress={() => signUpAction()}>
                    Signup
                </Button>
                <TouchableOpacity onPress={()=>navigation.goBack()}><Text style={styles.signupBtn}>Already have an account?</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    box1:{
      alignItems:'center'
    },
    box1_img:{
        height:150,
        width:150,
        marginTop:10
    },
    loginTxt1:{
        fontSize:18,
        marginTop:5,
        marginBottom:10,
        color:'#304558'
    },
    box2:{
        paddingHorizontal:15,
        height:'50%'
    },
    inputTxt:{
        height:45,
        marginBottom:10
    },
    loginBtn:{
        color:"white",
        marginTop:15,
    },
    signupBtn:{
        marginTop:20,
        textAlign:"right",
        fontSize:16,
    },
});

export default Signup
