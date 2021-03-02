import logo from './logo.svg';
import './App.css';
import  Greet from './Components/Greet'
import Welcome from './Components/Welcome'

function App() {
  return (
    <div className="App">
         <Greet name="Rohan" />
         <Greet name="Varun" />
         <Greet name="Siddharth" />
         <Welcome />
    </div>
  );
}

export default App;
