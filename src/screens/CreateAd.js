import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

const CreateAd = () => {

    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [price, setprice] = React.useState('');
    const [year, setYear] = React.useState('');
    const [phone, setPhone] = React.useState('');


    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box1}>
                <Text style={styles.loginTxt1}>Create Ad!</Text>
            </View>
            <View style={styles.box2}> 
                <TextInput
                    style={styles.inputTxt}
                    label="Title"
                    mode="outlined"
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
                <TextInput
                    //style={styles.inputTxt}
                    label="Description"
                    mode="outlined"
                    multiline={true}
                    numberOfLines={3}
                    value={desc}
                    onChangeText={text => setDesc(text)}
                />
                <TextInput
                    style={styles.inputTxt}
                    label="Price"
                    mode="outlined"
                    value={price}
                    keyboardType="numeric"
                    onChangeText={text => setprice(text)}
                />

                <TextInput
                    style={styles.inputTxt}
                    label="Phone"
                    mode="outlined"
                    value={phone}
                    keyboardType="numeric"
                    onChangeText={text => setPhone(text)}
                />
                <TextInput
                    style={styles.inputTxt}
                    label="year of Purchase"
                    mode="outlined"
                    value={year}
                    keyboardType="numeric"
                    onChangeText={text => setYear(text)}
                />
                <Button icon="camera" style={styles.uploadPhoto} mode="contained" onPress={() => console.log('Pressed')}>
                    Upload Image
                </Button>
                <Button style={styles.loginBtn} mode="contained" onPress={() => console.log('Pressed')}>
                    Create
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    box1:{
      alignItems:'center'
    },
    box1_img:{
        height:120,
        width:120,
        marginTop:10
    },
    loginTxt1:{
        fontSize:25,
        marginTop:25,
        marginBottom:10,
        color:'#304558'
    },
    box2:{
        paddingHorizontal:15,
        height:'85%'
    },
    inputTxt:{
        height:45,
        marginBottom:10
    },
    loginBtn:{
        color:"white",
        marginTop:25,
    },
    uploadPhoto:{
        backgroundColor:'silver',
        marginTop:10,
    }
});

export default CreateAd
