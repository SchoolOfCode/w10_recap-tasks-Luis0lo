import './App.css';
import Header from '../Header';
import Article from '../Article';
import User from '../User';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <main className="App">
      <Header />
      <User />
      <Article />
      {isAuthenticated ? <Article /> : ''}
    </main>
  );
}

export default App;
