import './App.css';
import HomePage from '../HomePage';
import Article from '../Article';
import Navbar from '../Navbar';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Navbar auth={isAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="wikipigeon" element={isAuthenticated ? <Article /> : ''} />
      </Routes>
    </div>
  );
}

export default App;

// <main className="App">
//   <Header />
//   <User />
//   <Article />
//   {isAuthenticated ? <Article /> : ''}
// </main>
