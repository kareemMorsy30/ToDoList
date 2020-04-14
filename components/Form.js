import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const Form = ({ task, setTaskText, addTask }) => {
    return (
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Add a To-Do" value={task.text} onChangeText={setTaskText}></TextInput>
            <TouchableOpacity onPress={addTask}>
                <SimpleLineIcons style={styles.button} size={30} name="plus" color="orange"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      marginLeft: 10,
    },
    input: {
      height: 40,
      width: 200, 
      borderRadius: 40,
      backgroundColor: 'white',
      marginTop: 20,
      paddingLeft:10,
    },
    button: {
      marginTop: 24,
      marginLeft: 10,
      height: 40,
      alignItems: 'center',
    },
    form: {
      flexDirection: 'row',
    }
});

export default Form;