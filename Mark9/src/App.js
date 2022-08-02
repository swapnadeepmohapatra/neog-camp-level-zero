import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  coding: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
    { name: "Clean Code", rating: "3.5/5" },
    { name: "Grokking Algorithms", rating: "3.5/5" },
  ],
  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
    },
  ],
  finance: [
    {
      name: "Intelligent Investor",
      rating: "3.5/5",
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "3/5",
    },
    {
      name: "The Psychology of Money",
      rating: "5/5",
    },
  ],
  "self help": [
    {
      name: "Atomic Habit",
      rating: "3.5/5",
    },
    {
      name: "Eat that frog",
      rating: "3/5",
    },
    {
      name: "Alchemist",
      rating: "5/5",
    },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("coding");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p> Checkout my favorite books. Select a genre to get started </p>
      <div>
        {Object.keys(bookDB).map((genre, i) => (
          <button
            key={i}
            onClick={() => genreClickHandler(genre)}
            className={`${genre === selectedGenre ? "active" : ""}`}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li key={book.name}>
              <div style={{ fontSize: "larger" }}>{book.name}</div>
              <div style={{ fontSize: "smaller" }}>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
