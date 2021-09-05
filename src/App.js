import './App.css';
import Person from './components/Person';

function App() {
  return (
    <>
      <Person firstName="Marlene" lastName="Ramirez" age={36} hairColor="Browm"></Person>
      <Person firstName="Esteban" lastName="Rojas" age={34} hairColor="Black"></Person>
      <Person firstName="Emiliano" lastName="Rojas" age={6} hairColor="Yellow"></Person>
    </>
  );
}

export default App;
