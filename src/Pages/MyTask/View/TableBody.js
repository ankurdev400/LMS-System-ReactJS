import React, { useContext } from "react";
import { TableDataContext } from "./TableContext";
import timeEstimationImg from "../../../Assets/Images/timeestimate.png";
import timerImg from "../../../Assets/Images/timer.png";
import dueDateImg from "../../../Assets/Images/startdate.png";
import endDateImg from "../../../Assets/Images/enddate.png";
import completedInImg from "../../../Assets/Images/completedin.png";
import { DataContext } from "../../../Context/Context";
import SubTaskTable from "./SubTaskTable";
import TimeEstimationModal from "./TimeEstimateModal";

const TableBody = () => {
  const Data = useContext(DataContext);
  const {
    state,
    selectedItem,
    isDropdownOpen,
    timer,
    selectedOption,
    handleDropdownToggle,
    handleChange,
    formatTime,
    options,
    getOptionColor,
    expandedTaskId,
    toggleExpandedTask,
  } = useContext(TableDataContext);

  const isProgress = selectedOption === "In Progress";

  const openTimeEstimationModal = (item) => {
    Data.setSelectedItem(item); // Set the selected item in the context
    Data.setModalValue(item["time estimated"]); // Set the modal value to the current "time estimated" value
    Data.openModal();
  };
  return (
    <div className="main-task-list-container">
      <div className="head-task-list-container">
        {state.map((item) => (
          <React.Fragment key={item.id}>
            <div className="head-task-list-container-table">
            <ul>
                <li onClick={() => Data.changeMytaskRender(true)}>
                  {item.task}
                </li>
                <li onClick={() => toggleExpandedTask(item.id)}>
                  <span>{item.subtasks.length}</span>
                </li>
                <li>
                  <span>
                    {item["time estimated"] === "" ? (
                      <span>
                        <img
                          src={timeEstimationImg}
                          alt="imgdata"
                          onClick={() => openTimeEstimationModal(item)}
                        />
                        {Data.showModal && <TimeEstimationModal />}
                      </span>
                    ) : (
                      <>{item["time estimated"]}</>
                    )}
                  </span>
                </li>
                <li>
                  {selectedItem &&
                  selectedItem.id === item.id &&
                  selectedItem.isRunning ? (
                    <>
                      {formatTime(timer)}
                      {isProgress || (
                        <span>
                          <img src={timerImg} alt="imgdata" />
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {item.timer}
                      <span>
                        <img src={timerImg} alt="imgdata" />
                      </span>
                    </>
                  )}
                </li>
                <li>
                  {selectedItem &&
                  selectedItem.id === item.id &&
                  selectedItem.isRunning ? (
                    <>
                      {item.startDate}

                      {isProgress || (
                        <span>
                          <img src={dueDateImg} alt="imgdata" />
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {item.startDate}
                      <span>
                        <img src={dueDateImg} alt="imgdata" />
                      </span>
                    </>
                  )}
                </li>
                <li>
                  <span>{item.dueDate}</span>
                </li>
                <li>
                  <span>
                    {selectedItem &&
                    selectedItem.id === item.id &&
                    selectedItem.status === "Completed" ? (
                      <>
                        {item.endDate}
                        <span>
                          <img src={endDateImg} alt="imgdata" />
                        </span>
                      </>
                    ) : (
                      <>
                        <span>
                          <img src={endDateImg} alt="imgdata" />
                        </span>
                      </>
                    )}
                  </span>
                </li>

                <li>
                  <span>
                    {selectedItem &&
                    selectedItem.id === item.id &&
                    selectedItem.status === "Completed" ? (
                      <>
                        {item.completedIn}
                        <span>
                          <img src={completedInImg} alt="imgdata" />
                        </span>
                      </>
                    ) : (
                      <>
                        <span>
                          <img src={endDateImg} alt="imgdata" />
                        </span>
                      </>
                    )}
                  </span>
                </li>
                <li>
                  <>
                    <div className="custom-dropdown">
                      <div
                        className="selected-option"
                        style={{ color: getOptionColor(selectedOption) }}
                        onClick={() => handleDropdownToggle(item.id)}
                      >
                        {selectedOption}
                      </div>
                      {isDropdownOpen &&
                        selectedItem &&
                        selectedItem.id === item.id && (
                          <div className="options-list">
                            {options.map((option, index) => (
                              <div
                                key={index}
                                className="option"
                                style={{ color: option.color }}
                                onClick={() => handleChange(option.label)}
                              >
                                {option.label}
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  </>
                </li>
              </ul>
            </div>
            <div className="sub-task-list-data-table">
              {expandedTaskId === item.id && (
                <SubTaskTable subtasks={item.subtasks} />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TableBody;
