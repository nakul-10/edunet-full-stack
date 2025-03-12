import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>Taste Temptation</h2>
            </Link>
        </div>
        <div className="searchBar">

                <div style={{borderRight :'1px solid #000' , paddingRight: '7px'}}>
                
                    location
                </div>
         
            <input className="bar" type="text" placeholder='Search for restarurant , cuisine or a dish' />
        </div>
        <div className="userAuth">
            Login / SignUp
        </div>
   </section>
  )
}

export default TopBar