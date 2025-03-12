import React, { useState } from 'react';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Chains = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(false);

  const vendorData = {
    vendors: [
      {
        firm: [
          {
            _id: "1",
            firmName: "Firm 1",
            image: "image1.jpg"
          },
        ]
      },
      {
        firm: [
          {
            _id: "2",
            firmName: "Firm 2",
            image: "image2.jpg"
          },
        ]
      },
      {
        firm: [
          {
            _id: "3",
            firmName: "Firm 3",
            image: "image3.jpg"
          },
        ]
      },
      {
        firm: [
          {
            _id: "4",
            firmName: "Firm 4",
            image: "image4.jpg"
          },
        ]
      },
      {
        firm: [
          {
            _id: "5",
            firmName: "Firm 5",
            image: "image5.jpg"
          },
        ]
      },
    ]
  };

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;

    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth"
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className='mediaChainSection'>
      <div className="loaderSection">
        {loading && <>
          <div className="loader">
            Your 🥣 is Loading...
          </div>
          {/* Loader component */}
        </>}
      </div>
      <div className="btnSection">
        <button onClick={() => handleScroll("left")}>
          <FaRegArrowAltCircleLeft className='btnIcons' />
        </button>
        <button onClick={() => handleScroll("right")}>
          <FaRegArrowAltCircleRight className='btnIcons' />
        </button>
      </div>
      <h3 className='chainTitle'>Top restaurant chains in Indore</h3>
      <hr />
      <section className="chainSection" id="chainGallery" onScroll={(e) => setScrollPosition(e.target.scrollLeft)}>
        {vendorData.vendors.map((vendor) => {
          return (
            <div className="vendorBox" key={vendor.firm[0]._id}>
              {vendor.firm.map((item) => {
                return (
                  
                    <div className="firmImage">
                      <img src={item.image} alt={item.firmName} className="imagePlaceholder" />
                      <div className="firmDetails">
                        <h4>{item.firmName}</h4>
                      </div>
                    </div>
               
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Chains;