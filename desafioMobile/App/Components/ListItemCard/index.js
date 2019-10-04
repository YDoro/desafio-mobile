import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from'./styles';

class ListItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var xproduto = this.props.produto;
    var xsku = null;
    var xseller = null;
    //usar o state causava falha no app
    this.props.produto.Skus.map(sku => {
      sku.Sellers.map(seller => {
        if (xseller == null) {
          xseller = seller;
          xsku = sku;
        } else if (seller.Price < xseller.Price) {
          xseller = seller;
          xsku = sku;
          this.setState(this.state);
        }
      });
    });

    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.cardHeader}>
            {xproduto.Name ? xproduto.Name : 'batata'}
          </Text>
          {xseller.ListPrice.toFixed(2) != xseller.Price.toFixed(2) ? (
            <Text style={styles.desconto}>
              {100 -
                (
                  (xseller.Price.toFixed(2) / xseller.ListPrice.toFixed(2)) *
                  100
                ).toFixed(0)}
              %<Text style={styles.off}> off</Text>
            </Text>
          ) : null}
          <Image
            source={{
              uri: xsku.Images[0].ImageUrl ? xsku.Images[0].ImageUrl : null,
            }}
            style={{
              height: 300,
              width: 300,
              transform: [{scale: 0.45}],
              alignSelf: 'center',
            }}
          />
          <View style={styles.valuesBox}>
            <Text style={styles.ListPrice}>
              {xseller.ListPrice.toFixed(2) != xseller.Price.toFixed(2)
                ? ` R$ ${xseller.ListPrice.toFixed(2)}`
                : ''}{' '}
            </Text>
            <Text style={styles.Price}>R$ {xseller.Price.toFixed(2)}</Text>
            <Text style={styles.BestInstallment}>
              {xseller.BestInstallment.Count}x de R$ {xseller.BestInstallment.Value.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default ListItemCard;
