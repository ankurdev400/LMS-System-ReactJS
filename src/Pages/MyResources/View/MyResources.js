import React from "react";
import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { IoIosArrowForward } from "react-icons/io";

const MyResouces = () => {
  const Data = useContext(DataContext);
  return (
    <div className="resources-container">
      <div className="resoucres-content">
        <div className="navigations-back">
          <button onClick={() => Data.changeMyResources(false)}>
            Home <IoIosArrowForward /> My Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyResouces;
