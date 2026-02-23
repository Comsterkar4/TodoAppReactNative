import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text,Alert } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { STATIC_TODOS } from '../data/mockData';
import { TodoItem } from '../components/TodoItem';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();
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
  const handleDeleteTodo = (id: string) => {
    Alert.alert('Xóa Todo', 'Bạn có chắc chắn muốn xóa todo này không?', [
      {
        text: 'Hủy',
        style: 'cancel',
      },
      {
        text: 'Xóa',
        style: 'destructive',
        onPress: () => {
          const newTodos = todos.filter(item => item.id !== id);
          setTodos(newTodos);
        },
      },
    ]);
  }
 
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
            onDelete={handleDeleteTodo}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity
  style={styles.fab}
  onPress={() => navigation.navigate('CreateTodo' as never)}
>
  <Text style={styles.fabText}>+</Text>
</TouchableOpacity>

      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  fab: {
    position: 'absolute', right: 20, bottom: 30, width: 56, height: 56,
    borderRadius: 28, backgroundColor: '#253342', justifyContent: 'center',
    alignItems: 'center', elevation: 5,
  },
fabText: { color: '#ffffff', fontSize: 32, lineHeight: 34 },
  header: { padding: 20, backgroundColor: '#4b7bad', marginBottom: 10 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#ffffff' }, 
  listContent: { paddingBottom: 20 },
});