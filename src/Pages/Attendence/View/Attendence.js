import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { DataContext } from "../../../Context/Context";

const Attendence = () => {
  const Data = useContext(DataContext);
  return (
    <div className="attendence-container">
      <div className="attendece-content">
        <div className="navigations-back">
          <button onClick={() => Data.changeAttendence(false)}>
            Home <IoIosArrowForward /> Attendence
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Date</th>
                <th>Status</th>
                <th>Login Time</th>
                <th>Logout Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Active</td>
                <td>10:00 AM</td>
                <td>12:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="cirular-bar">
        <h2>Bar</h2>
      </div>
    </div>
  );
};

export default Attendence;
