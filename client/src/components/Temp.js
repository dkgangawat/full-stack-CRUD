import React, { useState } from "react";
import axios from "axios";

export default function HandleDelete({ id }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteClick = async () => {
    setShowPopup(true);

    try {
      await axios.delete(`/api/items/${id}`);
      setShowPopup(false);
      alert("Item deleted successfully!");
    } catch (error) {
      setShowPopup(false);
      alert("Error deleting item: " + error.message);
    }
  };

  return (
    <>
      <button onClick={handleDeleteClick}> Delete </button>{" "}
    </>
  );
}
