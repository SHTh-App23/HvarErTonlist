import './index.css';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import Events from './routes/Events';
import Profile from './routes/Profile';
import Navigation from './Navigation';

//Forsíða - viðburður - login - profile

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;