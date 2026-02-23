import { Todo } from '../types';

export const STATIC_TODOS: Todo[] = [
  { id: '1', title: 'Học TypeScript cơ bản', description: 'Học về các kiểu dữ liệu và cú pháp cơ bản', isCompleted: true,},
  { id: '2', title: 'Code màn hình HomeScreen', description: 'Tạo giao diện màn hình HomeScreen với FlatList', isCompleted: true },
  { id: '3', title: 'Đi ngủ sớm', description: 'Vào giấc lúc 10h tối để có sức khỏe tốt', isCompleted: false },
  { id: '4', title: 'Tập thể dục buổi sáng', description: 'Chạy bộ hoặc tập yoga ít nhất 30 phút', isCompleted: false },
  { id: '5', title: 'Đọc sách phát triển bản thân', description: 'Dành ít nhất 15 phút mỗi ngày để đọc sách', isCompleted: false },
];