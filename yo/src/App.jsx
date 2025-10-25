import React from 'react'
import './App.css'
import User from './components/User';

const App = () => {
  const arr = [{User:'John Doe'},{User:'Jane Smith'},{User:'Alice Johnson'}];
 
  return (
    <>
    <h1>Practice </h1>
      <div className="parent">
        {arr.map(function(elem){
          console.log(elem);
          });
        })}

      </div>
      </>
  )
}

export default App


















/*import React from 'react'
import './App.css'

function App() {
 
  return (
    <>
    <h1>these are all the card </h1>
      <div className="parent">
        
        <div className="card">
          <div className='top'>
            <img className="logo" src="https://imgs.search.brave.com/RXAhC7hMoa55jFecWzibah4VT5_vVbm7iPguxshhV2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMTM3Ni8xMTM3/NjMwMi5wbmc_c2Vt/dD1haXNfd2hpdGVf/bGFiZWw" alt="amz" />
            <button className='btn'>Save</button>
            <img className="save-logo" src="/image.png" />

          </div>
          <div className='center'>
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div>
              <h4>Part Time</h4>
              <h4> Senior Level</h4>
            </div>

          </div>
          <div className='bottom'>
            <div>
              
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
             
            </div>
            <button className='btn'>Apply Now</button>


          </div>
          <div className='card'>
          <div className='top'>
            <img className="logo" src="https://imgs.search.brave.com/RXAhC7hMoa55jFecWzibah4VT5_vVbm7iPguxshhV2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMTM3Ni8xMTM3/NjMwMi5wbmc_c2Vt/dD1haXNfd2hpdGVf/bGFiZWw" alt="amz" />
            <button className='btn'>Save</button>
            <img className="save-logo" src="/image.png" />

          </div>
          <div className='center'>
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div>
              <h4>Part Time</h4>
              <h4> Senior Level</h4>
            </div>

          </div>
          <div className='bottom'>
            <div>
              
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
             
            </div>
            <button className='btn'>Apply Now</button>


          </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
*/
