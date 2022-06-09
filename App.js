/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import banner from './assets/bannerlogin.jpg';
import Button from 'react-native-button';

import Signup from './src/components/Auth/Signup';
import Login from './src/components/Auth/Login';
import ForgotPassword from './src/components/Auth/ForgotPassword';
import Home from './src/components/Client/Home';
import colors from './src/content/colors';

const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const ImageBanner = () => {
    return <Image source={banner} style={styles.image} />;
  };
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Login />
        </ScrollView>
      </SafeAreaView> */}
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{headerTitle: props => <ImageBanner {...props} />}}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{headerTitle: props => <ImageBanner {...props} />}}
          name="signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerTitle: props => <ImageBanner {...props} />}}
          name="forgotpassword"
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {height: 180, right: 85},
});

export default App;
