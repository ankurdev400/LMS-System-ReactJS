import React, { useContext, useState } from "react";
import { DataContext } from "../../../Context/Context";
import Notice from "../../Notice/View/Notice";
import task from "../../../Assets/Images/mytask.png";
import notice from "../../../Assets/Images/notice.png";
import datejournal from "../../../Assets/Images/datejournal.png";
import Date from "../../../Components/Date/Date";
import MyTask from "../../MyTask/View/MyTask";
import DateJournal from "../../DateJournal/View/DateJournal";
import resourcesimg from "../../../Assets/Images/resourcesimg.png";
import MyResouces from "../../MyResources/View/MyResources";

const Home = () => {
  const Data = useContext(DataContext);
  const [counter, setCounter] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    // Increment the counter when the button is clicked
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className="home-container">
      <div className="first-home-cont">
        <div>
          <Date />
        </div>
      </div>
      {Data.displayMyTask ? (
        <MyTask />
      ) : Data.displayNotice ? (
        <Notice />
      ) : Data.displayDateJournal ? (
        <DateJournal />
      ) : Data.displayMyResources ? (
        <MyResouces />
      ) : (
        <div className="container-home-render">
          <div className="first-home-cont-2">
            <div className="bg-home"></div>

            <div className="my-container">
              <button onClick={() => Data.changeMyTask(true)}>
                <img src={task} alt="mytaskimage" />
                <h3>My Task</h3>
              </button>
            </div>
            <div className="my-container">
              <button onClick={() => Data.changeDateJournal(true)}>
                <img src={datejournal} alt="datejournal" />

                <h3>Date Journal</h3>
              </button>
            </div>
            <div className="my-container">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  Data.changeNotice(true);
                  handleButtonClick();
                }}
              >
                <img src={notice} alt="noticeimage" />
                <h3>Notice</h3>
              </button>
              {isHovered && <div className="counter">{counter}</div>}
            </div>

            <div className="my-container">
              <button onClick={() => Data.changeMyResources(true)}>
                <img src={resourcesimg} alt="resourcesimage" />
                <h3>My Resources</h3>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="first-home-cont-4">
        <div className="quote">
          <h3>
            a place where <span>growth matter</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
