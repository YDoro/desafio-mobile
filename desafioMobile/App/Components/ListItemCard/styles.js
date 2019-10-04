import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  desconto: {
    position: 'absolute',
    left: '65%',
    top: '20%',
    zIndex: 3,
    fontSize: 20,
    backgroundColor: '#199729',
    borderRadius: 50,
    padding: 10,
    width: 60,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#FFF',
  },
  card: {borderWidth: 1, width: '48%', borderRadius: 15, margin: '1%'},
  cardHeader: {
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
    paddingTop: '10%',
    backgroundColor: '#333',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingBottom: 2,
  },
  off: {fontSize: 10},
  valuesBox: {alignSelf: 'center', bottom: "15%"},
  ListPrice: {
    textAlign: 'center',
    textDecorationLine: 'line-through',
    color: '#F79EA9',
  },
  Price: {
    textAlign: 'center',
    color: '#53E623',
    fontWeight: 'bold',
    fontSize: 18,
  },
  BestInstallment: {textAlign: 'center', color: '#94E27B'},
}
);
export default styles;
