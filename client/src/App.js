import "./App.css";
import Edit from "./components/Edit";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/user";
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exec patch="edit" element={<Edit />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
