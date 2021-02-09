import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
import HomeStack from "./Home.Stack";
import AboutStack from "./About.Stack";

const RootDrawer = createDrawerNavigator({
    Home : {
        screen : HomeStack
    },
    About : {
        screen : AboutStack
    }
})

export default createAppContainer(RootDrawer);