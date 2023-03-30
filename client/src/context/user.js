import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";
const UserContext = createContext([{}, () => {}]);
const UserContextProvider = (props) => {
  const [state, setState] = useState({
    data: [],
    fetchData: () => {
      axios.get("/data").then((res) => {
        setState({ ...state, data: res.data });
      });
    },
    userEditData: {},
    editPopUp: false,
    formPopUp: false,
    dataToEmail: [],
  });
  useState(() => {
    state.fetchData();
  }, []);
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextProvider };
