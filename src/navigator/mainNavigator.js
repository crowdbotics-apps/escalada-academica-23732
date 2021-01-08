import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList191195Navigator from '../features/NotificationList191195/navigator';
import Settings191194Navigator from '../features/Settings191194/navigator';
import Settings191186Navigator from '../features/Settings191186/navigator';
import UserProfile191184Navigator from '../features/UserProfile191184/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList191195: { screen: NotificationList191195Navigator },
Settings191194: { screen: Settings191194Navigator },
Settings191186: { screen: Settings191186Navigator },
UserProfile191184: { screen: UserProfile191184Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
