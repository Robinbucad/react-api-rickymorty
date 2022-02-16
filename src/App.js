
import './App.css';
import HeaderPage from './components/header';
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App">
        <HeaderPage></HeaderPage>
        <CharacterList></CharacterList>
    </div>
  );
}

export default App;
