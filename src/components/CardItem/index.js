import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import banner from '../../../assets/bannerhome.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../content/colors';

const CardItem = ({title, content, image, height}) => {
  return (
    <Card
      style={{
        flex: 1,
        marginTop: 10,
        marginHorizontal: 5,
        height: height,
        paddingBottom: 10,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 10,
      }}>
      <Card.Cover source={image} style={{height: (height * 2) / 4}} />
      <Card.Content>
        <Title style={{fontSize: 13}}>{title}</Title>
        <Paragraph style={{fontSize: 11, marginTop: -10}}>{content}</Paragraph>
      </Card.Content>
      <Card.Actions
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon name="heart" size={20} color="#f33030" />
        <Icon name="share-alt" size={20} color="#333" />
      </Card.Actions>
    </Card>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
