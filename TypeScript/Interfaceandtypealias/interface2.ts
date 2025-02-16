interface User2 {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function getUserData2(obj: User2): void {
  console.log(obj);
}

// Optional property
getUserData2({
  name: "Mohan",
  email: "mohan@email.com",
  password: "mohan@123",
});

//  Optional property but with value
getUserData2({
  name: "Mohan",
  email: "mohan@email.com",
  password: "mohan@123",
  gender: "male",
});
