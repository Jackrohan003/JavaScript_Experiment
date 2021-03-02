import logo from './logo.svg';
import './App.css';
import  Greet from './Components/Greet'
import Welcome from './Components/Welcome'

function App() {
  return (
    <div className="App">
         <Greet name="Rohan" >
           This is Children Props
         </Greet>
         <Greet name="Varun" />
         <Greet name="Siddharth" >
           <button>Action</button>
           </Greet>
         <Welcome name="Varun"/>
         <Welcome name="Rohan"/>
         
    </div>
  );
}

export default App;
