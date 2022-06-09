import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import banner from '../../../assets/bannerhome.jpg';
import image2 from '../../../assets/image2.jpg';
import image3 from '../../../assets/image3.jpg';
import image4 from '../../../assets/image4.jpg';
import {TextInput, Icon, Appbar} from 'react-native-paper';
import colors from '../../content/colors';
import CardItem from '../CardItem';
import {Button} from 'antd-mobile';
import {SearchOutline} from 'antd-mobile-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomNavigation} from 'react-native-paper';
import {Drawer} from 'react-native-paper';

const dataList = [
  {
    id: 1,
    image: banner,
    title: 'Buổi sáng',
    content: 'React Native Paper is a high-quality',
  },
  {
    id: 2,
    image: image2,
    title: 'Bình minh',
    content: 'React Native Paper is a high-quality',
  },
  {
    id: 3,
    image: image3,
    title: 'Khu rừng',
    content: 'React Native Paper is a high-quality',
  },
  {
    id: 4,
    image: image4,
    title: 'Ngôi làng',
    content: 'React Native Paper is a high-quality',
  },
  {
    id: 1,
    image: banner,
    title: 'Buổi sáng',
    content: 'React Native Paper is a high-quality',
  },
  {
    id: 2,
    image: image2,
    title: 'Bình minh',
    content: 'React Native Paper is a high-quality',
  },
  {
    id: 3,
    image: image3,
    title: 'Khu rừng',
    content: 'React Native Paper is a high-quality',
  },
  {
    id: 4,
    image: image4,
    title: 'Ngôi làng',
    content: 'React Native Paper is a high-quality',
  },
];

const Home = ({route, navigation}) => {
  const numColumn = 2;
  const w = Dimensions.get('window').width;
  const _goBack = () => navigation.goBack();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  const _renderItem = (item, index) => (
    <CardItem
      image={item.item.image}
      title={item.item.title}
      content={item.item.content}
      height={w / numColumn}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{backgroundColor: colors.greenPrimary}}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Home" subtitle="" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>

      <ScrollView style={styles.scrollView}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingHorizontal: 5,
            paddingBottom: 10,
          }}>
          <FlatList
            style={{}}
            data={dataList}
            keyExtractor={(item, index) => index}
            renderItem={_renderItem}
            numColumns={numColumn}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#333',
  },
  scrollView: {},
});
