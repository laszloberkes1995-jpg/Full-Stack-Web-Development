import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";
import MyFirst from "./components/MyFirst.jsx";
import Counter from "./components/Counter.jsx";
import { useState } from "react";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  // let popupOpen = false

  function togglePopup() {
    setPopupOpen(true);
    console.log("parent notified");
  }

  return (
    <>
      <TodoTitle />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setPopupOpen(true)}>Add to do</button>
      </div>
      <Todo togglePopup={togglePopup} task="Learn React" />
      <Todo togglePopup={togglePopup} task="Finish ASAP Frontend" />
      <Todo togglePopup={togglePopup} task="Land a junior job" />
      <Todo togglePopup={togglePopup} task="Earn 100k" />
      {popupOpen && <Popup title="Are you 1000000% sure?" />}
    </>
  );
}

export default App;
