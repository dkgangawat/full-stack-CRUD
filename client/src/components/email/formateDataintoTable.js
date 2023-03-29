export function FormateDataintoTable(dataArray) {
  console.log(dataArray);
  const table = `

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          ${dataArray.map((item) => {
            return `<tr key=${item._id}>
                <td>${item._id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phoneNumber}</td>
                <td>${item.hobbies}</td>
              </tr>`;
          })}
        </tbody>
        </table>
  `;
  return table;
}
