
import './App.css'
import Todo from './components/Todo.jsx'
import TodoTitle from './components/TodoTitle.jsx';
import Popup from './components/Popup.jsx';
import MyFirst from './components/MyFirst.jsx';

function App() {


  return (
    <>
    <TodoTitle />
    <div>
      <input type="text" onChange={(event) => {
        console.log(event.target.value)
      }} />
      <button>Add to do</button>
    </div>
    <Todo 
    task="Learn React"/>
    <Todo 
    task="Finish ASAP Frontend"
    />
    <Todo 
    task="Land a junior job"
    />
    <Todo 
    task="Earn 100k"/>
    <Popup title = "Are you 1000000% sure?" />

    </>
  )
}

export default App;
