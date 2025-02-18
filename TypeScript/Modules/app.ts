import { addPayment, getDetails } from "./payment";

addPayment("12000");

getDetails({
  paymentId: 12,
  name: "Suresh Kumar Ayyar",
  email: "suresh@kumarayyar.gmail.com",
  accountNumber: 120001220225,
});
