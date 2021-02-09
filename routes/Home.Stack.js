import { createStackNavigator } from "react-navigation-stack";
import Home from "../components/Home.Component";
import Detail from "../components/Detail.Component";
import Header from "../shared/Header.Shared";
import React from 'react';

const screens = {
    Home : {
        screen : Home,
        navigationOptions : ({navigation}) => {
         return {
            headerTitle : () => <Header navigation={navigation} title="Gemzone"/>
         };
        }
    },
    Detail : {
        screen : Detail,
        navigationOptions : {
            title : "Detail"
        }
    },
   

   
}


const HomeStack = createStackNavigator(screens , {
    defaultNavigationOptions : {
        headerTintColor : "#eee",
        headerStyle : { 
            backgroundColor : "#1919e6",
        }
    }
});

export default HomeStack;