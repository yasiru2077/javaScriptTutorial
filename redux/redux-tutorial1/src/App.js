import logo from './logo.svg';
import './App.css';
import ToDos from './components/toDos';
import  AddTodo  from './components/addToDo';

function App() {
  return (
    <div className="App">
<AddTodo/>
  <ToDos/>
    </div>
  );
}

export default App;
