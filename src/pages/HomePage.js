import React,{useEffect,useCallback,useState} from 'react';
import {View, StyleSheet,Text,BackHandler, Alert, Pressable, ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import Plan from './Components/plan';
const HomePage = ({navigation}) => {
    const [loggedin, setloggedin] = useState(true);
    const [fontsLoaded] = useFonts({
        'Lato': require('../../assets/fonts/Lato-Black.ttf'),
        'Nunito':require('../../assets/fonts/Nunito-Black.ttf')
      });

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress',handleBack)
    }, []);

  
    const handleBack=()=>{
        if(loggedin){
            BackHandler.exitApp()
        }
    }
    return (
        <SafeAreaView >
            <View style={tw`w-full h-full`} >
           <View style={tw` flex-row justify-between p-4 items-center`}>
                <View>
                    <Text style={{fontFamily:'Nunito',color:'gray'}} >
                        Welcome back,
                    </Text>
                    <Text style={{fontFamily:'Nunito',fontSize:20}}>
                        imadeddine kebour
                    </Text>
                </View>
                <View style={tw`bg-green-400 rounded-xl w-10 h-10 shadow-sm flex items-center justify-center`}>
                    <Pressable onPress={()=>navigation.navigate('profile')}>
                    <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
                    </Pressable>
                </View>
           </View>
           <View style={tw`p-4`}>
                <View >
                    <Text style={{fontFamily:'Nunito',fontSize:30,color:'gray'}}>Plans around you.</Text>
                </View>
                <ScrollView  showsVerticalScrollIndicator={false} style={{height:'70%'}} >
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    
                </ScrollView>
           </View>

            
            <View style={tw`flex flex-row p-6 justify-between`}>
           
                <View style={tw`bg-green-600 p-4 items-center justify-center rounded-xl shadow-sm  `}>
                    <Pressable
                    >
                        <Text style={{fontFamily:'Nunito'}}>
                            Join a private team
                        </Text>
                    </Pressable>
                </View>
                <View style={tw`bg-green-400 p-4 items-center justify-center rounded-xl shadow-sm `}>
                    <Pressable
                    >
                        <Text style={{fontFamily:'Nunito'}}>
                            plan a cleaning campain
                        </Text>
                    </Pressable>
                </View>
           
           </View>
            </View>
            
        </SafeAreaView>
        
    );
}



export default HomePage;
