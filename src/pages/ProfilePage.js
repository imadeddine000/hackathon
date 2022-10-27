import React from 'react';
import {View, StyleSheet,Text, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
const ProfilePage = () => {
    return (
        <SafeAreaView>
        <View style={tw`h-full  justify-between p-4`}>
                <View >
            <View style={tw`flex items-center justify-center p-4`}>
                <View style={tw`bg-green-200 w-20 h-20 rounded-full flex items-center justify-center shadow-sm`}>
                    <Text style={tw`text-2xl font-bold`}>
                        I
                    </Text>
                </View>
                <View>
                    <Text style={tw`text-2xl `}>
                        imadeddine kebour
                    </Text>
                </View>
            </View>
            <View style={tw`bg-white p-4 m-4 rounded-lg shadow-sm`}>
                <View>
                    <View>
                        <Text>
                             Score:900
                        </Text>
                    </View>
                </View>
            </View>
        </View>
            <View>
                <Pressable>
                    <Text>
                        Logout
                    </Text>
                </Pressable>
            </View>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default ProfilePage;
