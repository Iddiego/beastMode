import { StyleSheet, Text, View, Modal, Button } from 'react-native'


const ModalDeleteTask = ({taskSelected,
                          deleteTask, 
                          onHandlerModalDelete, 
                          modalVisible}) => {

        return (
            <Modal
            visible ={modalVisible}
            animationType='fade'
            onRequestClose={() => onHandlerModalDelete({})}
            >
            
            <View style={styles.cont}>
            <Text>¿Seguro de eliminar? : {taskSelected.title} </Text>
            <Button title='Si' onPress={deleteTask}  />
            <Button title='No' onPress={() => onHandlerModalDelete({})}/>
            </View>
            </Modal>
        )
        }

export default ModalDeleteTask

const styles = StyleSheet.create({

cont:{
    alignItems:"center",
    padding: 100
}

})