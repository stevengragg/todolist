import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  }

  const handleCompleteTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => handleCompleteTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
          
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding": "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.taskInput} placeholder="Write a task here" value={task} onChangeText={text => text !== "" || text !== null ? setTask(text) : null}></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20
  },
  taskInput: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addText: {}
});
