import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableWithoutFeedback,
    ImageBackground
} from 'react-native';
import React, { useState, useEffect } from "react";

export default function Character({ character,navigation }) {

    return (
    <ImageBackground source={require('../images/disney-logo.jpg')} style={styles.character} >
        <TouchableWithoutFeedback 
            onPress={()=>{
                navigation.navigate("CharacterDetails",{character})
                /*console.log(character.name)*/
            }}>
            
            <View style = {styles.character}>
                <View style = {styles.spacing}>
                    <Image source = {{ uri: character.imageUrl}} style={styles.image}/>
                    <ImageBackground source={require('../images/D.png')} style = {styles.character__info} imageStyle={{ borderRadius: 10}}>
                        <Text style={styles.character__name}> {character.name} </Text>
                            
                                                 
                    </ImageBackground>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    character:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        height:"100%",
        width:"100%",
    },
    spacing:{
        flex:1,
        flexDirection: "row",
        paddingRight: 10,
        paddingTop:10,
        paddingLeft:10,
        
    },
    image:{
        position: "relative",
        width: 180,
        height: 180,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    character__info:{
        flex:1,
        flexDirection: "column",
        justifyContent:"center",
        alignContent: "flex-start",
        paddingLeft: 5,
        height: "100%",
        backgroundColor: "#3c3e44",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    character__name:{
        height: 70,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        color: 'navy',
        fontSize: 30,
        fontWeight: "bold",
        textAlignVertical: "center",
        fontFamily:"serif",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        textShadowColor: 'honeydew',
    },
    character__data: {
        marginBottom:10,
    },
});
