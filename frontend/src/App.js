
import Todo from './Component/Todo';
import './App.css';
import GetTodo from './Component/GetTodo';
import {Route, Routes} from "react-router-dom"
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import EditTodo from './Component/EditTodo';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/todo" element={<Todo/>}/>
   <Route path='/gettodo' element={<GetTodo/>}/>
   <Route path="/edittodo/:id" element={<EditTodo/>}/>
  
   </Routes>
    </>
  );
}

export default App;
