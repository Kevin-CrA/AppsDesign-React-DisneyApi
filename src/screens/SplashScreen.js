/*Splash screen to start the app with an image (image_url)*/
import React,{useEffect} from 'react';
import{StyleSheet,Image,SafeAreaView} from "react-native";

const image_url="https://www.teahub.io/photos/full/2-20037_disney-wallpaper-phone.png";


/*when starting the app this screen wil show for 2 seconds replacing the tab of characters */
export default function SplashScreen ({navigation}){
    useEffect(() =>{
        setTimeout(()=>{
            navigation.replace("Characters");
        },3000);
    });
    return(
        <SafeAreaView style={styles.image_container}>
            <Image source={{uri:image_url}} style={styles.image}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image_container:{
        flex: 1,
        justifyContent:"center",
        alignContent:"center",
    },
    image:{
        width:"100%",
        height:"100%",
    }
})