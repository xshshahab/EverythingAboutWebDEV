interface User {
  paymentId: number;
  name: string;
  email: string;
  accountNumber: number;
}

export function getDetails(userDetails: User): void {
  console.log(userDetails.paymentId);
  console.log(userDetails.name);
  console.log(userDetails.email);
  console.log(userDetails.accountNumber);
}

export function addPayment(payment: string) {
  console.log("Adding Payment into your account", Number(payment));
  return;
}
