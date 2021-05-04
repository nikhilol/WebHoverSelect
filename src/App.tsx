import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [activeElement, setActiveElement] = useState<EventTarget | null>()

  useEffect(()=>{
    console.log(activeElement)
  },[activeElement])

  function setActive(e: Event) {
    e.preventDefault()
    setActiveElement(e.target)
    return
  }

  useEffect(() => {
    prepare()
  })

  function prepare(){
    let elements: NodeListOf<Element> = document.getElementsByTagName('body')[0].querySelectorAll('*')
    console.log(elements)
    let arrayOfElements = Array.from(elements)
    let textElementArr: Element[] = []
    arrayOfElements.forEach(element => {
      if (element.textContent && element.nodeName !== 'NOSCRIPT') {
        element.className += ' hvtool'
        element.addEventListener('click', (e) => {return setActive(e)})
        textElementArr.push(element)
      }
      // element.className +=   ' ' + arrayOfElements.indexOf(element);
    })
    console.log(textElementArr)
    return
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

