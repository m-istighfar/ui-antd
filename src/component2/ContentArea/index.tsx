// import { Layout, Button } from "antd";
// import {
//   fetchTasks,
//   createNewTask,
//   updateTask,
//   deleteTask,
//   markTaskAsComplete,
//   Task,
// } from "../../api";
// import TaskList from "./TaskList";
// import TaskModal from "./TaskModal";

// interface ContentAreaProps {
//   isBlurred: boolean;
// }

// const ContentArea: React.FC<ContentAreaProps> = ({ isBlurred }) => {
//   const [tasks, setTasks] = useState<Task[] | undefined>(undefined);
//   const [editingTask, setEditingTask] = useState<Task | null>(null);
//   const [count, setCount] = useState<number | undefined>(undefined);
//   const [loading, setLoading] = useState<boolean>(false);

//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleAddNewTask = () => {
//     setEditingTask(null);
//     setIsModalVisible(true);
//   };

//   const handleEditTask = (taskId: string) => {
//     const taskToEdit = tasks?.find((t) => t._id === taskId) || null;
//     setEditingTask(taskToEdit);
//     setIsModalVisible(true);
//   };

//   const handleSaveTask = async (taskData: Task) => {
//     try {
//       setLoading(true);
//       if (editingTask) {
//         await updateTask(editingTask._id, taskData);
//       } else {
//         await createNewTask(taskData);
//       }
//       setIsModalVisible(false);
//       setEditingTask(null);
//       fetchTasksData();
//     } catch (error) {
//       console.error("Failed to save task:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteTask = async (taskId: string) => {
//     try {
//       setLoading(true);
//       await deleteTask(taskId);
//       fetchTasksData();
//     } catch (error) {
//       console.error("Failed to delete task:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCompleteTask = async (taskId: string) => {
//     try {
//       setLoading(true);
//       await markTaskAsComplete(taskId);
//       fetchTasksData();
//     } catch (error) {
//       console.error("Failed to mark task as complete:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchTasksData = async () => {
//     try {
//       setLoading(true);
//       const { data, count } = await fetchTasks();
//       setTasks(data);
//       setCount(count);
//     } catch (error) {
//       console.error("Failed to fetch tasks:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasksData();
//   }, []);

//   return (
//     <Layout.Content
//       style={{ padding: "20px", filter: isBlurred ? "blur(4px)" : "none" }}
//     >
//       <div className="content-header">
//         <h1>Tasks</h1>
//         <Button type="primary" onClick={handleAddNewTask}>
//           Add New Task
//         </Button>
//       </div>
//       {loading ? (
//         <p>Loading tasks...</p>
//       ) : (
//         <TaskList
//           tasks={tasks}
//           onEdit={handleEditTask}
//           onDelete={handleDeleteTask}
//           onComplete={handleCompleteTask}
//         />
//       )}
//       <TaskModal
//         isVisible={isModalVisible}
//         onSave={handleSaveTask}
//         onCancel={() => setIsModalVisible(false)}
//         editingTask={editingTask}
//       />
//     </Layout.Content>
//   );
// };

// export default ContentArea;
