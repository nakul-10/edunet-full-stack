import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import AddFirm from '../components/forms/AddFirm';
import AddProduct from '../components/forms/AddProduct';
import Welcome from '../components/Welcome';
import AllProducts from '../components/AllProducts';

const LandingPage1 = () => {
  const [showFirm, setShowFirm] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showFirmTitle, setShowFirmTitle] = useState(true);

  const showFirmHandler = () => {
    setShowFirm(true);
    setShowProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };

  const showProductHandler = () => {
    setShowFirm(false);
    setShowProduct(true);
    setShowWelcome(false);
    setShowAllProducts(false);
  };

  const showWelcomeHandler = () => {
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(true);
    setShowAllProducts(false);
  };

  const showAllProductsHandler = () => {
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(false);
    setShowAllProducts(true);
  };

  return (
    <>
      <section className='landingSection1'>
        <NavBar />
        <div className="collectionSection">
          <SideBar
            showWelcomeHandler={showWelcomeHandler}
            showFirmHandler={showFirmHandler}
            showProductHandler={showProductHandler}
            showAllProductsHandler={showAllProductsHandler}
            showFirmTitle={showFirmTitle}
          />
          {showFirm && <AddFirm />}
          {showProduct && <AddProduct />}
          {showWelcome && <Welcome />}
          {showAllProducts && <AllProducts />}
        </div>
      </section>
    </>
  );
};

export default LandingPage1;