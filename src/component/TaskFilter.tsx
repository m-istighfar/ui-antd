// // TaskFilter.tsx
// import React, { useState } from "react";
// import { Select, Input, DatePicker, Button } from "antd";

// const TaskFilter: React.FC<{
//   onApplyFilters: (filters: any) => void;
// }> = ({ onApplyFilters }) => {
//   const [filters, setFilters] = useState<any>({
//     priority: "",
//     status: "",
//     dueDate: "",
//     search: "",
//   });

//   const handleFilterChange = (field: string, value: any) => {
//     setFilters({ ...filters, [field]: value });
//   };

//   const applyFilters = () => {
//     onApplyFilters(filters);
//   };

//   return (
//     <div>
//       <Select
//         placeholder="Priority"
//         style={{ width: 150 }}
//         onChange={(value) => handleFilterChange("priority", value)}
//       >
//         {/* Priority options */}
//       </Select>
//       <Select
//         placeholder="Status"
//         style={{ width: 150 }}
//         onChange={(value) => handleFilterChange("status", value)}
//       >
//         {/* Status options */}
//       </Select>
//       <DatePicker
//         placeholder="Due Date"
//         style={{ width: 150 }}
//         onChange={(date, dateString) =>
//           handleFilterChange("dueDate", dateString)
//         }
//       />
//       <Input
//         placeholder="Search"
//         style={{ width: 150 }}
//         onChange={(e) => handleFilterChange("search", e.target.value)}
//       />
//       <Button type="primary" onClick={applyFilters}>
//         Apply Filters
//       </Button>
//     </div>
//   );
// };

// export default TaskFilter;
