
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} /> {/* Home route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
