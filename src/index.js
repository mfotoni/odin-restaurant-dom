import "./style.css";
// import homeImage from "./home-image.png";
import { createHomePage } from "./homepage.js";
import { createMenuPage } from "./menu.js";
import { createAboutPage } from "./about.js";

class LoadContent {
  constructor() {}

  static clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
  }

  // static initialLoad() {
  //   document.getElementById("content").appendChild(createHomePage.render());
  // }

  static pageSwitch() {
    const navButtons = document.querySelectorAll(".nav-buttons button");

    navButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const pageName = e.target.innerText.toLowerCase();

        LoadContent.clearContent();

        switch (pageName) {
          case "home":
            createHomePage.render();
            break;
          case "menu":
            createMenuPage.menuItems();
            break;
          case "about":
            createAboutPage.about();
            break;
        }
      });
    });
  }
}

createHomePage.render();
LoadContent.pageSwitch();
