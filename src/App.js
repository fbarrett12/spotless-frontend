import React, {useEffect} from 'react';

import './App.css';

function App() {
  
  useEffect( () => {
    fetch("http://localhost:3000/providers")
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      
    </div>
  )
}

export default App;
