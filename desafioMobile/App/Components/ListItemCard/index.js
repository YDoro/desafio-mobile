import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
class ListItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
         menor:null
        };
      }
  render() {
      
      const produto = this.props.produto;
    return (
      <View
        style={{borderWidth: 1, width: '48%', borderRadius: 15, margin: '1%'}}>
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
}
export default ListItemCard;
