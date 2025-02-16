interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

function getUserData(obj: User): void {
  console.log(obj);
}

getUserData({
  id: 1,
  name: "Mohan",
  email: "mohan@email.com",
  password: "mohan@123",
  role: "user",
});
