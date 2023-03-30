import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { sendEmail } from "./email/sendMail";

const ButtonGroup = () => {
  const [state, setSate] = useContext(UserContext);
  const handleOpenForm = () => {
    setSate({ ...state, formPopUp: true });
  };
  return (
    <>
      <div className="flex justify-end mt-4 mb-2 gap-1 px-4 sm:px-0">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            sendEmail(state.dataToEmail);
          }}
        >
          Send Data to email
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleOpenForm}
        >
          Create User
        </button>
      </div>
    </>
  );
};

export default ButtonGroup;
