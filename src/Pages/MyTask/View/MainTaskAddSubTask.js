import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { AiOutlinePlus } from "react-icons/ai";
import { TableDataContext } from "./TableContext";
import timeEstimationImg from "../../../Assets/Images/timeestimate.png";
import timerImg from "../../../Assets/Images/timer.png";
import dueDateImg from "../../../Assets/Images/startdate.png";
import endDateImg from "../../../Assets/Images/enddate.png";
import completedInImg from "../../../Assets/Images/completedin.png";
import CheckListPopUp from "./CheckListPopUp";
import TimeEstimationModalSubtask from "./TimeEstimationModalSubtask";

const MainTaskAddSubTask = () => {
  const Data = useContext(DataContext);
  const {
    state,
    setState,
    getOptionColor,
    selectedOptionSubtask,
    formatTimeSubtask,
    timerSubtask,
    optionsSubTask,
    handleDropdownToggleSubtask,
    isDropdownOpenSubtask,
    selectedItemSubtask,
    handleChangeSubtask,
  } = useContext(TableDataContext);

  const [showCheckListPopup, setShowCheckListPopup] = useState(false);
  const [subtaskName, setSubtaskName] = useState("");
  const [addingSubtaskForTaskId, setAddingSubtaskForTaskId] = useState(null);
  const [currentSubtaskIndex, setCurrentSubtaskIndex] = useState(null);
  const [checklistItem, setChecklistItem] = useState("");

  const handleChecklistClick = (taskId, subtaskIndex) => {
    setAddingSubtaskForTaskId(taskId);
    setCurrentSubtaskIndex(subtaskIndex);
    setShowCheckListPopup(true);
  };

  const handleAddChecklistItem = (checklistItem) => {
    if (checklistItem.trim() !== "") {
      const updatedSubtasks = state.map((item) => {
        if (item.id === addingSubtaskForTaskId) {
          const updatedSubtask = { ...item };
          updatedSubtask.subtasks[currentSubtaskIndex].checklist.push({
            text: checklistItem,
            checked: false,
          });
          return updatedSubtask;
        }
        return item;
      });

      setState(updatedSubtasks);

      setChecklistItem("");
    }
  };

  const handleCheckItem = (updatedChecklist) => {
    const updatedSubtasks = state.map((item) => {
      if (item.id === addingSubtaskForTaskId) {
        const updatedSubtask = { ...item };
        updatedSubtask.subtasks[currentSubtaskIndex].checklist =
          updatedChecklist;
        return updatedSubtask;
      }
      return item;
    });

    setState(updatedSubtasks);
  };

  const handleRemoveItem = (updatedChecklist) => {
    const updatedSubtasks = state.map((item) => {
      if (item.id === addingSubtaskForTaskId) {
        const updatedSubtask = { ...item };
        updatedSubtask.subtasks[currentSubtaskIndex].checklist =
          updatedChecklist;
        return updatedSubtask;
      }
      return item;
    });

    setState(updatedSubtasks);
  };

  const handleAddSubtask = (taskId) => {
    setAddingSubtaskForTaskId(taskId);
    setSubtaskName("");
    setCurrentSubtaskIndex(null);
  };
  function generateUniqueId() {
    // Get the current timestamp (up to milliseconds)
    const timestamp = Date.now();

    // Generate a random number (you can adjust the range as needed)
    const randomNum = Math.floor(Math.random() * 100000);

    // Combine timestamp and random number to create a unique ID
    const uniqueId = `${timestamp}${randomNum}`;

    return parseInt(uniqueId, 10); // Convert to an integer for better representation
  }
  const handleSubtaskAdd = () => {
    if (subtaskName.trim() !== "") {
      const updatedSubtasks = state.map((item) => {
        if (item.id === addingSubtaskForTaskId) {
          const updatedSubtask = { ...item };
          updatedSubtask.subtasks.push({
            id: generateUniqueId(),
            name: subtaskName,
            checklist: [],
            timeestimated: "",
            timer: "",
            startDate: "",
            endDate: "",
            completedIn: "",
            status: "To Do",
            isRunning: false,
          });
          return updatedSubtask;
        }
        return item;
      });

      setState(updatedSubtasks);

      setSubtaskName("");
      setAddingSubtaskForTaskId(null);
    }
  };
  const isProgress = selectedOptionSubtask === "In Progress";
  const isCompleted = selectedOptionSubtask === "Completed";


  const openTimeEstimationModalSubtask = (item) => {
    Data.setSelectedItemSubtaskTimeEstimation(item); // Set the selected item in the context
    Data.setModalValueSubtask(item.timeestimated); // Set the modal value to the current "time estimated" value
    Data.openModalSubtask();
  };

  return (
    <div className="main-data-sub-task">
      <div className="main-data-sub-content-form">
        <div className="form-area-sub-task">
          <button onClick={() => Data.changeMytaskRender(false)}>
            Login Page
          </button>
          <h3>Total No. of Task {state[0].subtasks.length}.</h3>
          <input type="file" />
        </div>
        <div className="text-area-sub-task">
          <textarea placeholder="Description"></textarea>
        </div>
      </div>
      <div className="main-data-sub-content-add-task">
        <div className="subtask-header">
          <div>Subtask Name</div>
          <div>Checklist</div>
          <div>Time Estimated</div>
          <div>Timer</div>
          <div>Start Date</div>
          <div>End Date</div>
          <div>Completed In</div>
          <div>Status</div>
        </div>
        {state.map((item) => (
          <React.Fragment key={item.id}>
            <div className="body-table-subtask-data-content">
              <ul>
                {item.subtasks.map((subtask, index) => (
                  <li key={subtask.id}>
                    <div>{subtask.name}</div>
                    <div onClick={() => handleChecklistClick(item.id, index)}>
                      <span>{subtask.checklist.length}</span>
                    </div>
                    <div>
                      {subtask.timeestimated}
                      <img src={timeEstimationImg} alt="timeestimation" onClick={() => openTimeEstimationModalSubtask(subtask)} />
                    </div>
                    <div>
                      {selectedItemSubtask &&
                      selectedItemSubtask.id === subtask.id &&
                      selectedItemSubtask.isRunning ? (
                        <>
                          {formatTimeSubtask(timerSubtask)}
                          {isProgress || <img src={timerImg} alt="imgdata" />}
                        </>
                      ) : (
                        <>
                          {subtask.timer}

                          <img src={timerImg} alt="imgdata" />
                        </>
                      )}
                    </div>
                    <div>
                      {subtask.startDate === "" ? (
                        <img src={dueDateImg} alt="startimg" />
                      ) : (
                        subtask.startDate
                      )}
                    </div>
                    <div>
                      {subtask.endDate === "" ? (
                        <img src={endDateImg} alt="endimg" />
                      ) : (
                        subtask.status === "Completed" && subtask.endDate
                      )}
                    </div>
                    <div>
                      {isCompleted ? (
                        <>
                          {subtask.completedIn}
                          <img src={completedInImg} alt="completeimg" />
                        </>
                      ) : (
                        <>
                          <img src={completedInImg} alt="completeimg" />
                        </>
                      )}
                    </div>
                    <>
                      <div-custom className="custom-dropdown-2">
                        <div-custom-drop
                          className="selected-option-drop-2"
                          style={{ color: getOptionColor(subtask.status) }}
                          onClick={() =>
                            handleDropdownToggleSubtask(item.id, subtask.id)
                          }
                        >
                          {subtask.status}
                        </div-custom-drop>
                        {isDropdownOpenSubtask &&
                          selectedItemSubtask &&
                          selectedItemSubtask.id === subtask.id && (
                            <div-custom-options className="options-list-data-2">
                              {optionsSubTask.map((option, index) => (
                                <div-custom-option-list
                                  key={index}
                                  className="options-data-list"
                                  style={{
                                    color: option.color,
                                    padding: "6px 10px",
                                  }}
                                  onClick={() =>
                                    handleChangeSubtask(option.label)
                                  }
                                >
                                  {option.label}
                                </div-custom-option-list>
                              ))}
                            </div-custom-options>
                          )}
                      </div-custom>
                    </>
                  </li>
                ))}
                {addingSubtaskForTaskId === item.id && (
                  <li>
                    <input
                      type="text"
                      value={subtaskName}
                      onChange={(e) => setSubtaskName(e.target.value)}
                      onBlur={handleSubtaskAdd}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") handleSubtaskAdd();
                      }}
                    />
                  </li>
                )}
              </ul>
            </div>
            <div className="btn-add-subtask-container">
              <button onClick={() => handleAddSubtask(item.id)}>
                <span>Subtask</span>
                <span>
                  <AiOutlinePlus />
                </span>
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
      {showCheckListPopup && (
        <CheckListPopUp
          onClose={() => setShowCheckListPopup(false)}
          onAddChecklistItem={handleAddChecklistItem}
          checklistItem={checklistItem}
          setChecklistItem={setChecklistItem}
          subtask={
            state.find((item) => item.id === addingSubtaskForTaskId)?.subtasks[
              currentSubtaskIndex
            ]
          }
          onCheckItem={handleCheckItem}
          onRemoveItem={handleRemoveItem}
        />
      )}
                    {Data.showModalSubtask && <TimeEstimationModalSubtask />}

    </div>
  );
};

export default MainTaskAddSubTask;
