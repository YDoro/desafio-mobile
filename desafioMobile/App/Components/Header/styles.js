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
    transform: [{scale: 2.5}],
  },
  iconDiv:{margin:5},
  icon: {color: '#FFF', transform: [{scale:2.5}]},
  HeaderBody: {
    position: 'relative',
    backgroundColor: '#333',
  },
  searchBar:{
    marginTop:5,
    paddingBottom:5,
    borderBottomWidth:1,
    borderColor:"#EEE"    

  },
  searchInputIten:{
    borderColor:"#FFF",
    height:Dimensions.get("window").height*0.0455,
    marginLeft:Dimensions.get("window").width*0.04,
    marginRight:Dimensions.get("window").width*0.04,
    alignSelf:"center",
    backgroundColor:'#DDD',
    color:"#FFF"
  },
  searchInputIcon:{
    color:"#FFF",
    paddingLeft:10,
    borderRightWidth:1,
    borderColor:"#FFF",
    transform:[
      {scale:1.5}
    ],
    paddingRight:5
  },
  searchInput:{
    color:"#FFF",
    paddingLeft:10
  },
});
export default styles;
