import './App.css';
import Header from './components/Header';
import Aboutme from './components/challenges/day01/Aboutme';
import Home from './components/Home';
import Footer from './components/Footer';
import MortyParent from './components/morty/MortyParent';
import RandomJoke from './components/challenges/day04challenge/RandomJoke';

// this is a root component
// parent function
function App() {
  // JS above return statement can be injected into JSX using {}
  // const name = 'Ryan';

  return (
    <div>
      <RandomJoke />
    </div>
  );
}

export default App;
