import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import {  Home} from "./Views";

const AppNavigator = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: "Home"
  }
);
const App =createAppContainer(AppNavigator);;
export default App;
