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

const DATA = [
  {
    id: 'astro',
    title: '아스트로는 휴게소에서 무엇 ...',
    date: 'Feb 14, 2020',
    profile_img: 'https://i.imgur.com/kJXh2wp.jpg',
    contents_url: 'https://i.imgur.com/UTfZPYO.jpg',
  },
  {
    id: 'neverdie',
    title: 'Never die@@@@',
    date: 'Feb 13, 2020',
    profile_img: 'https://i.imgur.com/S25zRMm.jpg',
    contents_url: 'https://i.imgur.com/tpIc3lx.jpg',
  },
];

function Item({ title, profile_img, contents_url, date }) {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri: profile_img,
            }}
          />
          <Body>
            <Text>{title}</Text>
            <Text note>{date}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{
            uri: contents_url,
          }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem style={{ height: 45 }}>
        <Left>
          <Button transparent>
            <Icon name="ios-heart" style={{ color: 'black' }} />
          </Button>
          <Button transparent>
            <Icon name="ios-chatbubbles" style={{ color: 'black' }} />
          </Button>
          <Button transparent>
            <Icon name="ios-send" style={{ color: 'black' }} />
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
}

class First extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>My pick!</Title>
          </Body>
          <Right />
        </Header>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  if (item.id == 'astro') {
                    navigation.navigate('Second');
                  } else {
                    navigation.navigate('Third');
                  }
                }}>
                <Item
                  title={item.title}
                  url={item.url}
                  profile_img={item.profile_img}
                  contents_url={item.contents_url}
                  date={item.date}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default First;
