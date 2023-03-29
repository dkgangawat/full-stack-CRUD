import emailjs from "emailjs-com";
import { FormateDataintoTable } from "./formateDataintoTable";

export function sendEmail(dataArray) {
  const data = {
    table: FormateDataintoTable(dataArray),
  };

  emailjs
    .send("service_jojbayt", "template_o4t86do", data, "sGkbUihqwexCq2uxc")
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
