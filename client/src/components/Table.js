import React, { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "555-555-5555",
      email: "john.doe@example.com",
      hobbies: "Sports, Music",
    },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleteMessage, setdeleteMessage] = useState("Deleting...");
  const fetchData = async () => {
    const res = await axios.get("/data");
    setData(res.data);
    console.log(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleDelete = async (id) => {
    setShowPopup(true);
    setdeleteMessage("Deleting...");
    try {
      await axios.delete(`/data/items/${id}`);
      setShowPopup(false);
      setdeleteMessage("Deleted");
      setData(data.filter((item) => item._id !== id));
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } catch (error) {
      setShowPopup(false);
      setdeleteMessage("Error deleting item: " + error.message);
    }
  };
  const handleEdit = async (id) => {
    try {
      const res = await axios.post(`/data/update/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-100 hidden sm:table-auto">
          <tr>
            <th className="px-4 py-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
                checked={selectedIds.length === data.length}
                onChange={() =>
                  setSelectedIds(
                    selectedIds.length === data.length
                      ? []
                      : data.map((item) => item.id)
                  )
                }
              />{" "}
            </th>{" "}
            <th className="px-4 py-2"> S.No </th>{" "}
            <th className="px-4 py-2"> Name </th>{" "}
            <th className="px-4 py-2"> Phone Number </th>{" "}
            <th className="px-4 py-2"> Email </th>{" "}
            <th className="px-4 py-2"> Hobbies </th>{" "}
            <th className="px-4 py-2"> Action </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {data.map((item, index) => (
            <tr
              key={index}
              className="  flex flex-wrap mb-4  px-4 mt-2 sm:table-auto "
            >
              <td className="border py-2 px-2 text-right sm:text-center w-full  ">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  checked={selectedIds.includes(item._id)}
                  onChange={() => handleSelect(item._id)}
                />{" "}
              </td>{" "}
              <td className="border py-2 px-2 text-right sm:text-center w-full before:content-['s.no'] before:absolute before:left-6 before:font-bold  before:-z-10 sm:before:content-[] ">
                {" "}
                {index + 1}{" "}
              </td>{" "}
              <td className="border py-2 px-2 text-right sm:text-center w-full before:content-['name'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                {" "}
                {item.name}{" "}
              </td>{" "}
              <td className="border py-2 px-2 text-right sm:text-center w-full before:content-['phoneNumber'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                {" "}
                {item.phoneNumber}{" "}
              </td>{" "}
              <td className="border py-2 px-2 text-right sm:text-center w-full before:content-['email'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                {" "}
                {item.email}{" "}
              </td>{" "}
              <td className="border py-2 px-2 text-right sm:text-center w-full before:content-['hobbies'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                {" "}
                {item.hobbies}{" "}
              </td>{" "}
              <td className="border py-2 px-2 text-right sm:text-center w-full before:content-['Action'] before:absolute before:left-6 before:font-bold before:-z-10 sm:before:content-[]">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEdit(item._id)}
                >
                  Edit{" "}
                </button>{" "}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete{" "}
                </button>{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>{" "}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <p> Deleting... </p>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </>
  );
}

export default Table;
