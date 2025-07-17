interface User<T> {
  name: string;
  age: number;
  email: string;
  key: T;
}

function handleUser(obj: User<string>) {}

handleUser({
  name: "Kiran Kumari",
  age: 21,
  email: "kiran@female.com",
  key: "P12ved2@1",
});
