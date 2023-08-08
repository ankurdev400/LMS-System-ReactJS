import React, { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import estimateModalImg from "../../../Assets/Images/timeEstimateModalImg.png";
import { IoIosHelpCircle } from "react-icons/io";
import { TableDataContext } from "./TableContext";

const TimeEstimationModal = () => {
  const Data = useContext(DataContext);
  const { state, setState } = useContext(TableDataContext);

  const handleInputChange = (e) => {
    Data.setModalValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      saveModalValue();
    } else if (e.key === "Escape") {
      Data.closeModal();
    }
  };

  const saveModalValue = () => {
    // Handle saving the modal value and updating the main task state
    const newValue = Data.modalValue; // The value entered by the user

    const updatedTasks = state.map((task) => {
      if (task.id === Data.selectedItem.id) {
        return {
          ...task,
          "time estimated": newValue,
        };
      }
      return task;
    });

    setState(updatedTasks);
    Data.closeModal();
  };

  return (
    <div className="modal-estimate-time">
      <div className="modal-content">
        <div className="left-part-modal">
          <h2>
            <span>Time Estimation</span>
            <span>
              <IoIosHelpCircle />
            </span>
          </h2>
          <img src={estimateModalImg} alt="timeestimationmodalimg" />
        </div>
        <div className="right-part-modal">
          <input
            type="text"
            value={Data.modalValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type in time"
          />
          <h5>changes are automatically saved</h5>
          <div className="btns-modal-estimate">
            <button onClick={saveModalValue}>Save</button>
            <button onClick={Data.closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeEstimationModal;
