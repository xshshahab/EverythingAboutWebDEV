document.querySelector("#userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values from form
  const username = document.querySelector("#username").value;
  const age = document.querySelector("#age").value;
  const email = document.querySelector("#email").value;
  const profilePic =
    document.querySelector("#profilePic").value ||
    "https://via.placeholder.com/150";

  // Create a new card dynamically
  const card = document.createElement("div");
  card.classList.add("card");

  // Create profile image section
  const profile = document.createElement("div");
  profile.classList.add("profile");

  const img = document.createElement("img");
  img.setAttribute("src", profilePic);
  profile.appendChild(img);

  // Create username and age section
  const flex = document.createElement("div");
  flex.setAttribute("id", "flex");

  const h3 = document.createElement("h3");
  h3.textContent = username;

  const p = document.createElement("p");
  p.textContent = `Age: ${age}`;

  flex.appendChild(h3);
  flex.appendChild(p);

  // Create email and description section
  const info = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = email;

  const h5 = document.createElement("h5");
  h5.textContent = "This card was dynamically created using your input.";

  info.appendChild(h4);
  info.appendChild(h5);

  // Append profile and info sections to the card
  card.appendChild(profile);
  card.appendChild(flex);
  card.appendChild(info);

  // Append the new card to the profiles container
  document.querySelector("#profilesContainer").appendChild(card);

  // Optionally, reset the form
  document.querySelector("#userForm").reset();
});
