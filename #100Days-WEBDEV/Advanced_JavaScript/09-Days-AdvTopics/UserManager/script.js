let form = document.querySelector("form");
let username = document.querySelector("#username");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let profile = document.querySelector("#profile");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (event) {
    event.preventDefault();
    this.addUser();
  },
  addUser: function () {
    const user = {
      id: Date.now(),
      username: username.value.trim(),
      role: role.value.trim(),
      bio: bio.value.trim(),
      profile: profile.value.trim(),
    };

    if (!user.username || !user.role || !user.bio || !user.profile) return;

    this.users.push(user);
    form.reset();
    this.renderUI();
  },
  renderUI: function () {
    const container = document.querySelector("#main-card");
    container.innerHTML = "";

    this.users.forEach((usr) => {
      let card = document.createElement("div");
      card.classList.add("card");

      let img = document.createElement("img");
      img.src = usr.profile;
      img.alt = `${usr.username}'s profile picture`;
      img.classList.add("card-image");

      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      let nameElement = document.createElement("h3");
      nameElement.textContent = usr.username;

      let roleElement = document.createElement("p");
      roleElement.textContent = `Role: ${usr.role}`;

      let bioElement = document.createElement("p");
      bioElement.textContent = usr.bio;

      let removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      removeBtn.innerHTML = `<i class="fas fa-trash"></i>`;
      removeBtn.title = "Remove User";
      removeBtn.onclick = () => this.removeUser(usr.id);

      cardBody.appendChild(nameElement);
      cardBody.appendChild(roleElement);
      cardBody.appendChild(bioElement);

      card.appendChild(img);
      card.appendChild(cardBody);
      card.appendChild(removeBtn);

      container.appendChild(card);
    });
  },
  removeUser: function (id) {
    this.users = this.users.filter((user) => user.id !== id);
    this.renderUI();
  },
};

userManager.init();
