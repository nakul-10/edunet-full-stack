import React from 'react'
import TopBar from '../components/TopBar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'
import Offers from '../components/offer-box'

const LandingPage = () => {
  return (
    <div>
        <TopBar />
        <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <Offers />
        <FirmCollections />
        </div>
    </div>
  )
}

export default LandingPage