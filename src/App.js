import './App.css';
import Mycomponent from './components/Mycomponent/Mycomponent.js';
import Title from './components/Title/Title.js';
import { useState } from 'react';

function App() {

  const [myStyle] = useState(false);

  return (
    <div className="App">
      <h1>Just a test</h1>
      <Mycomponent />

      <h1 className={myStyle ? "style1" : "style2"} >Outra coisa</h1>

      <Title />

    </div>
  );
}

export default App;
