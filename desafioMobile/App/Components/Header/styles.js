import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical:10
    // marginBottom:Dimensions.get("window").height*0.08
  },
  menu: {
    color: '#FFF',
    transform: [{scale: 1.5}],
  },
  icon: {color: '#FFF', transform: [{scale: 1.5}]},
  HeaderBody: {
    position: 'relative',
    backgroundColor: '#333',
  },
});
export default styles;
