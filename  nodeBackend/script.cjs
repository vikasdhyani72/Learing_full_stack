const fs = require("fs");
fs.file("text.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});
