import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useCallback } from 'react';
import LoginPage from './src/pages/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupPage from './src/pages/SignupPage';
import ProfilePage from './src/pages/ProfilePage';
import HomePage from './src/pages/HomePage';
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito':require('./assets/fonts/Nunito-Black.ttf')
  });
  const Stack = createNativeStackNavigator()

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



  return (
    
        <NavigationContainer>
              <Stack.Navigator initialRouteName="index" screenOptions={{headerShown:false}}>
                  <Stack.Screen name="index" component={LoginPage}  />
                  <Stack.Screen name="Signup" component={SignupPage}/>
                  <Stack.Screen name='home' component={HomePage}/>
                  <Stack.Screen name='profile'  component={ProfilePage}/>
              </Stack.Navigator>
        </NavigationContainer>      
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily:'Nunito',
  },
});
