import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Button } from 'react-native';
import colors from '../style/colors';

export default WelcomeScreen = () => {
  return(
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.header}> */}
        <View style={styles.closeIcon} />
        <View style={styles.deleteIcon} />
      {/* </SafeAreaView> */}
      <Image resizeMode="contain" source={require('../assets/chair.jpg')} style={styles.imageContainer}/>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: colors.black,
      flex: 1,
    },
    
    deleteIcon:{
      width: 50,
      height: 50,
      backgroundColor: colors.primary,
      position: "absolute",
      top: 40,
      right: 30,
    },
    closeIcon: {
      width: 50,
      height: 50,
      backgroundColor: colors.secondary,
      position: "absolute",
      top: 40,
      left: 30,
    },
    imageContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignSelf:'flex-end'
    }
    

  }
);