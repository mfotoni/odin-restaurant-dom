import "./style.css";
import homeImage from "./home-image.png";

const landPageImage = document.createElement("img");
landPageImage.src = homeImage;
document.querySelector(".call").appendChild(landPageImage);
landPageImage.classList.add("home-image");
