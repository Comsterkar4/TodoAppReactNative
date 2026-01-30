import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { STATIC_TODOS } from '../data/mockData';
import { TodoItem } from '../components/TodoItem';

export default function HomeScreen() {
  const [todos, setTodos] = useState(STATIC_TODOS);
  const handleToggleTodo = (id: string) => {
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(newTodos); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Danh sách Todo</Text>
      </View>

      <FlatList
        data={todos} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem 
            item={item} 
            onToggle={handleToggleTodo} 
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 16,
    color: 'blue',
    marginTop: 5,
  },
  listContent: {
    paddingBottom: 20,
  },
});