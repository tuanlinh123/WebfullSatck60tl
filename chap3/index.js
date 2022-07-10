const fs = require("fs");
const express = require("express");

let rawdata = fs.readFileSync("tuanlinh.json");
let infor = JSON.parse(rawdata);

console.log(infor);

const app = express();

app.get("/index", (req, res) => {
  res.send("<h1>trang chủ<h1>");
});
app.get("/about", (req, res) => {
  res.send(`<h1><li>Name:${infor.name}
    <li>Age:${infor.age}<li>Work:${infor.job}<li>Sex:${infor.sex}<h1>`);
});
app.use('*', (req, res) => {
    res.send("<h1>Đường dẫn này không tồn tại<h1>");
})
app.listen(5000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Sever start");
});
