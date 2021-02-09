import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
    container: {
        flex : 1,
        padding : 20
      },
      textStyle : {
          padding : 10,
          fontSize : 25,
          justifyContent : 'center',
          textAlign : 'center'
      },
      cardDetail : {
          justifyContent : 'center',
          backgroundColor : '#2a363b',
          borderRadius : 10,
          margin : 40
      },
      textDetail : {
          textAlign : 'center',
          color : "#efeeee",
          fontSize : 20,
          padding : 5
      },
      textError : {
          color : '#dc143c',
          textAlign : 'center',
          fontWeight : 'bold',
          margin : 5
      }
    
});


export const images = {
    ratings : {
        '1' : require('../assets/rating-1.png'),
        '2' : require('../assets/rating-2.png'),
        '3' : require('../assets/rating-3.png'),
        '4' : require('../assets/rating-4.png'),
        '5' : require('../assets/rating-5.png')
    }
}


