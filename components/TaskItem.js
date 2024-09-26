// components/TaskItem.js
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Button } from 'react-native';

export default function TaskItem({ task, onPress, onDelete }) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={onPress} style={styles.taskContent}>
        <Text
          style={[
            styles.taskText,
            { textDecorationLine: task.completed ? 'line-through' : 'none' },
          ]}
        >
          {task.text}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" onPress={onDelete} color="#ff6347" />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9c2ff',
    marginVertical: 5,
    borderRadius: 5,
  },
  taskContent: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
  },
});
