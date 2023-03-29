import logo from './logo.jpeg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { SiInstagram,SiFacebook } from "react-icons/si";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id='text'>
        
         <h1> Hand Feature is under Construction!!</h1><br/> You can visit our social media handles to buy exciting products..
        </p>
       <div className='row'>
       <a
          className="App-link col-4"
          href="https://www.instagram.com/handfeature/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram></SiInstagram>

        </a>
        <a
          className="App-link col-4"
          href="https://www.facebook.com/handfeature"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFacebook></SiFacebook>

        </a>
        

       </div>
      </header>
    </div>
  );
}

export default App;
