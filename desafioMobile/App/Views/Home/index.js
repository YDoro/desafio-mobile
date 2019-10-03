import React, {Component} from 'react';
import {Text, View, Alert, Dimensions, ActivityIndicator,Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button, Icon, Container, Row} from 'native-base';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import SideMenu from 'react-native-side-menu';
import CustomHeader from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import ListItemCard from '../../Components/ListItemCard';
import api from '../../Services/API/index';
const numColumns = 2;

class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isOpen: false,
      produtos: [],
    };
  }
  componentDidMount() {
    const isOpen = this.refs.header.props.isOpen;
    this.getData();
  }
  getData = async () => {
    await api
      .post('Search/Criteria', {
        Query: '',
        Offset: 0,
        Size: 10,
      })
      .then(async response => {
        console.log(response);
        this.setState({produtos: response.data.Products, isLoading: false});
      })
      .catch(err => {
        Alert.alert('erro', JSON.stringify(err.response.data));
      });
  };
  buscar = async (Query)=>{
    this.setState({isLoading:true});
    await api
    .post('Search/Criteria', {
      Query: `${Query}`,
      Offset: 0,
      Size: 10,
    })
    .then(async response => {
      console.log(response);
      this.setState({produtos: response.data.Products, isLoading: false});
    })
    .catch(err => {
      Alert.alert('erro', JSON.stringify(err.response.data));
    });
  }
  render() {
    const menu = <SideBar />;
    return (
      <SideMenu
        menu={menu}
        edgeHitWidth={Dimensions.get('window').width}
        toleranceY={30}
        isOpen={this.state.isOpen}>
        <View>
          <CustomHeader
            ref="header"
            isOpen={() => this.setState({isOpen: !this.state.isOpen})}
            search={this.buscar}

          />

          <ScrollView>
            <View style={{width: '100%',alignSelf:"center"}}>
              {this.state.isLoading ? (
                <ActivityIndicator size="large" style={{alignSelf:"center",marginVertical:Dimensions.get("window").height*0.5}} color="#DDD" />
              ) : (
                <FlatList
                  data={this.state.produtos}
                  
                  keyExtractor={item => item.Id}
                  numColumns={numColumns}
                  renderItem={({item}) => <ListItemCard produto={item} />}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </SideMenu>
    );
  }
}
export default withNavigation(Home);
