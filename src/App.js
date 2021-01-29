import './App.css';
import NameProp from './components/NameProp';
import Contact from './components/challenges/day02/Contact';
import State from './components/State';

// this is a root component
// parent function
function App() {
  // JS above return statement can be injected into JSX using {}
  // const name = 'Ryan';
  let contact = {
    name: 'Joe',
    age: 33,
    school: 'The Academy',
    graduationYear: 2007,
  };
  return (
    <div className="App">
      <NameProp name="Ryan" />
      <Contact {...contact} />
      <p>----------------------</p>
      <State />
    </div>
  );
}

export default App;
