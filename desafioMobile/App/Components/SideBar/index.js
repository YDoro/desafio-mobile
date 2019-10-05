import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';
import { Icon } from 'native-base';
import api from '../../Services/API'
class SideBar extends Component {
    constructor(pros){
        super(pros);
        this.state={
            categorias:null,
            lista:null,
            titulo:"Categorias"

        }
    }
    componentDidMount(){
        this.getData();
    }
    getData = async ()=>{
        await api.get('StorePreference/CategoryTree').then(response=>{
            console.log(response);
            this.setState({categorias:response.data.Categories,lista:response.data.Categories})
        })
    }
    getBack = ()=>{
        if(this.state.titulo=="Categorias"){
            this.props.close();
        }else{
            this.setState({lista:this.state.categorias,titulo:"Categorias"})
        }
    }
    listItem= (item)=>(
        <TouchableOpacity style={{width:"100%",borderColor:"#DDD",borderWidth:2,padding:5}} onPress={()=>this.SubCat(item)}>
            <Text style={{textAlign:"right",fontSize:15}}>{item.Name}</Text>
            </TouchableOpacity>
    )
    SubCat = (item)=>{
        this.setState({titulo:item.Name,lista:item.SubCategories});
        this.forceUpdate();

    }
    render(){
        return (
                <View style={{height:"100%",width:"100%"}}>
                    <View style={styles.Header}>
                    <View style={styles.iconDiv}>
                                <Icon name="arrow-back" style={styles.icon} onPress={()=>this.getBack()}></Icon>
                            </View>
                        <Text style={styles.titulo}>{this.state.titulo}</Text>
                    </View>
                    <FlatList
                  style={{height:"100%"}}
                  data={this.state.lista}
                  keyExtractor={item => item.Id}
                  renderItem={({item}) => this.listItem(item)}
                />
                      
                </View>
               );
    } 
}
export default SideBar;