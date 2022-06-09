import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {_taskHandle} from 'react-native/Libraries/Interaction/Batchinator';

import colors from '../../content/colors';
import {InputText, InputPassword} from '../InputApp';
import ButtonApp from '../ButtonApp/index.js';

const Signup = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');
  const refInput = React.useRef(null);
  const handleChangeEmail = e => {
    setEmail(e);
  };
  const handleChangePassword = e => {
    setPassword(e);
  };

  const handleChangeRePassword = e => {
    setRePassword(e);
  };

  const submitLogin = () => {
    if (email != '' && password != '') {
      navigation.navigate('home', {name: email});
    } else {
      alert('Vui lòng nhập đầy đủ thông tin đăng nhập');
    }
  };
  console.log(refInput.current);
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
                color: colors.greenPrimary,
                fontFamily: 'Dosis-ExtraBold',
              }}>
              SIGN UP
            </Text> */}
            <InputText
              placeholder="Email"
              value={email}
              icon="email"
              onChange={e => handleChangeEmail(e)}
            />
            <InputPassword
              placeholder="Password"
              value={password}
              icon="shield"
              onChange={e => handleChangePassword(e)}
            />
            <InputPassword
              placeholder="Re-password"
              value={rePassword}
              icon="shield"
              onChange={e => handleChangeRePassword(e)}
            />
          </View>

          <ButtonApp
            style={{width: 320, paddingTop: 30}}
            onPress={() => navigation.navigate('login', {email: email})}
            title="Create account"
            color={colors.greenPrimary}
            disabled={false}
          />
          <View
            style={{
              paddingTop: 110,
              marginBottom: 10,
              borderBottomColor: '#888',
              borderBottomWidth: 1,
              width: '70%',
            }}>
            <Text style={{textAlign: 'center'}}>Or</Text>
          </View>
          <ButtonApp
            style={{width: 320}}
            onPress={() => navigation.navigate('login')}
            title="Sigin"
            color={colors.greenPrimary}
            disabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    marginTop: 20,
    width: 320,
    borderRadius: 10,
    backgroundColor: '#f3f3f3',
    borderBottomColor: '#777',
    borderBottomWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    textAlign: 'left',
    paddingEnd: 10,
    fontWeight: '300',
    fontSize: 18,
    fontFamily: 'Dosis-Medium',
  },
});
