import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import {
  Card,
  CardItem,
  Thumbnail,
  Container,
  Header,
  Content,
  Icon,
  Accordion,
  Left,
  Body,
  Title,
  Right,
  Button,
} from 'native-base';
import { Video } from 'expo-av';

const astro = {
  id: 'astro',
  title: '아스트로는 휴게소에서 무엇을 할까?',
  date: 'Feb 14, 2020',
  profile_img: 'https://i.imgur.com/kJXh2wp.jpg',
  contents_url: 'https://i.imgur.com/UTfZPYO.jpg',
  members: [
    {
      name: '차은우',
      video_url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    },
    {
      name: '문빈',
      video_url: '',
    },
    {
      name: '라키',
      video_url: '',
    },
    {
      name: 'MJ',
      video_url: '',
    },
    {
      name: '진진',
      video_url: '',
    },
    {
      name: '윤산하',
      video_url: '',
    },
  ],
};

class Second extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={{ alignItems: 'center' }}>BACK</Text>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>My pick!</Title>
          </Body>
          <Right />
        </Header>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: astro.profile_img,
              }}
            />
            <Body>
              <Text>{astro.title}</Text>
              <Text note>{astro.date}</Text>
            </Body>
          </Left>
        </CardItem>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={{
                uri: astro.contents_url,
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={astro.members}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                      navigation.navigate('ShowVideo', {
                        video_url: item.video_url,
                      })
                    }>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default Second;
