import { User } from "./models/User";

const user = User.buildUser({ id: 1 });

user.on("change", () => {
  console.log(user);
});

user.fetch();
// user.save();

// user.on("change", () => {
//   console.log("Change #2");
// });
// user.on("save", () => {
//   console.log("Save was triggered");
// });

// user.trigger("change");
// user.trigger("save");
// user.trigger("abc");
