import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import UserInput from './component/UserInput';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/register' element={<UserInput/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
