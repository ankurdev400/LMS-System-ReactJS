import React, { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { DataContext } from "../../../Context/Context";

const MyProjects = () => {
  const Data = useContext(DataContext);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task 1",
      status: "todo",
      subtask: 12,
      head: "adhiraj",
      due: "11/09/24",
    },
    {
      id: 2,
      name: "Task 2",
      status: "todo",
      subtask: 6,
      head: "adhiraj",
      due: "11/09/24",
    },
    {
      id: 3,
      name: "Task 3",
      status: "todo",
      subtask: 8,
      head: "adhiraj",
      due: "11/09/24",
    },
    {
      id: 4,
      name: "Task 4",
      status: "todo",
      subtask: 8,
      head: "adhiraj",
      due: "11/09/24",
    },
    {
      id: 5,
      name: "Task 5",
      status: "todo",
      subtask: 8,
      head: "adhiraj",
      due: "11/09/24",
    },
  ]);

  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [changesTasks, setChangesTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const task = JSON.parse(e.dataTransfer.getData("task"));

    switch (status) {
      case "todo":
        if (task.status !== "todo") {
          setTasks([...tasks, { ...task, status: "todo" }]);
          updateTaskList(task, task.status, "todo");
        }
        break;
      case "inProgress":
        if (task.status !== "inProgress") {
          if (inProgressTasks.length === 0) {
            setInProgressTasks([
              ...inProgressTasks,
              { ...task, status: "inProgress" },
            ]);
            updateTaskList(task, task.status, "inProgress");
          } else {
            alert("Only one task can be in progress at a time.");
          }
        }
        break;
      case "changes":
        if (task.status === "completed") {
          setChangesTasks([...changesTasks, { ...task, status: "changes" }]);
          updateTaskList(task, task.status, "changes");
        } else {
          alert("Tasks can only be dropped from 'Completed' to 'Changes'.");
        }
        break;
      case "completed":
        if (task.status === "inProgress") {
          setCompletedTasks([
            ...completedTasks,
            { ...task, status: "completed" },
          ]);
          updateTaskList(task, task.status, "completed");
        } else {
          alert("Tasks can only be dropped from 'In Progress' to 'Completed'.");
        }
        break;
      default:
        break;
    }
  };

  const updateTaskList = (task, currentStatus, newStatus) => {
    switch (currentStatus) {
      case "todo":
        setTasks(tasks.filter((t) => t.id !== task.id));
        break;
      case "inProgress":
        setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));
        break;
      case "changes":
        setChangesTasks(changesTasks.filter((t) => t.id !== task.id));
        break;
      case "completed":
        setCompletedTasks(completedTasks.filter((t) => t.id !== task.id));
        break;
      default:
        break;
    }
  };

  return (
    <div className="my-project-container">
      <div className="my-project-content">
        <div className="navigations-back">
          <button onClick={() => Data.changeMyProjects(false)}>
            My Profile <IoIosArrowForward /> My Projects
          </button>
        </div>
        <div className="my-project-container-list">
          <div
            className="to-do-task"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "todo")}
          >
            <h2>
              <span>To Do</span>
              <span>{tasks.length}</span>
            </h2>
            <div className="drag-task-main">
              {tasks.map((task) => (
                <div
                  className="drag-task-container"
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                >
                  <p>
                    <span>Name:</span>
                    <span>{task.name}</span>
                  </p>
                  <p>
                    <span>Subtask:</span>
                    <span>{task.subtask}</span>
                  </p>
                  <p>
                    <span>Head:</span>
                    <span>{task.head}</span>
                  </p>
                  <p>
                    <span>Due:</span>
                    <span>{task.due}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="to-do-progress"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "inProgress")}
          >
            <h2>
              <span>In Progress</span>
              <span>{inProgressTasks.length}</span>
            </h2>
            <div className="drag-task-main">
              {inProgressTasks.map((task) => (
                <div
                  className="drag-task-container"
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                >
                  <p>
                    <span>Name:</span>
                    <span>{task.name}</span>
                  </p>
                  <p>
                    <span>Subtask:</span>
                    <span>{task.subtask}</span>
                  </p>
                  <p>
                    <span>Head:</span>
                    <span>{task.head}</span>
                  </p>
                  <p>
                    <span>Due:</span>
                    <span>{task.due}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="to-do-changes"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "changes")}
          >
            <h2>
              <span>Changes</span>
              <span>{changesTasks.length}</span>
            </h2>
            <div className="drag-task-main">
              {changesTasks.map((task) => (
                <div
                  className="drag-task-container"
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                >
                  <p>
                    <span>Name:</span>
                    <span>{task.name}</span>
                  </p>
                  <p>
                    <span>Subtask:</span>
                    <span>{task.subtask}</span>
                  </p>
                  <p>
                    <span>Head:</span>
                    <span>{task.head}</span>
                  </p>
                  <p>
                    <span>Due:</span>
                    <span>{task.due}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="to-do-completed"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "completed")}
          >
            <h2>
              <span>Completed</span>
              <span>{completedTasks.length}</span>
            </h2>
            <div className="drag-task-main">
              {completedTasks.map((task) => (
                <div
                  className="drag-task-container"
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                >
                  <p>
                    <span>Name:</span>
                    <span>{task.name}</span>
                  </p>
                  <p>
                    <span>Subtask:</span>
                    <span>{task.subtask}</span>
                  </p>
                  <p>
                    <span>Head:</span>
                    <span>{task.head}</span>
                  </p>
                  <p>
                    <span>Due:</span>
                    <span>{task.due}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
