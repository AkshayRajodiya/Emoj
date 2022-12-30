import React from 'react';
import { useState, useEffect } from 'react';
import emojiData from "./emojiData.json";
import './App.css'

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);
  return (<main className="body">
    <div className="header">
      <h1> Emoji Search</h1>

      <input class="form-control input-sm" id="inputsm"
        type="text"
        placeholder="&#128556; Search-Emoji	&#128540;"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
    </div>
    <ul>
      {
        data.map((emoji) => (
          <li key={emoji.title}>
            {emoji.title} {emoji.symbol}
          </li>
        ))
      }
    </ul>



  </main>
  )
}
