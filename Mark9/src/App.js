import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  coding: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      desc: "introduction to programming in JavaScript focuses on writing real applications",
    },
    {
      name: "You Don't Know JS",
      rating: "5/5",
      desc: "the holy grail of JavaScript ",
    },
    {
      name: "Clean Code",
      rating: "4/5",
      desc: "Uncle bob's guide to write clean code",
    },
    {
      name: "Grokking Algorithms",
      rating: "4.5/5",
      desc: "An Illustrated Guide that teaches you how to apply common algorithms",
    },
  ],
  fiction: [
    {
      name: "The Alchemist",
      rating: "5/5",
      desc: "mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure",
    },
    {
      name: "Into Thin Air",
      rating: "4.5/5",
      desc: "A Personal Account of the Mt. Everest Disaster is a 1997",
    },
  ],
  finance: [
    {
      name: "Intelligent Investor",
      rating: "3.5/5",
      desc: "guide of strategies on how to successfully use value investing in the stock market",
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "3/5",
      desc: "guide to importance of financial literacy, financial independence and building wealth",
    },
    {
      name: "The Psychology of Money",
      rating: "5/5",
      desc: "explores how money moves around in an economy and how personal biases and the emotional factor play an important role in our financial decisions",
    },
  ],
  "self help": [
    {
      name: "Atomic Habit",
      rating: "3.5/5",
      desc: "pragmatic approaches toward habit building",
    },
    {
      name: "Eat that frog",
      rating: "3/5",
      desc: "21 Great Ways to Stop Procrastinating and Get More Done in Less Time",
    },
    {
      name: "Deep Work",
      rating: "5/5",
      desc: "teaches ability to focus without distraction on a cognitively demanding task",
    },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("coding");

  /**
   * Change handler for the genre buttons
   * @param {string} genre The genre to be selected
   */
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p> Checkout my favorite books. Select a genre to get started </p>
      {/* Shows all the books genre buttons */}
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
      {/* Shows all the books in the selected genre */}
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div style={{ fontSize: "larger" }}>{book.name}</div>
              <div>{book.desc}</div>
              <div>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
