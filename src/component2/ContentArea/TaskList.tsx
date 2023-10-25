// import { Row, Col } from "antd";
// import TaskCard from "./TaskCard";
// import { Task } from "../../api";

// interface TaskListProps {
//   tasks: Task[];
//   onEdit: (taskId: string) => void;
//   onDelete: (taskId: string) => void;
//   onComplete: (taskId: string) => void;
// }

// const TaskList: React.FC<TaskListProps> = ({
//   tasks,
//   onEdit,
//   onDelete,
//   onComplete,
// }) => {
//   return (
//     <Row gutter={[16, 16]}>
//       {tasks.map((task) => (
//         <Col key={task._id} xs={24} sm={24} md={8} lg={8}>
//           <TaskCard
//             task={task}
//             onEdit={onEdit}
//             onDelete={onDelete}
//             onComplete={onComplete}
//           />
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default TaskList;
