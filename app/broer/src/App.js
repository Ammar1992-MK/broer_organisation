import './App.css';

import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {HomePage} from './components/Homepage/HomePage'
import{MobileHeader} from './components/mobile/Header/MobileHeader'

function App() {

  return (
    
    <div className="App">
      
      <Header/>
      <HomePage/>
      <Footer/> 
    </div>
  );
}

export default App;
