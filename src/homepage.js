import homeImage from "./home-image.png";

export class createHomePage {
  constructor() {}

  static callText() {
    // const content = document.getElementById("content");
    const divCall = document.createElement("div");
    const h1Call = document.createElement("h1");
    const buttonCall = document.createElement("button");

    // content.replaceChild();

    divCall.classList.add("call");
    buttonCall.classList.add("view-menu");

    h1Call.innerText =
      "Welcome to Odin Restaurant Where Flavor Meets Excellence!";
    buttonCall.innerText = "View Menu";

    divCall.appendChild(h1Call);
    divCall.appendChild(buttonCall);

    document.querySelector("#content").appendChild(divCall);
  }

  static createImageDiv() {
    const landPageImage = document.createElement("img");

    landPageImage.classList.add("home-image");

    landPageImage.src = homeImage;

    document.querySelector(".call").appendChild(landPageImage);
  }

  static createInstructionsDiv() {
    const instructionsDiv = document.createElement("div");
    const instructionsH1 = document.createElement("h1");
    const instructionsP1 = document.createElement("p");
    const instructionsP2 = document.createElement("p");
    const instructionsButton = document.createElement("button");

    instructionsDiv.classList.add("instructions");
    // instructionsH1.classList.add("instructions-title");
    // instructionsP1.classList.add("instruction-text");
    // instructionsP2.classList.add("instruction-text");
    instructionsButton.classList.add("view-menu");

    instructionsH1.innerText = "A healthier way has now a sit at the table";
    instructionsP1.innerText =
      "Ordering is a browse, select, and pay securely - all from the confort";
    instructionsP2.innerText = "Save now with special promotions and discouts";
    instructionsButton.innerText = "View Menu";

    instructionsDiv.appendChild(instructionsH1);
    instructionsDiv.appendChild(instructionsP1);
    instructionsDiv.appendChild(instructionsP2);
    instructionsDiv.appendChild(instructionsButton);
    document.querySelector("#content").appendChild(instructionsDiv);
  }

  static render() {
    this.callText();
    this.createImageDiv();
    this.createInstructionsDiv();
  }
}
