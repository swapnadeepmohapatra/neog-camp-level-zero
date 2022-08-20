import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
};

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  /**
   * Change handler for the emoji input field
   * Sets the selected emoji to the input emoji.
   * Sets the meaning to the emoji's meaning in the dictionary.
   * @param {ChangeEvent} event
   */
  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setSelectedEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failed to recognise this emoji");
    }
  }

  /**
   * Click handler for the emoji buttons.
   * Sets the selected emoji to the input emoji.
   * Sets the meaning to the emoji's meaning in the dictionary.
   * @param {String} inputEmoji
   */
  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
    setSelectedEmoji(inputEmoji);
  }

  return (
    <div className="App">
      <h1>Emoticon Interpreter</h1>
      <input
        onChange={changeHandler}
        value={selectedEmoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%",
        }}
      />
      <h2>{selectedEmoji}</h2>
      <h3>{meaning}</h3>
      {Object.keys(emojiDictionary).map((emoji, i) => (
        <span
          key={i}
          onClick={() => emojiClickHandler(emoji)}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
            cursor: "pointer",
            // backgroundColor: emoji === selectedEmoji ? "#F9AA33" : "",
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
