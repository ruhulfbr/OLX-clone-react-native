import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function ListItem() {

    const items = [
        {   
            key: 1,
            title: "Iphone 11",
            price: "25000",
            year:2013,
            image:'https://images.unsplash.com/photo-1609921205586-7e8a57516512?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            key: 2,
            title: "Mac 7",
            price: "55000",
            year:2017,
            image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            key: 3,
            title: "Iphone",
            price: "25000",
            year:2013,
            image:'https://images.unsplash.com/photo-1609921205586-7e8a57516512?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            key: 4,
            title: "Mac",
            price: "55000",
            year:2017,
            image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ];

    const renderItem = (item) =>{
        return(
            <Card style={styles.card}>
                <Card.Title title={item.title} />
                <Card.Content>
                <Paragraph>{item.desc}</Paragraph>
                <Paragraph>Buying Year: {item.year}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                <Button>Price: {item.price}</Button>
                <Button>Call Seller</Button>
                </Card.Actions>
            </Card>
        )
    }

    return (
        <View>
            <FlatList
                style={styles.mainPage}
                data={items}
                keyExtractor={(item)=>item.key}
                renderItem={({item})=> renderItem(item) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainPage:{
        padding:15,
        paddingBottom:0,
    },
    card:{
        marginBottom:10,
        elevation:2
    },
})
