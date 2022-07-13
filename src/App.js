import './App.css';
import Filters from './components/filter';
import TodoList from './components/TodoList/index';

function App() {

  return (
    <div className="App">
        <Filters />
        <TodoList />
    </div>
  );
}

export default App;
