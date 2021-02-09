import React , { useState } from 'react';
import * as Font from "expo-font";
import Navigator from "./routes/Routes.Drawer";



const getFonts = () => Font.loadAsync({
  'Roboto-Black' : require('./assets/font/Roboto-Black.ttf'),
  'Roboto-Regular' : require('./assets/font/Roboto-Regular.ttf')
});

export default function App() {
  return (
    <Navigator/>
  )

}


