import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

import {Homepage} from "./pages/Homepage.jsx";
import {Users} from "./pages/Userpage.jsx";
import {Detalis} from "./pages/Detalispage.jsx"
import {Notfoundpage} from "./pages/Notfoundpage.jsx"


function App() {
  return (
  <div> 
    <header className='header'>
        <Link className='page' to='/'>Home</Link>
        <Link className='page' to='/users'>Users</Link>
    </header>

    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path= "/users?/:id" element={<Detalis/>}/>
      <Route path= "*" element={<Notfoundpage/>}/>
    </Routes>
</div>
  );
}

export default App;
