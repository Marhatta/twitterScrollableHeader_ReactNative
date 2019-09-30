import React,{Component} from 'react';
import {View,Text,ScrollView,Image} from 'react-native';

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40

class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          backgroundColor:'lightskyblue',
          height:HEADER_MAX_HEIGHT
        }}>

        </View>

        <ScrollView style={{flex:1}}>
          <View style={{
          height:PROFILE_IMAGE_MAX_HEIGHT,
          width:PROFILE_IMAGE_MAX_HEIGHT,
          borderRadius:PROFILE_IMAGE_MAX_HEIGHT/2,
          borderColor:'white',
          borderwidth:3,
          overflow:'hidden',
          marginTop:HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT)/2,
          marginLeft:10
          }}>
            <Image 
            source={require('./assets/image.jpg')} 
            style={{flex:1,width:null,height:null}}
            />
         </View>
         <View><Text style={{fontWeight:'bold',fontSize:26,paddingLeft:10}}>Ritika Koul</Text></View>
        </ScrollView>
      </View>
    )
  }
}

export default App;