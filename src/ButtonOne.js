import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <>
     <button><Link to="/Post">Post</Link></button>
     <button><Link to="/Photos">Photos</Link></button>
     <button><Link to="/Albums">Albums</Link></button>
     <button><Link to="/Todo">Todo</Link></button> 
     <button><Link to="/Coment">Coment</Link></button>
     <button><Link to="/Users">Users</Link></button>
    </>
  );
}

export default App;