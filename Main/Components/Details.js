import { ActivityIndicator, Button, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React,{Component} from 'react';

import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';

const {width,height} = Dimensions.get('window');
class Details extends Component{

state={
    info:{}
}

componentDidMount(){
   var detail = this.props.route.params.detail
    console.log(this.props.route);
    console.log(this.props.route.params);
    console.log(this.props.route.params.detail);
    this.setState({info:this.props.route.params.detail})
    console.log('info:'+this.state.info);
}
    render(){
        return(
            <View style={{width:width,height:height,flex:1}}>
                <View style={{alignContent:'center',justifyContent:'center',marginTop:50}}>
                        <Text style={{textAlign:'center',fontSize:40}}>Haber-App</Text>
                </View> 
                <ScrollView>
                <View style={{alignContent:'center',justifyContent:'center',marginTop:50,margin:20}}>
                       
                        <Image
                            source={{uri:this.state.info.photo}}
                            style={{width:width,height:width*0.75,borderRadius:25,padding:20}}
                            
                        />
                    <Text style={{textAlign:'left',marginTop:10,fontSize:30,fontWeight:'bold',color:'red'}}>{this.state.info.name}</Text>
                    <Text style={{marginTop:10,fontSize:18,lineHeigh:1.6,fontWeight:'650',textAlign:'justify'}}>{this.state.info.detail}</Text>
            
                </View>
                
                </ScrollView>

            </View>

        );
    }
}

export default Details;