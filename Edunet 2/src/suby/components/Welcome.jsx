import React from 'react'

const Welcome = () => {
    const firmName = localStorage.getItem("firmName")

  return (
    <div className='welcomeSection'>
        <h2>Welcome Vendor's <br/> {firmName}</h2>
        <div className="landingImage">
          <img src='public\assets\item\muuve-rider.gif' alt='welcome' />
        </div>
    </div>
  )
}

export default Welcome