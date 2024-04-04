import './App.css';
import Forecast from './components/Forecast/Forecast';
import Search from './components/Search/Search';
import TempInfo from './components/TempInfo/TempInfo';

function App() {
  return (
    <div className="AppContainer">
      <Search/>
      <TempInfo/>
      <Forecast/>
    </div>
  );
}

export default App;
