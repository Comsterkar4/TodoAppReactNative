import { Todo } from '../types';

export const STATIC_TODOS: Todo[] = [
  { id: '1', title: 'Học TypeScript cơ bản', description: 'Học về các kiểu dữ liệu và cú pháp cơ bản', isCompleted: true,},
  { id: '2', title: 'Code màn hình HomeScreen', description: 'Tạo giao diện màn hình HomeScreen với FlatList', isCompleted: true },
  { id: '3', title: 'Đi ngủ sớm', description: 'Vào giấc lúc 10h tối để có sức khỏe tốt', isCompleted: false },
  { id: '4', title: 'Tập thể dục buổi sáng', description: 'Chạy bộ hoặc tập yoga ít nhất 30 phút', isCompleted: false },
  { id: '5', title: 'Đọc sách phát triển bản thân', description: 'Dành ít nhất 15 phút mỗi ngày để đọc sách', isCompleted: false },
  { id: '6', title: 'Học một kỹ năng mới', description: 'Tham gia khóa học online về một kỹ năng mới', isCompleted: false },
  { id: '7', title: 'Dọn dẹp nhà cửa', description: 'Dành thời gian cuối tuần để dọn dẹp và sắp xếp lại nhà cửa', isCompleted: false },
  { id: '8', title: 'Gặp gỡ bạn bè', description: 'Sắp xếp thời gian để gặp gỡ và trò chuyện với bạn bè', isCompleted: false },
  {id: '9', title: 'Lên kế hoạch cho tuần tới', description: 'Dành thời gian cuối tuần để lên kế hoạch và đặt mục tiêu cho tuần tới', isCompleted: true },
  {id: '10', title: 'Thư giãn và chăm sóc bản thân', description: 'Dành thời gian để thư giãn, làm những điều mình thích và chăm sóc bản thân', isCompleted: false },
];