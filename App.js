import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Form from './components/Form.js';
import SectionTab from './components/SectionTab.js';
import List from './components/List.js';

export default function App() {
  const [ todos, setTodos ] = useState([]);
  const [ task, setTask ] = useState({
    text: '',
    checked: false,
  });
  const [ status, setStatus ] = useState("all");
  const [ id, setId ] = useState(1);

  const addTask = (event) => {
    if(task.text != ''){
      task.checked = false;
      task.id = id;
      setId(id + 1);
      setTodos([...todos, task]);
      setTask({
        text: ''
      });
    }else{
      Alert.alert(
        "Warning",
        "You have to enter a text value",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: true }
      );
    }
  }

  const setTaskText = (text) => {
    setTask({
      text
    })
  }

  const changeStatus = (tab) => {
      setStatus(tab);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        BABY SHARK
      </Text>
      <Text>
        <Text style={styles.info}>TODO</Text><Text style={styles.text}>-dodoodddooo</Text>
      </Text>
      <Form task={task} setTaskText={setTaskText} addTask={addTask}/>
      <SectionTab status={status} changeStatus={changeStatus}/>
      <List todos={todos} setTodos={setTodos} status={status}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170026',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 30,
  },
  info: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  text: {
    color: 'white',
    marginLeft: 10,
  }
});
