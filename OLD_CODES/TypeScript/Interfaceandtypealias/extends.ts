interface User {
  name: string;
  email: string;
  password: string;
}

interface Admin extends User {
  role: string;
  isAdmin: boolean;
}

function understandingExtends(user: Admin) {
  user.email;
}
