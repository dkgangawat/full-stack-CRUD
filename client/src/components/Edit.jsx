import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import axios from "axios";
const Edit = (props) => {
  const [state, setState] = useContext(UserContext);
  const { name, email, phoneNumber, hobbies } = state.userEditData;
  const [editedUser, setEditedUser] = useState({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    hobbies: hobbies,
  });

  async function handleSave(e) {
    try {
      e.target.disabled = true;
      const id = state.userEditData._id;
      await axios.put(`/data/update/${id}`, editedUser);
      alert("user Data updated");
      setState({ ...state, editPopUp: false });
      e.target.disabled = false;
      state.fetchData();
    } catch (e) {
      console.log(e);
      e.target.disabled = false;
    }
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Edit User Data
                    </h3>
                    <div className="mt-2">
                      <form className="space-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={editedUser.name}
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  name: e.target.value,
                                })
                              }
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone Number
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              value={editedUser.phoneNumber}
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  phoneNumber: e.target.value,
                                })
                              }
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={editedUser.email}
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  email: e.target.value,
                                })
                              }
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>{" "}
                        <div>
                          <label
                            htmlFor="hobbies"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Hobbies
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="hobbies"
                              id="hobbies"
                              value={editedUser.hobbies}
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  hobbies: e.target.value,
                                })
                              }
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setState({ ...state, editPopUp: false })}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
