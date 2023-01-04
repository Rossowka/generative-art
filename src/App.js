import Button from './components/Button'
import { Art } from './components/Art'
import './App.css';
import { useState } from 'react';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleClick = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <Art />
      <Button handleClick={handleClick}/>
    </div>
  );
}

export default App;
