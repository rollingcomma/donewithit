import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import colors from '../style/colors';

export default WelcomeScreen = () => {
  return(
    // <View style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
          <Text>Sell What You Don't Need</Text>
        </View>
        <View style={styles.loginButton}/>
        <View style={styles.signupButton}/>
      </ImageBackground>
    // </View>
  )
}

const styles = StyleSheet.create(
  {
    background:{
      flex: 1,
      resizeMode: "cover",
      justifyContent:"flex-end",
      alignItems: "center"
    },
    logoContainer: {
      position:"absolute",
      alignItems: "center",
      top: 70,
    },
    logo:{
      width:100,
      height:100,
    },
    loginButton:{
      width: "100%",
      height: 70,
      backgroundColor: colors.primary
    },
    signupButton:{
      width: "100%",
      height: 70,
      backgroundColor: colors.secondary
    }
  }
)
