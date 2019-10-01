import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import styles from './styles'
export default class CustomHeader extends Component {
  render() {
    return (
      <Container  style={styles.Header}>
          
        <Header style={styles.Header} >
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Desafio Mobile</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search'/>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}