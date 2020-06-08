import { User } from "./models/User";

const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();

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
