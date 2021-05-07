
import { useState } from 'react';
import './App.css';
import Todoform from './components/todoform';
import AllTodos from './components/alltodos'
function App() {
  const [todos,setTodos] = useState([])
  return (
    <div className="App">
      <Todoform todos={todos} setTodos={setTodos} />
      <AllTodos todos={todos} />
    </div>
  );
}

export default App;
