import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <a target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Verrsatile Solutions</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }} className="card">
        <p>
          Verrsatile Solutions website is under constructions and will be coming soon!
        </p>
        <a href='/vs.pdf' download>
          Click here to download our brochure for more details
        </a>
        <a href='tel:+91-750-634-3513'>
          +91-750-634-3513
        </a>
        <a href='mailto:chetnasehrra@gmail.com'>
          chetnasehrra@gmail.com
        </a>
        <a href='mailto:chetna@versatile-solutions.in'>
          chetna@versatile-solutions.in
        </a>
      </div>
      <p className="read-the-docs">
        For any queries reach out to us by email / call
      </p>
    </div>
  )
}

export default App
