import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const CardTaskList = ({item, onHandlerModalDelete, screenWidth, updateTaskCompleted}) => {
  return (
    <View style={[styles.taskCard,{width:screenWidth -60}]}>
    <Text style={styles.text}>Actualizacion: {item.updateAt}</Text>
    <Text style={styles.text}>Titulo: {item.title}</Text>
    <Text style={styles.textdes}>{item.description}</Text>
    <Text style={styles.textData}>{item.createAt}</Text>
    <View style={styles.completedContainer}/>
          <Switch
            value={item.complete}
            onValueChange={() => updateTaskCompleted(item.id)}
          />
          <Text style={styles.textComplete}>{item.completed ? "Completada" : "Pendiente"}</Text>
  
    <ButtonPrimary title='DEL'onPress={() => onHandlerModalDelete (item)} color={"#FF3985"} />
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