import "./menu-about.css";

export class createAboutPage {
  constructor() {}

  static about() {
    const title = document.createElement("h1");
    title.innerText = "About us";

    const description = document.createElement("p");
    description.innerText =
      "At Odin Eatery, we serve authentic hand-tossed pizzas and gourmet sandwiches made with fresh, quality ingredients. Our passion is creating delicious meals that bring the community together.";

    const social = document.createElement("p");
    social.innerText =
      "Follow us on social media for daily specials and updates! Visit us today and taste the Odin difference.";

    const contacts = document.createElement("p");
    contacts.innerText =
      "On instagram @OdinRestaurant and telephone: (55)9999-9999";

    document
      .querySelector("#content")
      .append(title, description, social, contacts);
  }
}
