import { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid';

const App = () => {

const [modalVisible, setModalVisible] = useState(false)
const [idSelected , setIdSelected] = useState("")
const [newTask, setNewTask] = useState({
  title:"",
  description: "",
  id:""
})

const [tasks, setTasks] = useState([])

  const addTask = () =>{
    setTasks([...tasks,newTask])
    
    setNewTask({
    title:"",
    description: "",
    id:"",
    createAt: new Date().toLocaleString()
    })
  }

   const onhandlerTitle = (t) => {
      const id = uuid.v4()
      setNewTask({...newTask,title:t,id})
    }
    
    const onhandlerDescription = (t) => {
      setNewTask({...newTask,description:t})

   }

 const onHandlerModalDelete = (id) => {
  setIdSelected(id)
  setModalVisible(true)

 }

const deleteTask = () => {
  setTasks(tasks.filter(task => task.id != idSelected))
}

  return (
    <View style={styles.container}>
      <View style={styles.inputCointainer}>
        <TextInput value={newTask.title} onChangeText={onhandlerTitle} placeholder='Ingresa Titulo' style={styles.input} color={"white"} />
        <TextInput  value={newTask.description} onChangeText={onhandlerDescription} placeholder='Ingresa Descripcion' style={styles.input} color={"white"} />
        <Button color={"#FF3985"} title='Add' onPress={addTask}/>
      </View>
      <View style={styles.taskContainer}>
      <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({item})=>(
        <View style={styles.taskCard}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.textdes}>{item.description}</Text>
          <Text style={styles.textData}>{item.createAt}</Text>
          <Button title='Del'onPress={() => onHandlerModalDelete (item.id)} color={"#FF3985"} />
          </View>
      )}
      />
      </View>
      <Modal
      visible ={modalVisible}>
      <View>
        <Text>¿Seguro de eliminas?</Text>
        <Button title='Si' onPress={() => {
          deleteTask()
          setModalVisible(false)
          }}/>
        <Button title='No' onPress={() => setModalVisible(false)} style={styles.button}/>

      </View>
      </Modal>
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

  },
  taskContainer:{
    margin:10,
    gap:25,
    padding:10
  },

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