var http = require("http");
var server = http.createServer((request, response) => {
  let url = request.url;
  let urlarr = url.split("/");
  let id = urlarr[2];
  if (id) {
    console.log("u have given id" + " " + id);
  } else {
    console.log("we will give u all user id");
  }
  response.write("hello vikas this side i made an API 🤗");
  response.end();
});
server.listen(3000, () => {
  console.log("server is running on 3000");
});
