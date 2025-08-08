function profileLekarAao(username, cbFnc) {
  setTimeout(() => {
    cbFnc({
      _id: 121,
      username,
      age: 21,
      email: "xshshahab@xdev.com",
    });
  }, 2000);
}

function takeAllPosts(id, cbFNC) {
  setTimeout(() => {
    cbFNC({
      _id: id,
      posts: [
        {
          id: 1,
          data: "JavaScript is most loving language.",
        },
        {
          id: 2,
          data: "In this Js Series you found all codes",
        },
      ],
    });
  }, 3000);
}

profileLekarAao("xshshahab", function (userData) {
  console.log(userData);

  takeAllPosts(userData._id, function (data) {
    console.log("Posts: ", data);
  });
});
