// import React from "react";

// const TableHeader = () => {
//   return (
//     <div className="headers-task-list">
//       <ul>
//         <li>Task</li>
//         <li>Subtask</li>
//         <li>Estimated Time</li>
//         <li>Timer</li>
//         <li>Start Date</li>
//         <li>Due Date</li>
//         <li>End Date</li>
//         <li>Completed In</li>
//         <li>Status</li>
//       </ul>
//     </div>
//   );
// };

// export default TableHeader;

import React from "react";

const TableHead = ({ columnHeaders }) => {
  return (
    <div className="headers-task-list">
      <ul>
        {columnHeaders.map((header, index) => (
          <li key={index}>{header}</li>
        ))}
      </ul>
    </div>
  );
};

export default TableHead;
