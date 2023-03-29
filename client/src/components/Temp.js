import React, { useState } from "react";

function EditTablePage() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "555-555-5555",
      email: "john.doe@example.com",
      hobbies: "Sports, Music",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "555-555-5555",
      email: "jane.smith@example.com",
      hobbies: "Reading, Painting",
    },
  ]);

  const handleEdit = (id, field, value) => {
    const newData = [...data];
    const index = newData.findIndex((item) => item.id === id);
    newData[index][field] = value;
    setData(newData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleEdit(item.id, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.phone}
                  onChange={(e) => handleEdit(item.id, "phone", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.email}
                  onChange={(e) => handleEdit(item.id, "email", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.hobbies}
                  onChange={(e) =>
                    handleEdit(item.id, "hobbies", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EditTablePage;
