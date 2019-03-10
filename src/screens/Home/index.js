import React, { Component } from 'react';

import {
  Container,
  Content
} from 'native-base';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import CardComponent from '../../components/CardComponent';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <PageHeader />
        <Content>
          <CardComponent />
        </Content>
        <PageFooter />
      </Container>
    );
  }
}
