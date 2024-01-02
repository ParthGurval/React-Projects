import React from 'react'

const Sidenav = () => {
  return (
    <div>

    <div className="container-fluid ">
        
        <div className="row">
  
          <div className="col-2  listContainer border-gradient border-gradient-purple" style={{display:'flex'}}>
            <ul type="none" className='UlList '>
              <li>Maths</li>
              <li>English</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>React JS</li>
              <li>Angular</li>
              <li>JavaScript</li>
              
            </ul>
          </div>
  
          <div className="col-10">
          
          </div>
  
        </div>
  
        </div>

    </div>
  )
}

export default Sidenav
