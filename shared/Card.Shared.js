import React from 'react';
import { StyleSheet , View , Text } from "react-native";


    const Card = (props) => {
        return (
            <View style={styles.card}>
                <View style={styles.cardContent}>
                  {props.children}
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    card : {
        borderRadius : 10,
        elevation : 3,
        backgroundColor : 'coral',
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : "#2a363b",
        shadowOpacity : 0.7,
        shadowRadius : 4,
        marginHorizontal : 4,
        marginVertical : 6
    },
    cardContent : {
        marginHorizontal : 18,
        marginVertical : 10
    }
})



export default Card;