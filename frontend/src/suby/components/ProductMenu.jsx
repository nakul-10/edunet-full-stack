import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";



const ProductMenu = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Sample Product 1",
      price: 100,
      description: "This is a sample product description.",
      image: "sample1.jpg"
    },
    {
      id: 2,
      productName: "Sample Product 2",
      price: 200,
      description: "This is another sample product description.",
      image: "sample2.jpg"
    },
    {
      id: 3,
      productName: "Sample Product 3",
      price: 300,
      description: "This is a sample product description.",
      image: "sample1.jpg"
    },
    {
      id: 4,
      productName: "Sample Product 4",
      price: 400,
      description: "This is a sample product description.",
      image: "Dosa.jpg"
    },
  ]);

  const style = {
    productSection: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto"
    },
    productSectionH3: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333"
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "20px",
      padding: "10px"
    },
    productBox: {
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "#ffffff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.2s ease"
    },
    productBoxHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    },
    productBoxStrong: {
      display: "block",
      fontSize: "18px",
      marginBottom: "8px",
      color: "#2c2c2c"
    },
    productBoxPrice: {
      fontSize: "16px",
      color: "#e53935",
      marginBottom: "8px"
    },
    productBoxDescription: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "15px"
    },
    productGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "15px"
    },
    productGroupImg: {
      maxWidth: "100px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "4px"
    },
    addButton: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "8px 20px",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "500",
      textAlign: "center",
      transition: "backgroundColor 0.2s ease"
    },
    addButtonHover: {
      backgroundColor: "#45a049"
    },
    // Responsive adjustments
    "@media (maxWidth: 768px)": {
      productGrid: {
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "15px"
      },
      productBox: {
        padding: "12px"
      },
      productBoxStrong: {
        fontSize: "16px"
      }
    },
    "@media (maxWidth: 480px)": {
      productGrid: {
        gridTemplateColumns: "1fr"
      },
      productSection: {
        padding: "15px"
      }
    }
  };

  const { firmId, firmName } = useParams();

  return (
    <>
      <TopBar />
      <section style={style.productSection}>
        <h3 style={style.productSectionH3}>{firmName}</h3>
        <div style={style.productGrid}>
          {products.map((item) => (
            <div
              style={style.productBox}
              key={item.id}
              // onMouseEnter={(e) => (e.currentTarget.style = style.productBoxHover)}
              // onMouseLeave={(e) => (e.currentTarget.style = style.productBox)}
            >
              <div>
                <div style={style.productBoxStrong}><strong>{item.productName}</strong></div>
                <div style={style.productBoxPrice}>₹{item.price}</div>
                <div style={style.productBoxDescription}>{item.description}</div>
              </div>
              <div style={style.productGroup}>
                {/* <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} style={style.productGroupImg} /> */}
                <div style={style.addButton}>ADD</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductMenu;
