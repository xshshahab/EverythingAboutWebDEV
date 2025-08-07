class User {
  constructor(fullName, username, email, address) {
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.role = "user";
    this.address = address;
  }

  write(text) {
    let h2 = document.createElement("h2");
    h2.textContent = `${this.username} :>  ${text}`;
    document.body.appendChild(h2);
  }
}

class Admin extends User {
  constructor(fullName, username, email, address) {
    super(fullName, username, email, address);

    this.role = "admin";
  }

  remove() {
    let h2 = document.querySelectorAll("h2");
    h2.forEach(function (elem) {
      elem.remove();
    });
  }
}

let user1 = new User(
  "Md. Shahabuddin",
  "xshshahab",
  "xshshahab@example.mail.com",
  "patna"
);

let user2 = new User(
  "Sita Kumari ",
  "kumari.sita",
  "kumarisita@exmail.com",
  "patna"
);
