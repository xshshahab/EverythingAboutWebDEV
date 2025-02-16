type User = {
  name: string;
  email: string;
};

type Admin = User & {
  role: string;
  getUserDetails(user: string): void;
};

function allUserDetails(adm: Admin) {
  adm.getUserDetails;
}
