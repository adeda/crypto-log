import CryptocurrencyList from './CryptocurrencyList';
import Settings from './Settings';
import SideMenu from './SideMenu';
import { DrawerNavigator } from 'react-navigation';

export default DrawerNavigator({
  CryptocurrencyList: {
    screen: CryptocurrencyList
  },
  Settings: {
    screen: Settings
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});
