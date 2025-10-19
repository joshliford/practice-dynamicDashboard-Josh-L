import Greeting from './components/Greeting'
import ConditionalMessage from './components/ConditionalMessage';
import TaskList from './components/TaskList';
import './App.css'

function App() {
  const usersName = "Josh";
  let date = new Date().toLocaleDateString();

  return (
    <>
    <div>
      <h4 className="date">{date}</h4>
      <Greeting usersName={usersName}/>
      <ConditionalMessage />
      <TaskList />
    </div>
    </>
  )
}

export default App
