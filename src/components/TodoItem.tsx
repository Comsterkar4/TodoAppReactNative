import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Todo } from '../types';

interface Props {
  item: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// 1. THÊM onDelete VÀO ĐÂY
export const TodoItem: React.FC<Props> = ({ item, onToggle, onDelete }) => {
  return (
    <View style={styles.itemTodo}>
      {/* Checkbox */}
      <TouchableOpacity onPress={() => onToggle(item.id)}>
        <Text style={styles.icon}>
          {item.isCompleted ? '✅' : '⬜'}
        </Text>
      </TouchableOpacity>

      {/* Nội dung (Title + Description) */}
      <View style={styles.contentContainer}>
        <Text style={[styles.title, item.isCompleted ? styles.done : styles.notDone]}>
          {item.title}
        </Text>
        {item.description && (
            <Text style={styles.description}>{item.description}</Text>
        )}
      </View>

      {/* 2. ĐƯA NÚT XÓA RA NGOÀI (Nằm ngang hàng với contentContainer) */}
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteText}>Xóa</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  itemTodo: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    alignItems: 'center', // Căn giữa theo trục dọc để nút xóa không bị lệch
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    // marginTop: 2, // Bỏ cái này đi để căn giữa chuẩn hơn
  },
  contentContainer: {
    flex: 1, // Chiếm hết khoảng trống để đẩy nút Xóa về sát lề phải
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  done: {
    color: 'blue',
    textDecorationLine: 'line-through',
    opacity: 0.6
  },
  notDone: {
    color: 'black',
  },


  deleteButton: {
    backgroundColor: '#ffdddd', // Nền đỏ nhạt
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginLeft: 10, // Cách nội dung một đoạn
  },
  deleteText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  }
});