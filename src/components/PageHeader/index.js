import React, { Component } from 'react'

import { Header, Left, Button, Icon, Body, Right, Title } from 'native-base'

export default class PageHeader extends Component {

  render () {
    return(
      <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}