import React from 'react';
import {View, StyleSheet,Text, Pressable, Image, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
const LoginPage = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        'Nunito':require('../../assets/fonts/Nunito-Black.ttf')
      });

    return (
        <View style={tw`flex w-full h-full  `}>
            <View style={tw``}>
                <View style={tw`pt-20`}>
                </View>
                <View style={tw`flex  items-center justify-start`}>
                    <Image source={require('../../assets/Nature.png')} style={{width:250 ,height:200}}  />
                </View>
                
            </View>
            <View style={tw``}>
                <View>
                    <Text style={{fontFamily:'Nunito',fontSize:30,padding:16}}>
                        Login
                    </Text>
                </View>
                <View style={tw`p-2`}>
                    <View style={tw`flex flex-row items-center p-2 bg-gray-200 rounded-lg m-1 `}>
                        <View style={tw`p-2`}>
                            <MaterialCommunityIcons name="email" size={24} color="black" />
                        </View>
                        <View style={tw`w-full`}>
                            <TextInput placeholder='Email' style={{fontFamily:'Nunito',fontSize:20,}} />
                        </View>
                    </View>
                    <View style={tw`flex flex-row  items-center p-2 bg-gray-200 rounded-lg m-1  `}>
                        <View style={tw`p-2`}>
                            <Fontisto name="locked" size={24} color="black" />
                            </View>
                        <View style={tw`w-full`}>
                            <TextInput placeholder='Password' secureTextEntry style={{fontFamily:'Nunito',fontSize:20,}} />
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <View style={tw`p-4`}>
                    <Pressable
                     style={tw`bg-green-600 p-2 rounded-xl flex items-center`}
                        onPress={()=>navigation.navigate('home')}
                    >
                        <Text style={{fontFamily:'Nunito',fontSize:20,color:'white'}}>Login</Text>
                    </Pressable>
                </View>
               
            </View>
            <View style={tw`flex flex-row p-2 justify-center `}>
                <Text style={{fontFamily:'Nunito',fontSize:15,color:'gray'}}>
                    New To Ecollect?
                </Text>
                <Pressable onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{fontFamily:'Nunito',fontSize:15,color:'darkgreen',paddingLeft:4}}>
                        Register
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}



export default LoginPage;
