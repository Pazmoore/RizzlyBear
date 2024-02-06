import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Us from './Components/Us';

const App = () => {
  return (
    <div>
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/us" element={<Us />} />
        </Routes>
      </div>
    </Router>
    </div>
 
  );
};

export default App;

