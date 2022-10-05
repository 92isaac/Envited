import './App.css';
import { createContext, useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import UserInput from './component/UserInput';


export const AppContext = createContext(null)
function App() {
  const [data, setData] = useState({})
  return (
    <AppContext.Provider value={{data, setData}} className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/register' element={<UserInput/>}/>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
