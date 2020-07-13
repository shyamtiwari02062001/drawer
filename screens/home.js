import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from "react-navigation-drawer"
import {
    ProfileScreen,
    HomeScreen,
}
from './index'
const DrawerNavigator = createDrawerNavigator({
    ProfileScreen,
    HomeScreen,
})
export default createAppContainer(DrawerNavigator)