import React from 'react';
import {View, StyleSheet,Text, Pressable, Image, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
const SignupPage = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        'Nunito':require('../../assets/fonts/Nunito-Black.ttf')
      });

    return (
        <View style={tw`flex w-full h-full  `}>
            <View style={tw``}>
                <View style={tw`pt-20`}>
                </View>
                <View style={tw`flex  items-center justify-start`}>
                    <Image source={require('../../assets/Writingg.png')} style={{width:250 ,height:200}}  />
                </View>
                
            </View>
            <View style={tw``}>
                <View>
                    <Text style={{fontFamily:'Nunito',fontSize:40,padding:14}}>
                        Register
                    </Text>
                </View>
                <View style={tw`p-2`}>
                    <View style={tw`flex flex-row  items-center p-2 bg-gray-200 rounded-lg m-1 `}>
                        <View style={tw`p-2`}>
                        <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
                        </View>
                        <View style={tw`w-full`}>
                            <TextInput placeholder='Fullname' style={{fontFamily:'Nunito',fontSize:20}} />
                        </View>
                    </View>
                    <View style={tw`flex flex-row  items-center  p-2 bg-gray-200 rounded-lg m-1  `}>
                        <View style={tw`p-2`}>
                            <MaterialCommunityIcons name="email" size={24} color="black" />
                        </View>
                        <View style={tw`w-full`}>
                            <TextInput placeholder='Email' style={{fontFamily:'Nunito',fontSize:20}} />
                        </View>
                    </View>

                    <View style={tw`flex flex-row  items-center  p-2 bg-gray-200 rounded-lg m-1  `}>
                        <View style={tw`p-2`}>
                            <Fontisto name="locked" size={24} color="black" />
                            </View>
                        <View style={tw`w-full`}>
                            <TextInput placeholder='Password' secureTextEntry style={{fontFamily:'Nunito',fontSize:20}} />
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <View style={tw`p-4`}>
                    <Pressable style={tw`bg-green-600 p-2 rounded-xl flex items-center`}>
                        <Text style={{fontFamily:'Nunito',fontSize:20}}>Register</Text>
                    </Pressable>
                </View>
               
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default SignupPage;
