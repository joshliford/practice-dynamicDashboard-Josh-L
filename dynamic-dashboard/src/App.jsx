import Greeting from './components/Greeting'
import ConditionalMessage from './components/ConditionalMessage';
import './App.css'

function App() {
  const usersName = "Josh";

  return (
    <>
      <Greeting usersName={usersName}/>
      <ConditionalMessage />
    </>
  )
}

export default App
