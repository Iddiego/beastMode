import { StyleSheet, Text, View, Modal, Button } from 'react-native'


const ModalDeleteTask = ({taskSelected, deleteTask, onHandlerModalDelete, modalVisible}) => {
    const taskTitle = taskSelected ? taskSelected.title : ''
        return (
            <Modal
            visible ={modalVisible}
            animationType='fade'
            onRequestClose={() => onHandlerModalDelete({})}
            >
            
            <View>
            <Text>¿Seguro de eliminar? : {taskSelected.title} </Text>
            <Button title='Si' onPress={deleteTask}/>
            <Button title='No' onPress={() => onHandlerModalDelete({})}/>
            </View>
            </Modal>
        )
        }

export default ModalDeleteTask

const styles = StyleSheet.create({})