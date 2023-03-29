import React, { useState } from "react";
import axios from "axios";

function CreateUserForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/create", {
        name,
        phoneNumber,
        email,
        hobbies,
      });
    } catch (err) {
      console.log(err);
    }
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="flex justify-end mt-4 mb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleOpenForm}
        >
          Create User{" "}
        </button>{" "}
      </div>{" "}
      {isFormOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 flex align-middle">
          <div className="m-auto sm:w-1/2 w-3/4  bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4"> Create User </h2>{" "}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name{" "}
                </label>{" "}
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />{" "}
              </div>{" "}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number{" "}
                </label>{" "}
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />{" "}
              </div>{" "}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email{" "}
                </label>{" "}
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />{" "}
              </div>{" "}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="hobbies"
                >
                  Hobbies{" "}
                </label>{" "}
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="hobbies"
                  placeholder="Reading, Playing Tennis, Watching Movies"
                  value={hobbies}
                  onChange={(event) => setHobbies(event.target.value)}
                ></textarea>{" "}
              </div>{" "}
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  type="submit"
                >
                  Save{" "}
                </button>{" "}
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCloseForm}
                  type="button"
                >
                  Cancel{" "}
                </button>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </>
  );
}

export default CreateUserForm;
