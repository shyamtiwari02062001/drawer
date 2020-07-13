import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    text:{
        color:'#161924',
        fontSize:20,
        fontWeight:'500'
    }
})