import "./App.css";
import Edit from "./components/Edit";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route exec patch="edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
