//This is the js used in AgileButton Project

const buttons = document.getElementsByClassName("button");
const yesButton = document.getElementById("yes");
for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].id === "yes") {
    buttons[i].addEventListener("click", function (event) {
      event.preventDefault();
      const container = document.querySelector(".container");
      console.log("I love you too!");
      const img = `
        <img src="Photos/cat.jpg" class="cat-img">
      `;
      container.innerHTML = img;
    });
  }
  if (buttons[i].id === "no") {
    buttons[i].addEventListener("mouseover", function (event) {
      yesButton.style.display = "block";
      let max = 300;
      buttons[i].classList.add("move-button");
      const randomTop = Math.floor(Math.random() * max);
      const randomLeft = Math.floor(Math.random() * max);

      buttons[i].style.top = randomTop + "px";
      buttons[i].style.left = randomLeft + "px";

      console.log("Button Hovered!");
    });
  }
}
