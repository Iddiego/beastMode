import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardTaskList = ({item, onHandlerModalDelete}) => {
  return (
    <View style={styles.taskCard}>
    <Text style={styles.text}>{item.title}</Text>
    <Text style={styles.textdes}>{item.description}</Text>
    <Text style={styles.textData}>{item.createAt}</Text>
    <Button title='Del'onPress={() => onHandlerModalDelete (item.id)} color={"#FF3985"} />
    </View>
  )
}

export default CardTaskList

const styles = StyleSheet.create({

    taskCard:{
        backgroundColor:"#00FF7F",
         flexDirection: "",
         justifyContent:"space-between",
         padding: 20,
         borderRadius: 50,
         margin: 10
          
        },
        
        text:{
          color:"white",
          padding: 10,
          fontSize: 30,
        },
        
        textData:{
          color:"",
          fontSize: 10
        },
        textdes:{
          color:"",
          fontSize: 20
      
        },
})