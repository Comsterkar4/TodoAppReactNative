import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateTodoScreen() {
  const navigation = useNavigation<any>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSave = () => {
    ToastAndroid.show("Them Thanh Cong!", ToastAndroid.SHORT);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nhập tiêu đề công việc"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
    placeholder="Ghi chú"
    value={description}
    onChangeText={setDescription}
    style={styles.note}
  />
      <Button title="Lưu" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  note: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 12,
  marginBottom: 20,
  minHeight: 120,
  textAlignVertical: 'top',
  },
});
