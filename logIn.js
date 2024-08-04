let personDetail = {
  p_email: "vikas@123",
  p_password: "vikas123",
};
let emailEl = document.getElementById("email");
let passEl = document.getElementById("pass");
let logEl = document.getElementById("log");
logEl.addEventListener("click", function () {
  let email = emailEl.value;
  let password = passEl.value;

  if (personDetail.p_email === email && personDetail.p_password === password) {
    alert("you are logged in");
  } else {
    alert("wrong email or password");
  }
});
