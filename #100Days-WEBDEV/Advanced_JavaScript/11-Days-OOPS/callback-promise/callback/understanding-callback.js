function profileLekarAao(username, cbFnc) {
  setTimeout(() => {
    cbFnc({
      username,
      age: 21,
      email: "xshshahab@xdev.com",
    });
  }, 2000);
}

profileLekarAao("xshshahab", function (userData) {
  console.log(userData);
});
