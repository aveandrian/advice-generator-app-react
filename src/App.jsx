import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState({id: '', advice:''})

  useEffect(()=>{
    getAdvice()
  }, [])

  function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(body => setAdvice(body.slip))
  }

  return (
    <>
      <main className='advice-container'>
        <h1 className='advice-number'>ADVICE #{advice.id}</h1>
        <h1 className='advice'>&ldquo;{advice.advice}&rdquo;</h1>
        <img src='/images/pattern-divider-desktop.svg' className='divider'></img>
        <button className='btn' onClick={getAdvice}>
          <img src='/images/icon-dice.svg'></img>
        </button>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App
