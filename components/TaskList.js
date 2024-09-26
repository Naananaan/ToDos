// components/TaskList.js
import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TaskItem
          task={item}
          onPress={() => toggleTask(index)}
          onDelete={() => deleteTask(index)}
        />
      )}
    />
  );
}
