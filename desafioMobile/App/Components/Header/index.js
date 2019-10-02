import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import { Container, Left, Body, Right, Button, Icon, Title, Text, View, Row } from 'native-base';
import styles from './styles'


export default class CustomHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching:false
            
        };
      }
      
  render() {

    return (
     
        <View style={styles.Header}>
        <Icon name="menu"
          active
          style={styles.menu}
          onPress={() =>{this.props.isOpen()}} >
        </Icon>
        <Title style={styles.title} >Desafio Mobile</Title>
        <View style={styles.back2}>
          <Icon
            name="search"
            active
            style={styles.icon}
          >
          </Icon>
        </View>

      </View>
     
    );
  }
}