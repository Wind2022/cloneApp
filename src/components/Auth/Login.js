import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

import colors from '../../content/colors';
import {InputText, InputPassword} from '../InputApp';
import ButtonApp from '../ButtonApp.js';

const Login = ({navigation, route}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const refInput = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState({
    email: false,
    password: false,
  });
  const handleChangeEmail = e => {
    setEmail(e);
    if (e.length >= 6) {
      setError({...error, email: false});
    } else {
      setError({...error, email: true});
    }
  };
  const handleChangePassword = e => {
    setPassword(e);
  };

  const submitLogin = () => {
    if (email != '' && password != '') {
      // if (email.length < 6) {
      //   setError(true);
      // } else {
      setIsLoading(true);
      setTimeout(() => {
        navigation.navigate('home', {name: email});
        setIsLoading(false);
      }, 300);
      // }
    } else {
      alert('Vui lòng nhập đầy đủ thông tin đăng nhập');
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{height: '100%', width: '100%'}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 80,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            {/* <Text
              style={{
                fontSize: 35,
                fontWeight: '900',
                color: colors.greenPrimary,
                fontFamily: 'Dosis-SemiBold',
              }}>
              LOGIN
            </Text> */}
            <InputText
              placeholder="Email"
              value={route.params?.email ?? email}
              icon="email"
              onChange={e => handleChangeEmail(e)}
            />
            {error.email && (
              <Text style={{color: 'red', right: 70}}>
                * Email phải đủ 6 chữ cái
              </Text>
            )}

            <InputPassword
              placeholder="Password"
              value={password}
              icon="shield"
              disabled
              onChange={e => handleChangePassword(e)}
            />
            <ActivityIndicator
              animating={isLoading}
              color={Colors.red800}
              style={{bottom: -75, zIndex: 100}}
            />
            <ButtonApp
              style={{width: 320, marginTop: 40, marginBottom: 40}}
              onPress={() => submitLogin()}
              title="Login"
              color={colors.greenPrimary}
              disabled={isLoading}
            />
          </View>
          <Text
            onPress={() => navigation.navigate('forgotpassword')}
            style={{
              color: colors.greenPrimary,
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'Dosis-SemiBold',
              marginTop: -30,
            }}>
            Forgot password
          </Text>
          <View
            style={{
              paddingTop: 140,
              marginBottom: 10,
              borderBottomColor: '#888',
              borderBottomWidth: 1,
              width: '70%',
            }}>
            <Text style={{textAlign: 'center'}}>Or</Text>
          </View>
          <ButtonApp
            style={{width: 320}}
            onPress={() => navigation.navigate('signup')}
            title="Create new account"
            color={colors.greenPrimary}
            disabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
