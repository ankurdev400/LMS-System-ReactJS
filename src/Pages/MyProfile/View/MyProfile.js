import React, { useContext } from "react";
import Date from "../../../Components/Date/Date";
import { AiFillCaretDown } from "react-icons/ai";
import profileImg from "../../../Assets/Images/profile_pic.jpg";
import myAchievementimg from "../../../Assets/Images/myachievementbtn.png";
import myProjectimg from "../../../Assets/Images/myprojectsbtn.png";
import myFinanceimg from "../../../Assets/Images/myfinancebtn.png";
import { DataContext } from "../../../Context/Context";
import MyProjects from "./MyProjects";

const MyProfile = () => {
  const Data = useContext(DataContext);
  return (
    <div className="my-profile-main">
      <div className="my-profile-first-cont">
        <div>
          <Date />
        </div>
      </div>
      {Data.displayMyProjects ? (
        <MyProjects />
      ) : (
        <div className="employee-container">
          <div className="emp-cont-1">
            <div className="employee-details">
              <div className="heading-emp">
                <h3>Employee Details</h3>

                <button onClick={() => Data.changeEditEmployee(true)}>
                  Edit <AiFillCaretDown />
                </button>
              </div>
              <div className="emp-data">
                <h3>Employee ID</h3>
                <h3>231-231-2312</h3>
              </div>
              <div className="emp-data">
                <h3>Mobile No</h3>
                <h3>+91 9876543210</h3>
              </div>
              <div className="emp-data">
                <h3>Personal Email ID</h3>
                <h3>abc@gmail.com</h3>
              </div>
            </div>
            <div className="employee-bank-details">
              <div className="heading-bank">
                <h3>Bank Details</h3>
                <button onClick={() => Data.changeEditBank(true)}>
                  Edit <AiFillCaretDown />
                </button>
              </div>
              <div className="emp-data">
                <h3>Full Name</h3>
                <h3>231-231-2312</h3>
              </div>
              <div className="emp-data">
                <h3>Account No</h3>
                <h3>231-231-2312</h3>
              </div>
              <div className="emp-data">
                <h3>IFSC Code</h3>
                <h3>231-231-2312</h3>
              </div>
              <div className="emp-data">
                <h3>Bank Name</h3>
                <h3>231-231-2312</h3>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-card-cont">
              <div className="upper-profile-card">
                <div className="profile-theme-back"></div>
                <div className="profile-photo">
                  <div
                    className="profile-circular-photo"
                    style={{
                      background: `url(${profileImg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
                <div className="profile-name">
                  <h3>Ankur Saini</h3>
                </div>
              </div>
              <div className="lower-profile-card">
                <div className="profile-details-bg"></div>
                <div className="profile-card-details">
                  <div className="profile-data">
                    <h3>D.O.B</h3>
                    <h3>01/01/1990</h3>
                  </div>
                  <div className="profile-data">
                    <h3>Department</h3>
                    <h3>Development</h3>
                  </div>
                  <div className="profile-data">
                    <h3>Work Email ID</h3>
                    <h3>email@webreate.com</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="emp-navigation">
            <div className="emp-projects">
              <button onClick={() => Data.changeMyProjects(true)}>
                <img src={myProjectimg} alt="myprojectimg" />
                <h3>My Projects</h3>
              </button>
            </div>
            <div className="emp-achievement">
              <button>
                <img src={myAchievementimg} alt="myachievementimg" />
                <h3>My Achievement</h3>
              </button>
            </div>
            <div className="emp-finance">
              <button>
                <img src={myFinanceimg} alt="myfinanceimg" />
                <h3>My Finance</h3>
              </button>
            </div>
            <div className="emp-leave">
              <div className="paid-leave">
                <h3 className="leave-type">Paid Leave</h3>
                <div className="leave-numeric">
                  <h3>05</h3>
                </div>
              </div>
              <hr />
              <div className="unpaid-leave">
                <h3 className="leave-type">Unpaid Leave</h3>
                <div className="leave-numeric">
                  <h3>05</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="my-profile-cont-4">
        <div className="quote">
          <h3>
            a place where <span>growth matter</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
