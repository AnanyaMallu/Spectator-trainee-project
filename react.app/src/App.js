import { useState } from 'react';
import './App.css';
import Logo from './Logo.js';
import Title from './Title.js';
import Inputbox from './Inputbox.js';
import Outputbox from './Outputbox.js';

function App() {
  const [sources, setSources] = useState([
    { id: 1, name: 'Presbo', email: 'presbo@columbia.com' },
    { id: 2, name: 'John Jay Mouse', email: 'mouse@columbia.com' },
    { id: 3, name: 'Water Bottle Man', email: 'flipper@columbia.edu' },
  ]);

  const [nextId, setNextId] = useState(4);

  function addSource(name, email) {
    setSources([...sources, { id: nextId, name, email }]);
    setNextId(nextId + 1);
  }

  function deleteSource(id) {
    setSources(sources.filter((source) => source.id !== id));
  }

  return (
    <>
      <Logo />
      <Title />
      <Inputbox onAdd={addSource} />
      {sources.map((source, i) => (
        <Outputbox
          key={source.id}
          index={i + 1}
          name={source.name}
          email={source.email}
          onDelete={() => deleteSource(source.id)}
        />
      ))}
    </>
  );
}

export default App;