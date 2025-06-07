import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) {
  //   return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <p>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</p>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzasCount = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzasCount > 0 ? (
        <>
          <p>
            {`Authentic Italian cuisine. ${pizzasCount} creative dishes to chose from. All from
            stone oven, all organic, all delicious.`}
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're currently working on our menu, please come back later :)</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const starting = 12;
  const ending = 19;
  const isOpen = hour >= starting && hour <= ending;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order ending={ending} />
      ) : (
        <p>
          We're happy to welcome you between {starting}:00 and {ending}:00 :)
        </p>
      )}
    </footer>
  );
}

function Order({ ending }) {
  return (
    <div className="order">
      <p>
        We're currently open until {ending}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Footer />
  </React.StrictMode>
);
