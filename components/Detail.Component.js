import React from 'react';
import { View , StyleSheet , Text, Button , Image , Modal} from 'react-native';
import { GlobalStyle, images} from "../styles/Global.Styles";
import Card from "../shared/Card.Shared";

const Detail = ({ navigation }) => {

    const rating = navigation.getParam('rating');

    const pressBack = () => {
        navigation.goBack();
    }

    return(
       <View style={GlobalStyle.textStyle}>
       <View style={GlobalStyle.cardDetail}>
           <Card>
           <Text style={GlobalStyle.textDetail}>{ navigation.getParam('title') }</Text>
            <Text style={GlobalStyle.textDetail}>{ navigation.getParam('body') }</Text>
            <View style={styles.rating}>
                <Text>Gemzone Rating : </Text>
               <Image source={images.ratings[rating]}/>
            </View>

           </Card>
       </View>
      <View style={styles.buttonBack}>
     <Button title="Go Home" onPress={pressBack} ></Button>
    </View>
       </View>
    )
}


const styles = StyleSheet.create({
    rating : {
        flexDirection : 'row',
        justifyContent : 'center',
        paddingTop : 16,
        marginTop : 16,
        borderTopWidth : 1,
        borderTopColor : '#eee'
    },
    buttonBack : {
        marginLeft : 40,
        marginRight : 40,
      
    }
});

export default Detail;