import React, { Component } from 'react';
import {Text,View,StatusBar} from'react-native';
import { withNavigation } from "react-navigation";
import {navigationOptions} from "../../Components/NavigationOptions"

class Home extends Component{
    static navigationOptions = {
      title: 'Desafio Mobile',
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      };
      constructor(props) {
        super(props);
        this.state = {
          
        };
      }
      render(){
          return(
              <View>
                <StatusBar backgroundColor="#333"barStyle="light-content" animated={true}/>
                <Text>Teste</Text>
              </View>
          )
      }
}
export default withNavigation(Home);