import React,{useState} from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Login = ( {navigation} ) => {
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const signIn = async () =>{
        if( email && password ){
            try{
                await auth().signInWithEmailAndPassword(email,password);
                ToastAndroid.show("Successfully Logged in", ToastAndroid.SHORT);
                setEmail('')
                setPassword('')
                //navigation.navigate('Home')
            }catch(error){
                ToastAndroid.show("Something went wrong please try again !", ToastAndroid.SHORT);
            }

        }else{
            ToastAndroid.show("Please fill up all fields !", ToastAndroid.SHORT);
        }
    }

    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box1}>
                <Image style={styles.box1_img} source={require('./assets/images/login_screen.png')} />
                <Text style={styles.loginTxt1}>Please login to continue!</Text>
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
                <Button style={styles.loginBtn} mode="contained" onPress={() => signIn()}>
                    Login
                </Button>
                <TouchableOpacity onPress={()=>navigation.navigate('signup')}><Text style={styles.signupBtn}>Don't have an account?</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    box1:{
      alignItems:'center',
    },
    box1_img:{
        height:150,
        width:150,
        marginTop:30
    },
    loginTxt1:{
        fontSize:18,
        marginTop:10,
        marginBottom:30,
        color:'#304558'
    },
    box2:{
        paddingHorizontal:15,
        height:'40%'
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

export default Login
