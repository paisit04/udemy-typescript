import { UserList } from "./views/UserList";
import { User, UserProps } from "./models/User";

const users = User.buildUserCollection();

users.on('change', ()  => {
  const root = document.getElementById("root");
  if (root) {
    new UserList(root, users).render();
  } else {
    throw new Error("Root element not found");
  }
});

users.fetch();
