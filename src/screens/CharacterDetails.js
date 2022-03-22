import{StyleSheet,View,Text,Image,ImageBackground}from "react-native";
import React from "react";

export default function CharacterDetails(props){
    const {character} = props.route.params;
    return(

        <ImageBackground source={require('../images/disney-logo.jpg')} style={styles.container} >
           
        <ImageBackground source={require('../images/D.png')} style={styles.content} imageStyle={{ borderRadius: 10}}>
            <Image style={styles.image}source={{uri:character.imageUrl}}/>
            <View style={styles.property}>
                <Text style={styles.property_name}>Name: </Text>
                <Text style={styles.property_value}>{character.name}</Text>
            </View>
            <View style={styles.property}>
                <Text style={styles.property_name}>Movie(s): </Text>
                <Text style={styles.property_value}>{character.films[0]} | {character.films[1]} | {character.films[2]}</Text>
            </View>
            <View style={styles.property}>
                <Text style={styles.property_name}>Tv Show(s): </Text>
                <Text style={styles.property_value}>{character.tvShows[0]} | {character.tvShows[1]} | {character.tvShows[1]} </Text>
            </View>
           </ImageBackground>
        
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#24282f",
        borderRadius:30,
    },
    content:{
        flex:1,
        justifyContent:"flex-start",
        alignContent:"center",
        margin:20,
        borderRadius:30,
        elevation:5,
        backgroundColor:"#3c3e44",
        marginBottom:10,
        
    },
    image:{
        margin:10,
        marginTop:20,
        marginBottom:20,
        position:"relative",
        alignSelf:"center",
        width:280,
        height:260,
        borderRadius:100,
        borderColor:"lightblue",
        borderWidth:5,
        
    },
    property:{
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        margin:0,
        padding:0,
        marginBottom:2,
    },
    property_name:{
        fontWeight:"bold",
        fontSize:28,
        alignSelf:"flex-start",
        color:"darkviolet",
        marginLeft:40,
        fontFamily:"serif",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        textShadowColor: 'white',
    },
    property_value:{
        width:"70%",
        height:"100%",
        color:"navy",
        fontSize:23,
        alignSelf:"flex-start",
        marginLeft:40,
        fontFamily:"serif",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        textShadowColor: 'green',
    },
    
});
