//import {  } from 'react-native-gesture-handler';

import { ActivityIndicator, Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React,{Component} from 'react';

import { StatusBar } from 'expo-status-bar';

const {width,height} = Dimensions.get('window');
class Login extends Component {
  state = {
    mail:'',
    password:'',
    spinner:false,
    
  }

  componentDidMount(){
    this.setState({spinner:true});
    
  }
  login(email,password){
    this.setState({spinner:true});
    const eposta = 'alper';
    const sifre = '1';
    if(email === eposta && password === sifre){
        this.props.navigation.navigate('Home')
    }else {

    }
    

  }
  render(){
        return (
    <View style={{height:height,width:width,backgroundColor:'#808080'}}>
      <StatusBar style="inverted" />
      <View style={{alignItems:'center',justifyContent:'center',marginTop:height-600,}}>
        <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'Arial',shadowColor:'white',shadowOffset:{width:2,height:3},shadowOpacity:0.75,fontStyle:'italic'}}>Haber-App</Text>
      </View>
      
      { !this.state.spinner ? 
          <ActivityIndicator/>:
          <View>
              <View style={{margin:50,marginTop:height-600}}>
            <TextInput onChangeText={(mail)=> this.setState({mail})} 
            placeholder='Kullanıcı Adınızı giriniz' 
            autoCorrect={false}
            autoCapitalize='none'
            value= {this.state.mail}
            keyboardType='email-address'
            style={{backgroundColor:'#DCDCDC',height:height-700,borderRadius:20,padding:15,fontSize:12,color:'#000',marginBottom:15,borderWidth:2,fontWeight:'500',borderColor:'#000'}}/>
            <TextInput 
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true} 
            autoCorrect={false}
            autoCapitalize='none'
            value = {this.state.password}  
            placeholder='Şifrenizi giriniz' 
            style={{backgroundColor:'#DCDCDC',height:height-700,borderRadius:20,padding:15,fontSize:12,color:'#000',borderWidth:2,fontWeight:'500'}}/>
      </View>
      <TouchableOpacity onPress={() => this.login(this.state.mail,this.state.password)}>
           <View style={{flexDirection:'row',marginLeft:width-315,marginRight:width-315,alignItems:'center',justifyContent:'center',backgroundColor:'blue',height:50,borderRadius:20,shadowColor:'black',shadowOffset:{width:4,height:3},shadowOpacity:0.5}}>
               <Text style={{color:'#fff',fontSize:24}}>Giriş</Text>
          </View>
      </TouchableOpacity>
          </View>


      }
    </View>
  );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;