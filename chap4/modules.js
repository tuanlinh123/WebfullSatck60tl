const express = require("express");
const usersRouter = express.Router();
const users = [
  { id: 1, name: "Nguyen Tuan Anh" },
  { id: 2, name: "Hoàng Tuan Linh" },
  { id: 3, name: "Nguyen Van Anh" }
];
usersRouter.get("/", function (req, res) {
  res.send(users);
});

usersRouter.post("/", function (req, res) {
  const newuser = {
    id: users[users.length-1].id+1,
    name : req.body.name
  };
  users.push(newuser);
  res.send(users);
});
usersRouter.put("/", function (req, res) {
  users.map((user) => {
    if (user.id == req.body.id) {
      return (user.name = req.body.name);
    }
  });
  res.send(users);
});

usersRouter.delete("/", function (req, res) {
  users.filter((user) => {
    if (user.id == req.body.id) {
      return user;
    }
  });
  res.send(users);
});

module.exports = usersRouter;
