import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateTodoScreen() {
  const navigation = useNavigation<any>();
  const [title, setTitle] = useState('');

  const handleSave = () => {
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
});
