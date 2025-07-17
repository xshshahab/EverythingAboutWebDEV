"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var payment_1 = require("./payment");
(0, payment_1.addPayment)("12000");
(0, payment_1.getDetails)({
    paymentId: 12,
    name: "Suresh Kumar Ayyar",
    email: "suresh@kumarayyar.gmail.com",
    accountNumber: 120001220225,
});
