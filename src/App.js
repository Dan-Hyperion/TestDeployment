import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact us </Link>
      </div>
     <h1>Deploying to Vercel</h1>
    </div>
  );
}

export default App;
