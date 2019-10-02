import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import {   Title,  View } from 'native-base';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <StatusBar
            backgroundColor="#333"
            barStyle="light-content"
            animated={true}
          />
        <View style={styles.iconDiv}>
        <Icon name="bars"
          active
          style={styles.menu}
          onPress={() =>{this.props.isOpen()}} >
        </Icon>
        </View>
        <Title style={styles.title} >Desafio Mobile</Title>
        <View style={styles.back2}>
        <View style={styles.iconDiv}>
          <Icon
            name="shopping-bag"
            active
            style={styles.icon}
          >
          </Icon>
          </View>
        </View>

      </View>
     
    );
  }
}