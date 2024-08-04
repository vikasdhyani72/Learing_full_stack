function clickMe(state) {
  if (state == "on") {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("myImg").setAttribute("src", "bulb2.webp");
  } else
    [
      (document.body.style.backgroundColor = "black"),
      document.getElementById("myImg").setAttribute("src", "bulb1.png"),
    ];
}