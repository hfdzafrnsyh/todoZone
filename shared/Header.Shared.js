import React from "react";
import { StyleSheet , View , Text  , ImageBackground } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({navigation , title }) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(

        // <ImageBackground source={require('../assets/game_bg.png')} ></ImageBackground>
        <View >
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu} />
            <View style={styles.header}>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    headerText : {
        fontWeight : 'bold',
        fontSize : 25,
        color : '#eee',
        letterSpacing : 1
    },
    icon : {
        position : "absolute",
        color : "#eee"

    }
})

export default Header;