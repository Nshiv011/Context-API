import logo from './logo.svg';
import './App.css';
import {MovieProvider} from "./Parent"
import ComA from './ComA';
import Form from './Form';

function App() {
  return (

   

    <MovieProvider>
 <ComA/>
    </MovieProvider>
  
  );
}

export default App;
