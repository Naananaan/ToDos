// components/TaskInput.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim().length === 0) {
      Alert.alert('Error', 'Please enter a task.');
      return;
    }
    addTask(task);
    setTask('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Add a new task"
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
});
