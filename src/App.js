import logo from './logo.svg';
import './App.css';
import BottomNavbar from './components/BottomNavbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Choo Choo! This is an example of a create-react-app site running on Railway.</p>
        <a className="App-link" href="https://react.dev/learn" target="_blank" rel="noreferrer noopener">Learn React</a>
      </header>
        <BottomNavbar />
    </div>
  );
}

export default App;
