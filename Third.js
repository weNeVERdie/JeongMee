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

const neverdie = {
  id: 'neverdie',
  title: 'Never die@@@@',
  date: 'Feb 13, 2020',
  profile_img: 'https://i.imgur.com/S25zRMm.jpg',
  contents_url: 'https://i.imgur.com/tpIc3lx.jpg',
  members: [
    { name: '이진주', video_url: '' },
    { name: '채유진', video_url: '' },
    { name: '김정미', video_url: '' },
  ],
};

class Third extends Component {
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
                uri: neverdie.profile_img,
              }}
            />
            <Body>
              <Text>{neverdie.title}</Text>
              <Text note>{neverdie.date}</Text>
            </Body>
          </Left>
        </CardItem>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={{
                uri: neverdie.contents_url,
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={neverdie.members}
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

export default Third;
