import './App.css';

import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {HomePage} from './components/Homepage/HomePage'
import {ContactUs} from './components/ContactUs/ContactUs'


function App() {

  return (
    
    <div className="App">
      
      <Header/>
      <ContactUs/>
    </div>
  );
}

export default App;
