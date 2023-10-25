// import { Card, Button, Tooltip } from "antd";
// import {
//   EditOutlined,
//   DeleteOutlined,
//   CheckCircleOutlined,
// } from "@ant-design/icons";
// import { Task } from "../../api";
// import formatDate from "../../helper/formatDate";

// interface TaskCardProps {
//   task: Task;
//   onEdit: (taskId: string) => void;
//   onDelete: (taskId: string) => void;
//   onComplete: (taskId: string) => void;
// }

// const TaskCard: React.FC<TaskCardProps> = ({
//   task,
//   onEdit,
//   onDelete,
//   onComplete,
// }) => {
//   return (
//     <Card className="task-card">
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <p>Priority: {task.priority}</p>
//       <p>Status: {task.status}</p>
//       <p>Due Date: {formatDate(task.dueDate)}</p>
//       <div className="task-card-actions">
//         <Tooltip
//           title={
//             task.status === "completed" ? "This task is already completed" : ""
//           }
//         >
//           <Button
//             icon={<CheckCircleOutlined />}
//             onClick={() => onComplete(task._id)}
//             className={
//               task.status === "completed" ? "complete-icon" : "pending-icon"
//             }
//             disabled={task.status === "completed"}
//           />
//         </Tooltip>

//         <div>
//           <Button icon={<EditOutlined />} onClick={() => onEdit(task._id)} />
//           <Button
//             icon={<DeleteOutlined />}
//             onClick={() => onDelete(task._id)}
//           />
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default TaskCard;
