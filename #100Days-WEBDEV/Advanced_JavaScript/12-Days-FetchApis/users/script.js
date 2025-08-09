let usersData = [];
let centerIndex = 0;
let isAnimating = false; // prevent spam clicks

function createCard(user, position) {
  const isCenter = position === "center";
  const card = document.createElement("div");
  card.className = `card bg-gray-800 rounded-lg shadow-md p-6 ${
    isCenter ? "card-center" : "card-side"
  } ${position === "left" ? "left-card" : ""}`;

  if (isCenter) {
    // FULL DETAILS
    const img = document.createElement("img");
    img.className = "w-32 h-32 mx-auto mb-4 rounded-full ring-4 ring-blue-600";
    img.src = user.picture.large;

    const name = document.createElement("h2");
    name.className = "text-2xl font-bold text-center";
    name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

    const gender = document.createElement("p");
    gender.className = "text-center text-gray-400";
    gender.textContent = `Gender: ${user.gender}`;

    const email = document.createElement("p");
    email.className = "mt-2 text-center";
    email.textContent = `Email: ${user.email}`;

    const phone = document.createElement("p");
    phone.className = "mt-1 text-center";
    phone.textContent = `Phone: ${user.phone}`;

    const address = document.createElement("p");
    address.className = "mt-1 text-center";
    address.textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

    const dob = document.createElement("p");
    dob.className = "mt-1 text-center";
    dob.textContent = `DOB: ${new Date(
      user.dob.date
    ).toLocaleDateString()} (Age: ${user.dob.age})`;

    card.append(img, name, gender, email, phone, address, dob);
  } else {
    // PREVIEW CARD
    const img = document.createElement("img");
    img.className = "w-20 h-20 mx-auto mb-2 rounded-full ring-2 ring-blue-600";
    img.src = user.picture.medium;

    const name = document.createElement("h3");
    name.className = "text-lg font-semibold text-center";
    name.textContent = `${user.name.first} ${user.name.last}`;

    card.append(img, name);
    card.addEventListener("click", () => {
      if (isAnimating) return;
      isAnimating = true;

      if (position === "left") {
        centerIndex = (centerIndex - 1 + usersData.length) % usersData.length;
      } else {
        centerIndex = (centerIndex + 1) % usersData.length;
      }
      renderCards();

      setTimeout(() => {
        isAnimating = false;
      }, 600);
    });
  }

  return card;
}

function renderCards() {
  const container = document.getElementById("users");
  container.innerHTML = "";

  const leftIndex = (centerIndex - 1 + usersData.length) % usersData.length;
  const rightIndex = (centerIndex + 1) % usersData.length;

  container.appendChild(createCard(usersData[leftIndex], "left"));
  container.appendChild(createCard(usersData[centerIndex], "center"));
  container.appendChild(createCard(usersData[rightIndex], "right"));
}

fetch("https://randomuser.me/api/?results=7")
  .then((res) => res.json())
  .then((data) => {
    usersData = data.results;
    renderCards();
  });
