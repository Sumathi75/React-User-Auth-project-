import { MailtrapClient } from "mailtrap";

// const { MailtrapClient } = require("mailtrap");

export const mailtrapClient = new MailtrapClient({
  token: "2f1168e4846aeeafb42e3bb596e66795",
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
// const recipients = [
//   {
//     email: "sumathisudalai10@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "Email Testing are awesome!",
//     html: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);