import React , { useState } from 'react';
import { View , Button , StyleSheet , Text  , FlatList , TouchableOpacity  , Modal,
TouchableWithoutFeedback , Keyboard
} from 'react-native';
import { GlobalStyle } from "../styles/Global.Styles";
import Card from "../shared/Card.Shared";
import { MaterialIcons } from "@expo/vector-icons";
import RiviewForm from './RiviewForm.Component';

const Home = ({navigation}) => {
    const [modalOpen , setModal] = useState(false);

    const [ review , setRiview ] = useState([
        { 
            title : 'Elang' ,
            rating : 5,
            body : 'loremipsum',
            key : 1
        },
        { 
            title : 'Kuda' ,
            rating : 3,
            body : 'loremipsum',
            key : 2
        },
        { 
            title : 'Garuda' ,
            rating : 4,
            body : 'loremipsum',
            key : 3
        },
        { 
            title : 'Harimau' ,
            rating : 2,
            body : 'loremipsum',
            key : 4
        }
    ])

   const addRiview = (riview) => {
       riview.key = Math.random().toString()
       setRiview( (addRiviews) => {
        return [riview , ...addRiviews]
       })
       setModal(false);
   }

    return(
       <View style={GlobalStyle.container}>
          
           <Modal visible={modalOpen} animationType="slide" >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
          <MaterialIcons 
                name="close"
                size={30}
                style={{...styles.modalToogle , ...styles.modalClose}}
                onPress={ () => setModal(false)}
                />
            <RiviewForm addRiview={addRiview}/>
          </View>
            </TouchableWithoutFeedback>
           </Modal>


        <MaterialIcons 
        name="add"
        size={33}
        onPress={ () => setModal(true)}
        style={styles.modalToogle}
        />

          <FlatList
          
          data={review}
          renderItem={ ({ item }) => (
            <TouchableOpacity onPress={ () => navigation.navigate('Detail' , item)}>
           <Card>
           <Text style={GlobalStyle.textStyle}>{ item.title }</Text> 
            </Card> 
          </TouchableOpacity>
          )}

          />
       </View>
    )
}

const styles = StyleSheet.create({
      modalToogle : {
          marginTop : 10,
          borderWidth : 1,
          borderColor : '#f2f2f2',
          padding : 10,
          borderRadius : 10,
          alignSelf : 'center'
      },
      modalClose : {
          marginTop : 20,
          marginBottom : 0
      },
      modalContent : {
          flex : 1,
      }
})


  

export default Home;