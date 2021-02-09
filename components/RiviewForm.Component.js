import React from "react";
import { View , TextInput, Button , Text , StyleSheet} from 'react-native';
import  { Formik } from "formik";
import { GlobalStyle } from "../styles/Global.Styles";
import * as Yup from "yup";
import FlatButton from "../shared/Button.Shared";


const RiviewSchema = Yup.object({
    title : Yup.string()
    .required()
    .min(4),
    body : Yup.string()
    .required()
    .min(8),
    rating : Yup.string()
    .required()
    .test('is-num-1-5' , 'Rating must be number 1 -5' , (value) => {
        return parseInt(value) < 6 && parseInt(value) > 0;
    } ) 

})

export default function RiviewForm({ addRiview }){
    return(
        <View style={GlobalStyle.container}>
        <Formik 
        initialValues={{ title:'',body : '' , rating : ''}}
        validationSchema={RiviewSchema}
        onSubmit={ (values , action) => {
            action.resetForm();
            addRiview(values);
        } }
        >
            
            { (props) => (
                    <View>
                        <TextInput 
                        style={styles.inputText}
                        placeholder="Riview title"
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}
                        />
                        <Text style={GlobalStyle.textError}>{ props.touched.title && props.errors.title }</Text>

                        <TextInput 
                        multiline minHeight={60}
                        style={styles.inputText}
                        placeholder="Riview body"
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        onBlur={props.handleBlur('body')}
                        />

                        <Text style={GlobalStyle.textError}>{ props.touched.body && props.errors.body }</Text>

                        <TextInput 
                        multiline
                        style={styles.inputText}
                        placeholder="Rating (1-5)"
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                        onBlur={props.handleBlur('rating')}
                        />

                    <Text style={GlobalStyle.textError}>{ props.touched.rating && props.errors.rating }</Text>

                      <FlatButton text="Add" onPress={props.handleSubmit}/>
                        
                    </View>
            )}


        </Formik>
      
    </View>
    )
}


const styles = StyleSheet.create({
    inputText : {
        borderWidth : 1,
        borderColor : '#ddd',
        padding : 10,
        fontSize : 18,
        borderRadius : 6,
    }
})