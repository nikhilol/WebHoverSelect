import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [activeElement, setActiveElement] = useState<Element | null>()

  useEffect(() => {
    console.log(activeElement)
  }, [activeElement])

  chrome.runtime.onInstalled.addListener(() => {
    console.log('Working')
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

