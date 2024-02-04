import { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, FlatList, Modal, Dimensions } from 'react-native';
import uuid from 'react-native-uuid';
import ModalDeleteTask from './src/components/ModalDeleteTask';
import AddTask from './src/components/AddTask';
import ListTask from './src/components/ListTask';

const App = () => {

const [modalVisible, setModalVisible] = useState(false)
const [taskSelected, setTaskSelected] = useState({})
const [taskTitle, setTaskTitle] = useState("")
const [taskDescription, setTaskDescription] = useState("")
const [tasks, setTasks] = useState([])
const screenWidth = Dimensions.get('window').width

  const addTask = () =>{
    const newTask = {
      id: uuid.v4(),
      createAt: new Date(). toLocaleString(),
      updateAt: new Date(). toLocaleString(),
      completed: false,
      title: taskTitle,
      description: taskDescription
    }

    setTasks([...tasks,newTask])
    setTaskTitle("")
    setTaskDescription("")

  }

   const onHandlerTitle = (t) => {
      setTaskTitle(t)
    }
    
    const onHandlerDescription = (t) => {
      setTaskDescription(t)

   }

 const onHandlerModalDelete = (task) => {
  setTaskSelected(task)
  setModalVisible(!modalVisible)
 }

const deleteTask = () => {
  setTasks(tasks.filter(task => task.id != taskSelected.id ))
  setModalVisible(!modalVisible)
}

const updateTaskComplete = (id) => {
  setTasks(tasks.map( task => {
    if(task.id == id ) return {...task,...{completed:!task.completed}}
  }

  ))

}

  return (
    <View style={styles.container}>
       
        <AddTask
        taskTitle = {taskTitle}
        onHandlerTitle = {onHandlerTitle}
        taskDescription ={taskDescription}
        onHandlerDescription = {onHandlerDescription}
        addTask = {addTask} 
        />

        <ListTask
          tasks={tasks}
          onHandlerModalDelete={onHandlerModalDelete}
          screenWidth={screenWidth}
          updateTaskComplete={updateTaskComplete}
        />

        <ModalDeleteTask
          modalVisible={modalVisible}
          taskSelected={taskSelected}
          deleteTask={deleteTask}
          onHandlerModalDelete={onHandlerModalDelete}  
          />


    </View>

  
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    backgroundColor:"#00000",
    flex: 1,
    paddingTop: 30
    },
})