import React, { Component } from 'react';

import { Image } from 'react-native';

import { Card, CardItem, Body, Text, Left, Thumbnail, Icon, Button, Right } from 'native-base';

export default class CardComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: 'https://www.dontfretpet.com.au/wp-content/uploads/2018/03/Newsletter-7.jpg' }} />
            <Body>
              <Text>NativeBase</Text>
              <Text note>GeekyAnts</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: 'https://www.eukanuba.co.uk/-/media/images/eukanuba/global/hero-header/articles-mobile-and-hub/dog-dental-care.jpg' }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
