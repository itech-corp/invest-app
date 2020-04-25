import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

// const TabNavigatorConfig = {
//   initialRouteName: 'Home',
//   header: null,
//   headerMode: 'none',
// };
const AppNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
  };
const RouteConfigs = {
  Home:{
    screen:HomeScreen,
  },
  About:{
    screen:AboutScreen,
  },
};

const AppNavigator = createStackNavigator(RouteConfigs, AppNavigatorConfig);

export default AppNavigator;