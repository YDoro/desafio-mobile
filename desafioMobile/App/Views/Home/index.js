import React, {Component} from 'react';
import {Text, View, StatusBar,Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button, Icon, Container} from 'native-base';
import CustomHeader from '../../Components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import SideMenu from 'react-native-side-menu';
import SideBar from '../../Components/SideBar';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      isOpen:false
    };
  }
  componentDidMount(){
    const isOpen = this.refs.header.props.isOpen;
    this.setState({isOpen});
  }
  render() {
    const menu = <SideBar/>
    return (
      <SideMenu menu={menu}
      edgeHitWidth={Dimensions.get('window').width}
      toleranceY={30}
      isOpen={this.state.isOpen}
      
      >
      <View>
        <CustomHeader ref='header' isOpen={()=>this.setState({isOpen:!this.state.isOpen})}/>

        <ScrollView>
          
          
           <View >
          <Text>Teste</Text>
        </View>
        </ScrollView>
       
      </View>
      </SideMenu>
    );
  }
}
export default withNavigation(Home);
