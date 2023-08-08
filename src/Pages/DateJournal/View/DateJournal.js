import React, { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { IoIosArrowForward } from "react-icons/io";
import DateStatus from "./DateStatus";
import Summary from "./Summary";
import CircularProgressDate from "./CircularProgressDate";
import LeaveStatus from "./LeaveStatus";

const DateJournal = () => {
  const Data = useContext(DataContext);
  return (
    <div className="date-journal-container">
      <div className="date-journal-content">
        <div className="navigations-back">
          <button onClick={() => Data.changeDateJournal(false)}>
            Home <IoIosArrowForward /> Date Journal
          </button>
        </div>
        <div className="main-calender-container-datejournal">
          <DateStatus />
          <div className="second-date-journal-container">
            <Summary />
            <CircularProgressDate />
            <LeaveStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateJournal;
