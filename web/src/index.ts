import { User } from "./models/User";

const user = new User({ id: 1, name: 'newer name', age: 0 });

user.on("save", () => {
  console.log(user);
});

user.save();
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
