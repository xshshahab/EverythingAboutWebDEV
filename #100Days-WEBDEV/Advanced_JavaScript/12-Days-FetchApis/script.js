let url = "https://randomuser.me/api/";

/*
  When you fetch the URL, you get a response.
  The response contains data in the form of a ReadableStream, so you need to convert it into JSON.
  After converting, you get the actual data in the next ".then()".
  You also handle both the data and any potential errors gracefully.
*/

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR! : ", error));
