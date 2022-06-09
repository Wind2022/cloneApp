import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput, Icon} from 'react-native-paper';

export const InputPassword = ({placeholder, value, onChange, icon}) => {
  const [showPassword, setShowPassword] = React.useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          value={value}
          secureTextEntry={showPassword}
          onChangeText={onChange}
          placeholder={placeholder}
          style={styles.input}
          left={<TextInput.Icon name={icon} color="#444" />}
        />
        <View style={{right: 40}}>
          <TextInput.Icon
            onPress={handleShowPassword}
            name="eye"
            color="#444"
          />
        </View>
      </View>
    </View>
  );
};

export const InputText = ({placeholder, value, onChange, icon}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      style={styles.input}
      left={<TextInput.Icon name={icon} color="#444" />}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    width: 320,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#f3f3f3',
    borderBottomColor: '#777',
    borderBottomWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    textAlign: 'left',
    fontWeight: '300',
    fontSize: 18,
    fontFamily: 'Dosis-Medium',
  },
});
