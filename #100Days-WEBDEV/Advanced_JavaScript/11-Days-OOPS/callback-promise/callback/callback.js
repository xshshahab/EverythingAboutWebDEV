function profileLekarAao(username, cbFnc) {
  console.log("Fetching user data...");
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
  console.log("Fetching all posts...");
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

function fetchAllSavedPosts(userId, cbFnc) {
  console.log("Fetching all saved posts...");
  setTimeout(() => {
    cbFnc({
      userId,
      savedPosts: [
        {
          id: 101,
          data: "This is a saved post about callbacks.",
        },
        {
          id: 102,
          data: "Saved post about async JavaScript.",
        },
      ],
    });
  }, 1500);
}

// Main execution
profileLekarAao("xshshahab", function (userData) {
  console.log("User Data:", userData);

  takeAllPosts(userData._id, function (postData) {
    console.log("Posts:", postData);

    // Call the saved posts function here
    fetchAllSavedPosts(userData._id, function (savedPostsData) {
      console.log("Saved Posts:", savedPostsData);
    });
  });
});
