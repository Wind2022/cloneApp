import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from 'react-native-button';

const ButtonApp = ({style, onPress, title, color, disabled}) => {
  return (
    <View style={style}>
      <Button
        containerStyle={{
          padding: 10,
          height: 45,
          overflow: 'hidden',
          borderRadius: 4,
          backgroundColor: disabled ? color : color,
        }}
        onPress={onPress}
        style={{
          fontSize: 16,
          color: '#fff',
        }}
        disabled={disabled}
        styleDisabled={{color: '#999'}}>
        {title}
      </Button>
    </View>
  );
};

export default ButtonApp;

const styles = StyleSheet.create({
  button: {},
});
