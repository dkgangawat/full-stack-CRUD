import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { tableInfo } from "./utils/tableInfo";
import Edit from "./Edit";
import { UserContext } from "../context/user";

function Table() {
  const [state, setState] = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedUsers, setSelecteUser] = useState([]);
  const [deleteMessage, setdeleteMessage] = useState("Deleting...");

  const handleSelect = (id, item) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
      setSelecteUser(
        selectedUsers.filter((selectedUser) => selectedUser._id !== id)
      );
    } else {
      setSelectedIds([...selectedIds, id]);
      setSelecteUser([...selectedUsers, item]);
    }
  };

  const handleDelete = async (id) => {
    setShowPopup(true);
    setdeleteMessage("Deleting...");
    try {
      await axios.delete(`/data/items/${id}`);
      setShowPopup(false);
      setdeleteMessage("Deleted");
      // setState(state.data.filter((item) => item._id !== id));
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
      state.fetchData();
    } catch (error) {
      setShowPopup(false);
      setdeleteMessage("Error deleting item: " + error.message);
    }
  };
  const handleEdit = (item) => {
    setState({ ...state, userEditData: item, editPopUp: true });
  };
  useEffect(() => {
    setState({ ...state, dataToEmail: [...selectedUsers] });
    console.log(selectedUsers);
    // eslint-disable-next-line
  }, [selectedUsers]);
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100  px-4 hidden sm:table-header-group">
          <tr>
            <th className="px-4 py-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
                checked={selectedIds.length === state.data.length}
                onChange={() =>
                  setSelectedIds(
                    selectedIds.length === state.data.length
                      ? []
                      : state.data.map((item) => item.id)
                  )
                }
              />
            </th>
            {tableInfo[0].header.map((heading, index) => (
              <th className="px-4 py-2" key={index}>
                {" "}
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {state.data.map((item, index) => (
            <tr
              key={index}
              className="  flex flex-wrap mb-4  px-4 mt-2 sm:table-row"
            >
              <td className="border py-2 px-2 text-right sm:text-center w-full sm:w-auto  ">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  checked={selectedIds.includes(item._id)}
                  onChange={() => handleSelect(item._id, item)}
                />
              </td>
              <td className="border py-2 px-2 text-right sm:text-center w-full sm:w-auto   before:content-['s.no'] before:absolute before:left-6 before:font-bold  before:-z-10 sm:before:content-[] ">
                {index + 1}
              </td>
              <td className="border py-2 px-2 text-right sm:text-center w-full sm:w-auto   before:content-['name'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                {item.name}
              </td>
              <td className="border py-2 px-2 text-right sm:text-center w-full sm:w-auto   before:content-['phoneNumber'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                {item.phoneNumber}
              </td>
              <td className="border py-2 px-2 text-right sm:text-center w-full  sm:w-auto  before:content-['email'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                {item.email}
              </td>
              <td className="border py-2 px-2 text-right sm:text-center w-full sm:w-auto  before:content-['hobbies'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                {item.hobbies}
              </td>
              <td className="border py-2 px-2 text-right sm:text-center w-full sm:w-auto  before:content-['Action'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <p> {deleteMessage}</p>
          </div>
        </div>
      )}
      {state.editPopUp && <Edit />}
    </>
  );
}

export default Table;
