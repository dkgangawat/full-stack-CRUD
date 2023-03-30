import emailjs from "emailjs-com";
import { FormateDataintoTable } from "./formateDataintoTable";

export function sendEmail(dataArray) {
  const data = {
    table: FormateDataintoTable(dataArray),
  };

  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(
      (result) => {
        alert("mail sent");
        console.log(result);
      },
      (error) => {
        alert("something went wrong");
        console.log(error);
      }
    );
  console.log(data.table);
  console.log(dataArray);
}
