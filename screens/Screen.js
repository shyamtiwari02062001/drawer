import React, { Component } from 'react'
import {
    StyleSheet, View, Dimensions, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Button
  } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
export class Screen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container} data-test="container">
            <View style={styles.header}>
              <SafeAreaView style={{marginLeft:'4%',marginTop:'6%',marginRight:'4%',flexDirection:'row',alignItems:"center"}}>
                  <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <FontAwesome5 name="bars" size={30} color="white"/>
                   </TouchableOpacity>
                   <View style={{flexDirection:"row", marginLeft:20, alignItems:'center'}}>
                      <Image source={require('../assets/favicon.png')} style={{height:30, width:30}} />
                       <Text>LOCATION</Text>
                   </View>
                   <Image source={require('../assets/favicon.png')} style={{height: 30,width: 30,resizeMode: 'contain',position:'absolute',right:0}} />
              </SafeAreaView>
              <View>
                <View style={styles.SectionStyle}>
                <TextInput
                  style={{ flex: 0.75 }}
                  placeholder="SEARCH"
                  underlineColorAndroid="transparent"
                />
                  
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                <Image
                  source={require('../assets/favicon.png')}
                  style={styles.ImageStyle}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image
                  source={require('../assets/favicon.png')}
                  style={styles.ImageStyle}
                />
                </TouchableOpacity>
                </View>          
              </View>   
              <Image source={require('../assets/favicon.png')} style={{alignItems:'center',height: 25,width: 25,marginTop:'3%',marginRight:'3%',resizeMode: 'contain',position:'absolute',right:0}} />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity>
              <Image source={require('../assets/favicon.png')} style={{height:30,width:30}} />
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('../assets/favicon.png')} style={{height:30,width:30}} />
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('../assets/favicon.png')} style={{height:30,width:30}} />
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('../assets/favicon.png')} style={{height:30,width:30}} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
      
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    image: {
      height: 30,
      width: 30,
      resizeMode: 'contain'
    },
    text: {
      position: 'absolute',
      bottom: 15,
      color: '#fff',
      fontSize: 20
    },
    header:{
      position:'absolute',
      top:0,
      backgroundColor: '#12947f',
      width:Dimensions.get('window').width,
      justifyContent:'space-around'
    },
    footer:{
      height:40,
      alignItems:'center',
      flexDirection:'row',
      position:'absolute',
      bottom:0,
      backgroundColor: '#12947f',
      width:Dimensions.get('window').width,
      justifyContent:'space-around'
    },
    SectionStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:"space-between",
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 40,
      borderRadius: 5,
      width:'80%',
      marginLeft:'4%',
      marginTop:'2%',
      marginBottom:'1%'
    },
  
    ImageStyle: {
      flex:0.25,
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
  });
export default Screen
