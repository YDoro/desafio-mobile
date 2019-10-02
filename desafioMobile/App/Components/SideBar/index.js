import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
class SideBar extends Component {
    render(){
        return (
                <View >
                        <Text>
                            <Icon name="rocket" size={30} color="#900" />
                            Conteúdo side bar
                        </Text>
                </View>
               );
    } 
}
export default SideBar;