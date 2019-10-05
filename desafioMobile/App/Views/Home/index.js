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
      isSearching:false,
      isOpen: false,
      produtos: [],
      Query:'',
      Offset:0,
      Size:10
    };
  }
  componentDidMount() {
    const isOpen = this.refs.header.props.isOpen;
    this.getData();
  }
  getData = async () => {
    this.setState({isLoading:true});
    await api
      .post('Search/Criteria', {
        Query: '',
        Offset: this.state.Offset,
        Size: this.state.itenCount,
      })
      .then(async response => {
        console.log(response);
       this.setState({produtos:this.state.produtos.concat(response.data.Products)})
        this.setState({isLoading: false});
      })
      .catch(err => {
        Alert.alert('erro', JSON.stringify(err.response.data));
      });
  };
  refresh = ()=>{
   this.setState(
      {
        Offset:this.state.Offset+this.state.Size,
    },
        ()=>this.buscar(this.state.Query,this.state.Offset,this.state.Size));
  

  }
  buscar = async (Query,Offset,Size)=>{
   

    if(this.state.Query != Query) this.setState({produtos:[]})
    this.setState({Query});

    await api
    .post('Search/Criteria', {
      Query,
      Offset,
      Size
    })
    .then(async response => {
      
      this.setState({produtos:this.state.produtos.concat(response.data.Products)})
 
    })
    .catch(err => {
      Alert.alert('erro', JSON.stringify(err.response.data));
   
      
    });

  }
  ListLoad = ()=>{
    return(
      
      <View>
        <ActivityIndicator size="large" color="#DDD"/>
      </View>
    )
  }
  render() {
    const menu = <SideBar />;
    return (
      <SideMenu
        menu={menu}
        edgeHitWidth={Dimensions.get('window').width}

        isOpen={this.state.isOpen}>
        
          <CustomHeader
            ref="header"
            isOpen={() => this.setState({isOpen: !this.state.isOpen})}
            search={this.buscar}
          

          />

          
           
              {this.state.isLoading ? (
                <ActivityIndicator size="large" style={{alignSelf:"center",marginVertical:Dimensions.get("window").height*0.5}} color="#DDD" />
              ) : (
                <FlatList
                style={{height:"100%"}}
                  data={this.state.produtos}
                  
                  keyExtractor={item => item.Id}
                  numColumns={numColumns}
                  renderItem={({item}) => <ListItemCard produto={item} />}
                  onEndReached={()=>this.refresh()}
                  onEndReachedThreshold={0}
                  ListFooterComponent={this.ListLoad()}
                />
              )}
            
          
      
      </SideMenu>
    );
  }
}
export default withNavigation(Home);
