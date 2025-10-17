import Greeting from './components/Greeting'
import ConditionalMessage from './components/ConditionalMessage';
import TaskList from './components/TaskList';
import './App.css'

function App() {
  const usersName = "Josh";

  return (
    <>
    <div>
      <Greeting usersName={usersName}/>
      <ConditionalMessage />
      <TaskList />
    </div>
    </>
  )
}

export default App
