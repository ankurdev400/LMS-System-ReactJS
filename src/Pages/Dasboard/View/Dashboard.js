import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DataContext } from "../../../Context/Context";
import NoticePopUp from "../../Notice/View/NoticePopUp";
import Sidebar from "../../../Components/Sidebar/SideBarPanel/Sidebar";
import EditBankDetails from "../../MyProfile/View/EditBankDetails";
import EditEmployeePopUp from "../../MyProfile/View/EditEmployeePopUp";

const Dashboard = () => {
  const Data = useContext(DataContext);
  return (
    <div className="dashboard">
      <Sidebar />
      <Outlet />

      {Data.displayNoticePopup && <NoticePopUp />}
      {Data.displayEditEmployee && <EditEmployeePopUp />}
      {Data.displayEditBankDetails && <EditBankDetails />}
    </div>
  );
};

export default Dashboard;
