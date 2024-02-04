import { Pressable, StyleSheet, Text } from 'react-native'

const ButtonPrimary = ({title, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FF3985",
        width:"50%",
        paddingHorizontal: 10,
        paddingVertical: "5",
        alignItems:"center",
        borderRadius: 25
    },

    text: {
        fontSize:20,
        color:"white"
    }

})