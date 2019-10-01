import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button, Icon, Container} from 'native-base';
import CustomHeader from '../../Components/Header';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <CustomHeader />
        <ScrollView>
          
          <StatusBar
            backgroundColor="#333"
            barStyle="light-content"
            animated={true}
          />
           <View >
          <Text>Teste</Text>
        </View>
        </ScrollView>
       
      </View>
    );
  }
}
export default withNavigation(Home);
