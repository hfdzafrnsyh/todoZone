import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import About from "../components/About.Component";
import Header from "../shared/Header.Shared";


const screens = {
    About : {
        screen : About,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle : () => <Header navigation={navigation} title="About Gemzone" />
             };
        }
    }
  

   
}


const AboutStack = createStackNavigator(screens , {
    defaultNavigationOptions : {
        headerTintColor : "#eee",
        headerStyle : { 
            backgroundColor : "#1919e6"
        }
    }
});

export default AboutStack;