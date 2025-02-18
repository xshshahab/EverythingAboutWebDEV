"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetails = getDetails;
exports.addPayment = addPayment;
function getDetails(userDetails) {
    console.log(userDetails.paymentId);
    console.log(userDetails.name);
    console.log(userDetails.email);
    console.log(userDetails.accountNumber);
}
function addPayment(payment) {
    console.log("Adding Payment into your account", Number(payment));
    return;
}
