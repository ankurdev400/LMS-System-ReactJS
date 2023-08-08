import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "../../../Assets/Images/Home.png";
import ProfileIcon from "../../../Assets/Images/Profile.png";
import ApplyLeaveIcon from "../../../Assets/Images/Applyleave.png";
import GrievancesIcon from "../../../Assets/Images/Grievances.png";
import logoutimg from "../../../Assets/Images/logout.png";
import CircularLogoDashboard from "../CircularLogo/CircularLogoDashboard";
import punchIn from "../../../Assets/Images/punchin.png";
import punchOut from "../../../Assets/Images/punchout.png";
import breakIn from "../../../Assets/Images/breakin.png";
import breakOut from "../../../Assets/Images/breakout.png";
import ReactCardFlip from "react-card-flip";
import MessageIcon from "../../../Assets/Images/messages.png";

const Sidebar = () => {
  const [flip, setFlip] = useState(false);
  const [flipBreak, setBreakFlip] = useState(false);

  return (
    <div className="sidebar">
      <div className="logo-web-sidebar-container">
        <CircularLogoDashboard />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="home">
              <span>
                <img src={HomeIcon} alt="homeiconimg" />
              </span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myprofile">
              <span>
                <img
                  style={{ width: "35px", height: "35px", paddingTop: "10%" }}
                  src={ProfileIcon}
                  alt="profileiconimg"
                />
              </span>
              <span>My Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/applyleave">
              <span>
                <img
                  style={{ height: "35px", width: "30px" }}
                  src={ApplyLeaveIcon}
                  alt="applyleaveimg"
                />
              </span>
              <span>Apply For</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/messages">
              <span>
                <img
                  style={{ width: "22.5px", height: "20px" }}
                  src={MessageIcon}
                  alt="messageimg"
                />
              </span>
              <span>Message</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/grievances">
              <span>
                <img src={GrievancesIcon} alt="grievancesimg" />
              </span>
              <span>Grievances</span>
            </NavLink>
          </li>
        </ul>
        <div className="logout-container">
          <Link to="/">
            <button>
              <img src={logoutimg} alt="logoutimg" />
            </button>
          </Link>
        </div>
      </nav>
      <div className="punch-container">
        <div className="punch-btns">
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div className="punch-in" onClick={() => setFlip(true)}>
              <img src={punchIn} alt="punchin" />
            </div>
            <div className="punch-out" onClick={() => setFlip(false)}>
              <img src={punchOut} alt="punchout" />
            </div>
          </ReactCardFlip>
          <span>HH/MM/SS</span>
        </div>
        <div className="punch-btns">
          <ReactCardFlip isFlipped={flipBreak} flipDirection="horizontal">
            <div className="break-in" onClick={() => setBreakFlip(true)}>
              <img src={breakIn} alt="breakin" />
            </div>
            <div className="break-out" onClick={() => setBreakFlip(false)}>
              <img src={breakOut} alt="breakout" />
            </div>
          </ReactCardFlip>
          <span>HH/MM/SS</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
