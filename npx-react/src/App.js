import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Trade from './pages/Trade';
import MyCollection from './pages/MyCollection';
import DeckBuilder from './pages/DeckBuilder';

// components
import Navbar from './components/Navbar';

// css

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/Login'
              element={<Login />}
            />
            <Route 
              path='/Trade'
              element={<Trade />}
            />
            <Route 
              path='/MyCollection'
              element={<MyCollection />}
            />
            <Route 
              path='/DeckBuilder'
              element={<DeckBuilder />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
