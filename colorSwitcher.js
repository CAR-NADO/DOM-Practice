// const greenBtn = document.getElementById("green");
// const mainPage = document.getElementsByClassName("main")[0];
// greenBtn.addEventListener("click", function () {
//   mainPage.style.backgroundColor = "green";
//   greenBtn.style.border = "1px solid white";
// });

// const blackBtn = document.getElementById("black");
// blackBtn.addEventListener("click", function () {
//   mainPage.style.backgroundColor = "black";
//   mainPage.style.color = "white";
//   blackBtn.style.border = "1px solid white";
// });

// const handleOrangebtn = () => {
//   const orangeBtn = document.getElementById("orange");
//   mainPage.style.backgroundColor = "orange";
//   orangeBtn.style.border = "1px solid white";
// };

//  function handleBluebtn ()  {
//   const blueBtn = document.getElementById("blue");
//   mainPage.style.backgroundColor = "blue";
//   blueBtn.style.border = "1px solid white";
// };

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((val) => {
  val.addEventListener("click", function (e) {
    let id = e.target.id;
    if (id === "black") {
      body.style.color = "white";
    } else {
      body.style.color = "black";
    }
    body.style.backgroundColor = id;
    val.style.border = `1px solid white`;
  });
});
