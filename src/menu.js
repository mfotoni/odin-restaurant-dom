// import "./menu-about.css";

export class createMenuPage {
  constructor() {}

  static menuItems() {
    const title = document.createElement("h1");
    title.innerText = "Our menu";

    const burguers = document.createElement("h2");
    burguers.innerText = "Burguers";

    const burguer1 = document.createElement("p");
    burguer1.innerText = "Bacon Cheese Burguer - 240 Tk";
    const burguer2 = document.createElement("p");
    burguer2.innerText = "BBQ Burguer - 320 Tk";
    const burguer3 = document.createElement("p");
    burguer3.innerText = "Chicken Burguer - 220 Tk";

    const pizzas = document.createElement("h2");
    pizzas.innerText = "Pizzas";

    const pizza1 = document.createElement("p");
    pizza1.innerText = "Vegie Pizza - 430 Tk";
    const pizza2 = document.createElement("p");
    pizza2.innerText = "Margherita Pizza - 400 Tk";
    const pizza3 = document.createElement("p");
    pizza3.innerText = "Pepperoni Pizza - 440 Tk";

    const drinks = document.createElement("h2");
    drinks.innerText = "Beverages";

    const drink1 = document.createElement("p");
    drink1.innerText = "Coca-Cola - 50 Tk";
    const drink2 = document.createElement("p");
    drink2.innerText = "Orange Juice - 40 Tk";
    const drink3 = document.createElement("p");
    drink3.innerText = "Iced Tea - 35 Tk";

    document
      .querySelector("#content")
      .append(
        burguers,
        burguer1,
        burguer2,
        burguer3,
        pizzas,
        pizza1,
        pizza2,
        pizza3,
        drinks,
        drink1,
        drink2,
        drink3
      );
  }
}
