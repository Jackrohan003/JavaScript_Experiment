import logo from './logo.svg';
import './App.css';
import  Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter';
import FunctionalClick from './Components/FunctionalClick';
import ClassClick from './Components/ClassClick';

function App() {
  return (
    <div className="App">
     <FunctionalClick> </FunctionalClick> 
     <ClassClick />


{/*  
    <Counter></Counter>       
         <Message />      
         <Greet name="Rohan" >
           This is Children Props
         </Greet>
         <Greet name="Varun" />
         <Greet name="Siddharth" >
           <button>Action</button>
           </Greet>
         <Welcome name="Varun"/>
         <Welcome name="Rohan"/>
          */}
    </div>
  );
}

export default App;
