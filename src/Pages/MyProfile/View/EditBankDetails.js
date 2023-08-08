// import React, { useContext } from "react";
// import { DataContext } from "../../../Context/Context";
// import { Formik } from "formik";
// import { AiOutlineClose } from "react-icons/ai";
// import { editEmployeeBankValidation } from "../../../Components/Validation/Validation";

// const EditBankDetails = () => {
//   const Data = useContext(DataContext);

//   return (
//     <div className="popup-emp-edit-bank">
//       <div className="popup-content">
//         <div className="form">
//           <button onClick={() => Data.changeEditBank(false)}>
//             <AiOutlineClose />
//           </button>
//           <Formik
//             validationSchema={editEmployeeBankValidation}
//             initialValues={{
//               fullName: "",
//               bankName: "",
//               ifscCode: "",
//               accountNumber: "",
//             }}
//             onSubmit={(values, { resetForm }) => {
//               alert(JSON.stringify(values));
//               resetForm({ values: "" });
//             }}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleChange,
//               handleBlur,
//               handleSubmit,
//             }) => (
//               <form noValidate onSubmit={handleSubmit}>
//                 <div className="input-container">
//                   <label htmlFor="fullName">Full Name</label>
//                   <input
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.fullName}
//                     placeholder="Enter Full Name"
//                     className="form-control inp_text"
//                   />
//                   <p className="error">
//                     {errors.fullName && touched.fullName && errors.fullName}
//                   </p>
//                 </div>

//                 <div className="input-container">
//                   <label htmlFor="bankName">Bank Name</label>
//                   <input
//                     id="bankName"
//                     name="bankName"
//                     type="text"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.bankName}
//                     placeholder="Enter Bank Name"
//                     className="form-control inp_text"
//                   />
//                   <p className="error">
//                     {errors.bankName && touched.bankName && errors.bankName}
//                   </p>
//                 </div>

//                 <div className="input-container">
//                   <label htmlFor="ifscCode">IFSC Code</label>
//                   <input
//                     id="ifscCode"
//                     name="ifscCode"
//                     type="text"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.ifscCode}
//                   />
//                   <p className="error">
//                     {errors.ifscCode && touched.ifscCode && errors.ifscCode}
//                   </p>
//                 </div>

//                 <div className="input-container">
//                   <label htmlFor="accountNumber">Account Number</label>
//                   <input
//                     id="accountNumber"
//                     name="accountNumber"
//                     type="text"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.accountNumber}
//                   />
//                   <p className="error">
//                     {errors.accountNumber &&
//                       touched.accountNumber &&
//                       errors.accountNumber}
//                   </p>
//                 </div>

//                 <button type="submit">Submit</button>
//               </form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default EditBankDetails;
import React, { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { Formik } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import { editEmployeeBankValidation } from "../../../Components/Validation/Validation";

const EditBankDetails = () => {
  const Data = useContext(DataContext);

  const handleAccountNumberChange = (e, formik) => {
    const { name, value } = e.target;
    const formattedValue = value
      .replace(/[^0-9]/g, "")
      .replace(/(.{4})/g, "$1-")
      .slice(0, 19)
      .replace(/-$/, "");

    formik.setFieldValue(name, formattedValue);
  };

  return (
    <div className="popup-emp-edit-bank">
      <div className="popup-content">
        <div className="form">
          <button
            className="close-btn-edit"
            onClick={() => Data.changeEditBank(false)}
          >
            <AiOutlineClose />
          </button>
          <Formik
            validationSchema={editEmployeeBankValidation}
            initialValues={{
              fullName: "",
              bankName: "",
              ifscCode: "",
              accountNumber: "",
            }}
            onSubmit={(values, { resetForm }) => {
              alert(JSON.stringify(values));
              resetForm({ values: "" });
            }}
          >
            {(formik) => (
              <form noValidate onSubmit={formik.handleSubmit}>
                <div className="input-container">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    placeholder="Enter Full Name"
                    className="form-control inp_text"
                  />
                  <p className="error">
                    {formik.touched.fullName && formik.errors.fullName}
                  </p>
                </div>

                <div className="input-container">
                  <label htmlFor="bankName">Bank Name</label>
                  <input
                    id="bankName"
                    name="bankName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bankName}
                    placeholder="Enter Bank Name"
                    className="form-control inp_text"
                  />
                  <p className="error">
                    {formik.touched.bankName && formik.errors.bankName}
                  </p>
                </div>

                <div className="input-container">
                  <label htmlFor="ifscCode">IFSC Code</label>
                  <input
                    id="ifscCode"
                    name="ifscCode"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ifscCode}
                    placeholder="Enter IFSC Code"
                    className="form-control inp_text"
                  />
                  <p className="error">
                    {formik.touched.ifscCode && formik.errors.ifscCode}
                  </p>
                </div>

                <div className="input-container">
                  <label htmlFor="accountNumber">Account Number</label>
                  <input
                    id="accountNumber"
                    name="accountNumber"
                    type="text"
                    onChange={(e) => handleAccountNumberChange(e, formik)}
                    onBlur={formik.handleBlur}
                    value={formik.values.accountNumber}
                    placeholder="Enter Account Number"
                    className="form-control inp_text"
                  />
                  <p className="error">
                    {formik.touched.accountNumber &&
                      formik.errors.accountNumber}
                  </p>
                </div>
                <div className="form-btn-cont">
                  <button type="submit">Send For Review</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditBankDetails;
