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

function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {numPizzas} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza PizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please comback later :)</p>
      )}
    </main>
  );
}
function Pizza(props) {
  return (
    <ul className={`pizza ${props.PizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.PizzaObj.photoName} alt={props.PizzaObj.name}></img>
      <div>
        <h3>{props.PizzaObj.name}</h3>
        <p>{props.PizzaObj.ingredients}</p>
        <span>
          {props.PizzaObj.soldOut ? "SOLD OUT" : props.PizzaObj.price}
        </span>
      </div>
    </ul>
  );
}

function Footer() {
  const Hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = Hour >= openHour && Hour <= closeHour;

  //   if (Hour >= openHour && Hour <= closeHour) alert("We're currently Open");
  //   else alert("Sorry, We're closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00 Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're Welcome you between {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
}

// React v.18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
