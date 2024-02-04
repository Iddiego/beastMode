import { StyleSheet, Text, View,  FlatList } from 'react-native'
import CardTaskList from './CardTaskList'

const ListTask = ({tasks, onHandlerModalDelete}) => {
  return (
    <View style={styles.taskContainer}>
        <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item})=>(<CardTaskList
                item={item}
                onHandlerModalDelete = {onHandlerModalDelete}
                />)}
    />
    </View>
  )
}

export default ListTask

const styles = StyleSheet.create({
    taskContainer:{
        margin:10,
        gap:25,
        padding:10
      },

})