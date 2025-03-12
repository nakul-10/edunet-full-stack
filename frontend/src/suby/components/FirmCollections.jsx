import React, { useState } from "react";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [activeCategory, setActiveCategory] = useState('all');

  const firmData = [
    {
      firm: [
        {
          _id: "1",
          firmName: "Anna's Kitchen",
          image: "image1.jpg",
          offer: "10% off",
          region: ["south-indian"],
        },
        {
          _id: "2",
          firmName: "Delhi Darbar ",
          image: "image2.jpg",
          offer: "20% off",
          region: ["north-indian"],
        },
        {
          _id: "3",
          firmName: "Bhaiyo Ram",
          image: "image1.jpg",
          offer: "60% off",
          region: ["indori"],
        },   {
          _id: "5",
          firmName: "Divine Donuts",
          image: "image1.jpg",
          offer: "10% off",
          region: ["bakery"],
        },
        {
          _id: "4",
          firmName: "Paradise of Spices",
          image: "image2.jpg",
          offer: "20% off",
          region: ["chinese"],
        }
      ]
    },
  ];

  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategory(category);
  };

  return (
    <>
      <h3>Restaurants with online food delivery in Indore</h3>
      <div className="filterButtons">
        <button onClick={() => filterHandler("All", 'all')} className={activeCategory === 'all' ? 'activeButton': ''}>All</button>
        <button onClick={() => filterHandler("indori", 'indori')} className={activeCategory === 'indori' ? 'activeButton': ''}>Indori-Zayka</button>
        <button onClick={() => filterHandler("south-indian", 'south-indian')} className={activeCategory === 'south-indian' ? 'activeButton': ''}>South-Indian</button>
        <button onClick={() => filterHandler("north-indian", 'north-indian')} className={activeCategory === 'north-indian' ? 'activeButton': ''}>North-Indian</button>
        <button onClick={() => filterHandler("chinese", 'chinese')} className={activeCategory === 'chinese' ? 'activeButton': ''}>Chinese</button>
        <button onClick={() => filterHandler("bakery", 'bakery')} className={activeCategory === 'bakery' ? 'activeButton': ''}>Bakery</button>
      </div>
      <section className="firmSection">
        {firmData.map((apple) => {
          return apple.firm.map((item) => {
            if (selectedRegion === "All" || item.region.includes(selectedRegion)) {
              return (
                <div className="zoomEffect" key={item._id}>
                  <div className="firmGroupBox">
                    <div className="firmGroup">
                      <div className="imagePlaceholder" style={{ height: '200px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span>Image Placeholder</span>
                      </div>
                      <div className="firmOffer">{item.offer}</div>
                    </div>
                    <div className="firmDetails">
                      <strong>{item.firmName}</strong>
                      <br />
                      <div className="firmArea">{item.region.join(", ")}</div>
                      <div className="firmArea">{item.area}</div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          });
        })}
      </section>
    </>
  );
};

export default FirmCollections;
