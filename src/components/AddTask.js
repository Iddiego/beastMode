import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const AddTask = ({taskTitle,
                onHandlerTitle,
                taskDescription,
                onHandlerDescription,
                addTask}) => {
  return (
    <View style={styles.inputCointainer}>
    <TextInput
            value={taskTitle}
            onChangeText={onHandlerTitle}
            placeholder='Ingresa Titulo'
            maxLength={25}
            style={styles.input}
            placeholderTextColor={"white"} />

    <TextInput
            value={taskDescription}
            onChangeText={onHandlerDescription} 
            placeholder='Ingresa Descripcion' 
            style={styles.input}
            placeholderTextColor={"white"}
            multiline
            numberOfLines={4}
            maxLength={100} />
            
    <ButtonPrimary  title='Add' onPress={addTask}/>
  </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
   
    inputCointainer:{
        backgroundColor:"#00FF7F",
        flexDirection:"",
        alignItems: "center",
        justifyContent: "space-around",
        padding:10
      },
    
      input:{
        backgroundColor: "#00FF7F",
        borderBottomWidth: 20,
        width: 250,
        borderWidth:2,
        margin:10,
        paddingVertical:5,
        paddingHorizontal:10
    
      }

})