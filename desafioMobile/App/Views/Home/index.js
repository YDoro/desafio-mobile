import React, {Component} from 'react';
import {Text, View, Alert, Dimensions, ActivityIndicator,Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button, Icon, Container, Row} from 'native-base';
import CustomHeader from '../../Components/Header';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import SideMenu from 'react-native-side-menu';
import SideBar from '../../Components/SideBar';
import api from '../../Services/API/index';
const numColumns = 2;
function Item({produto}) {
  return (
    <View style={{borderWidth:1, width: '48%', borderRadius: 15, margin:"1%"}}>
       <View>
        <Image
          source={{uri: produto.Skus[0].Images[0].ImageUrl}}
          style={{
            height: 300,
            width: 300,
            transform: [{scale: 0.45}],
            alignSelf: 'center',
          }}
        />
      </View>
      <Text style={{paddingHorizontal: 10}}>{produto.Name}</Text>
    </View>
  );
}
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
  renderItem = produto => {
    return <Text>{produto.Name}</Text>;
  };

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
          />

          <ScrollView>
            <View style={{width: '100%',alignSelf:"center"}}>
              {this.state.isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <FlatList
                  data={this.state.produtos}
                  
                  keyExtractor={item => item.Id}
                  numColumns={numColumns}
                  renderItem={({item}) => <Item produto={item} />}
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
