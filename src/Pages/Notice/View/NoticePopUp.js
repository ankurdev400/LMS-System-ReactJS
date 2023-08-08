import React, { useContext } from "react";
import { DataContext } from "../../../Context/Context";

const NoticePopUp = () => {
  const Data = useContext(DataContext);
  return (
    <div className="popup-notice">
      <div className="popup-content">
        <div>
          <h4>Date -20/6/2023</h4>
        </div>
        <div>
          <h4>Subject -</h4>
          <p>
            This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.This is the content of the pop-up.This is the content of the
            pop-up.
          </p>
        </div>
        <button onClick={() => Data.changeNoticePopUp(false)}>x</button>
      </div>
    </div>
  );
};

export default NoticePopUp;
