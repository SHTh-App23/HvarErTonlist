import './index.css';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import Events from './routes/Events';
import Profile from './routes/Profile';

//Forsíða - viðburður - login - profile

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;