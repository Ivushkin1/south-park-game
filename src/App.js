import './App.css';
import Card from './components/Card';
import Video from './components/Video';
import Modal from './components/modal';
import { useState } from 'react';

function App() {
  const [finished, setFinished] = useState(false);
  return (
    <div className="App">
      <Modal setFinished={setFinished} finished={finished} />
      <Video />
      <Card setFinished={setFinished} finished={finished} />
    </div>
  );
}

export default App;
