import React from 'react';
import {View, StyleSheet,Text, Image, Pressable} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
const Plan = () => {
    const [fontsLoaded] = useFonts({
        'Nunito':require('../../../assets/fonts/Nunito-Black.ttf'),
      });
      const date=new Date()
    return (
        <View style={tw`bg-white shadow-sm border-2 border-green-600 p-2 flex m-2 rounded-lg flex-row justify-between `}>
           
           <View style={tw`flex justify-between`}>
            <Text style={{fontFamily:'Nunito'}}>
                Cleaning a park
            </Text>
            <Text>
                {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
            </Text>
            <Text style={{fontFamily:'Nunito'}}>
                Planned By:imad
            </Text>
            <Pressable style={tw`bg-green-400 rounded-sm p-1 shadow-sm`}>
                <Text style={{fontFamily:'Nunito',textAlign:'center'}}>
                    Join
                </Text>
            </Pressable>
           </View>
           <View>
            <Image style={{width:150,height:120,borderRadius:5}} source={{uri:'data:image/png;base64,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'}}/>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Plan;
