import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const List = ({ todos, setTodos, status }) => {
    return (
        <View>
        <FlatList 
          data = {todos}
          renderItem={({item, index, separators}) => {
            if(status == "all" || status == "active"){
              if(item.checked == false){
                return (
                  <TouchableOpacity key={item.id.toString()} style={styles.list} onPress={() => {setTodos( [...todos, todos[index].checked = !item.checked] )}}>
                    <MaterialIcons size={30} name="check-box-outline-blank" color="orange"/>
                    <Text style={styles.text}>{item.text}</Text>
                  </TouchableOpacity>
                )
              }
            }
            if(status == "all" || status == "done"){
              if(item.checked == true){
                return (
                  <TouchableOpacity key={item.id.toString()} style={styles.list} onPress={() => {setTodos( [...todos, todos[index].checked = !item.checked] )}}>
                    <FontAwesome size={30} name="check-square-o" color="orange"/>
                    <Text style={styles.text}>{item.text}</Text>
                  </TouchableOpacity>
                )
              }
            }
              
          }}
          keyExtractor = {(item, index) => {index.toString()}}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      marginLeft: 10,
    },
    list: {
      flexDirection: 'row',
      margin: 10,
    }
});

export default List;