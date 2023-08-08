import React, { createContext, useState } from "react";

export const DataContext = createContext();
const Context = (props) => {
  const [displayAttendence, setDisplayAttendence] = useState(false);
  const [displayNoticePopup, setDisplayNoticePopup] = useState(false);
  const [displayNotice, setDisplayNotice] = useState(false);
  const [displayMyTask, setDisplayMyTask] = useState(false);
  const [displayMyResources, setDisplayMyResources] = useState(false);
  const [displayDateJournal, setDisplayDateJournal] = useState(false);
  const [displayEditEmployee, setDisplayEditEmployee] = useState(false);
  const [displayEditBankDetails, setDisplayEditBankDetails] = useState(false);
  const [displayMyProjects, setDisplayMyProjects] = useState(false);
  const [disaplyMainTaskPage, setDisplayMainTaskPage] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemSubtaskTimeEstimation, setSelectedItemSubtaskTimeEstimation] = useState(null);
console.log(selectedItemSubtaskTimeEstimation,'dasdasd')
  //modal
  const [showModal, setShowModal] = useState(false);
  const [modalValue, setModalValue] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const saveModalValue = () => {
    // Handle saving the modal value
    closeModal();
  };

  const handleInputChange = (e) => {
    setModalValue(e.target.value);
  };




// subtask modal time estimation
  const [showModalSubtask, setShowModalSubtask] = useState(false);
  const [modalValueSubtask, setModalValueSubtask] = useState("");

  const openModalSubtask = () => {
    setShowModalSubtask(true);
  };

  const closeModalSubtask = () => {
    setShowModalSubtask(false);
  };

  const saveModalValueSubtask = () => {
    // Handle saving the modal value
    closeModalSubtask();
  };

  const handleInputChangeSubtask = (e) => {
    setModalValueSubtask(e.target.value);
  };


  
  return (
    <DataContext.Provider
      value={{
        selectedItemSubtaskTimeEstimation,
        setSelectedItemSubtaskTimeEstimation,
        showModalSubtask,
        setShowModalSubtask,
        setModalValueSubtask,
        closeModalSubtask,
        saveModalValueSubtask,
        handleInputChangeSubtask,
        openModalSubtask,
        modalValueSubtask,
        displayAttendence,
        displayNotice,
        displayNoticePopup,
        displayMyTask,
        displayDateJournal,
        displayEditEmployee,
        displayEditBankDetails,
        displayMyProjects,
        disaplyMainTaskPage,
        showModal,
        modalValue,
        selectedItem,
        setSelectedItem,
        openModal,
        closeModal,
        saveModalValue,
        handleInputChange,
        setModalValue,
        displayMyResources,
        changeMyResources: (data) => {
          setDisplayMyResources(data);
        },
        changeAttendence: (data) => {
          setDisplayAttendence(data);
        },
        changeNotice: (data) => {
          setDisplayNotice(data);
        },
        changeNoticePopUp: (data) => {
          setDisplayNoticePopup(data);
        },
        changeMyTask: (data) => {
          setDisplayMyTask(data);
        },
        changeDateJournal: (data) => {
          setDisplayDateJournal(data);
        },
        changeEditEmployee: (data) => {
          setDisplayEditEmployee(data);
        },
        changeEditBank: (data) => {
          setDisplayEditBankDetails(data);
        },
        changeMyProjects: (data) => {
          setDisplayMyProjects(data);
        },
        changeMytaskRender: (data) => {
          setDisplayMainTaskPage(data);
        },
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default Context;
