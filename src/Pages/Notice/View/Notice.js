import React, { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { IoIosArrowForward } from "react-icons/io";

const Notice = () => {
  const Data = useContext(DataContext);
  return (
    <div className="notice-container">
      <div className="notice-content">
        <div className="navigations-back">
          <button onClick={() => Data.changeNotice(false)}>
            Home <IoIosArrowForward /> Notice
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Notice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <span>20/07/2023</span>
                  <span>Notice of Presentation</span>

                  <button onClick={() => Data.changeNoticePopUp(true)}>
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span>20/07/2023</span>
                  <span>Notice of Presentation</span>
                  <button>+</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notice;
