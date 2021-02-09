import { Button, Dimensions, Header, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import React,{Component} from 'react';

import { StatusBar } from 'expo-status-bar';

const {width,height} = Dimensions.get('window');


habers = [
    {
        name:'Haber 1',
        detail:"Lorem <aipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies lobortis semper. Nunc nec lectus non massa egestas sagittis. Aenean pulvinar eget risus nec viverra. Integer vitae egestas leo. Phasellus suscipit nulla mauris, eu vestibulum arcu dapibus quis. Suspendisse porta risus orci, rutrum hendrerit augue egestas non. Vestibulum eu enim nibh. Duis efficitur nisi id enim egestas, pharetra elementum enim posuere. Morbi at tellus vitae dolor venenatis dignissim nec nec neque. Nam dapibus ipsum non diam tempus, at mattis est vulputate. Suspendisse augue mauris, tempus et hendrerit vitae, imperdiet nec augue. Suspendisse dictum sagittis consequat. Donec feugiat magna vitae iaculis fringilla. Phasellus vehicula sem ac purus elementum rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer condimentum rhoncus nibh et varius.",
        photo:'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/02/20/1331845696906_2/metallica',
        id:1
    },
    {
        name:'Haber 2',
        detail:' Haber 2 Açıklama',
        photo:'https://firststreetmusic.com/wp-content/uploads/GRX70QATVT-002.jpg',
        id:2
    },
    {
        name:'Haber 3',
        detail:' Haber 3 Açıklama',
        photo:'https://www.stars-music.com/medias/sterling-by-musicman/john-petrucci-majesty-maj100-hh-trem-rw-hd-132529.jpg',
        id:3
    },
    {
        name:'Haber 4',
        detail:' Haber 4 Açıklama',
        photo:'https://www.stars-music.com/medias/fender/strat-player-mex-sss-pf-hd-146087.jpg',
        id:3
    },
]

class Home extends Component{


    logout()
    {
        this.props.navigation.navigate('Login');
    }

    gotoDetail(item){
        this.props.navigation.navigate('Details',{detail:item});
    }
    render(){
        return(
       
                <View style={{width:width,height:height,backgroundColor:'#808080'}}>
               
                <StatusBar style="dark" />
                
                <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center',margin:20}}>
                <View style={{alignItems:'center',justifyContent:'center',}}>
                    <Text style={{fontSize:25,fontWeight:'bold',fontFamily:'Arial',fontStyle:'italic',shadowOffset:{width:3,height:6},shadowColor:'#0000ff'}}>Haberler</Text>
                </View>
                <TouchableOpacity 
                    onPress={()=>this.logout()}
                    style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                    <View style={{width:75,alignItems:'center',justifyContent:'center',padding:10,marginRight:10,borderWidth:1,borderColor:'#0000ff',borderRadius:20}}>
                            <Text style={{marginRight:10,color:'#0000ff'}}>Çıkış</Text>
                    </View>
                </TouchableOpacity>
                </View>
             
              
              <ScrollView style={{margin:20}}> 
               <FlatList
                    data={habers}
                    keyExtractor={item => item.id}
                    
                    renderItem={({item})=>   
                    <TouchableOpacity onPress={()=>this.gotoDetail(item)}>
                    <View style={{alignContent:'center',justifyContent:'center',borderWidth:1,padding:20,marginBottom:20,borderRadius:20,backgroundColor:'#fff'}}>
                        <Text style={{fontSize:16,color:'red',fontWeight:'bold',justifyContent:'center',alignContent:'center'}}>{item.name}</Text> 
                        <Image 
                        resizeMode='contain'
                        style={{width:width/2,height:width*0.75,borderRadius:25,borderWidth:1}}
                        source={{uri:item.photo}}/>                       
                    </View>
                    </TouchableOpacity>                  
                }
                />
        </ScrollView>
       
             
          
         


             
                </View>
             

        );
    }
}


export default Home;