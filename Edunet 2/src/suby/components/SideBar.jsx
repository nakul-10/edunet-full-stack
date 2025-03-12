import React, { useState } from 'react';
import { Building, PackagePlus, Boxes, UserCog, ChevronRight, WavesLadder, BookUser } from 'lucide-react';
import Welcome from './Welcome';

const SideBar = ({
  showFirmHandler,
  showProductHandler,
  showWelcomeHandler,
  showAllProductsHandler,
  showFirmTitle
}) => {
  const [activeItem, setActiveItem] = useState(null);

  const styles = {
    aside: {
      width: '256px',
      height: '100vh',
      backgroundColor: '#1e293b',
      color: '#cbd5e1',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    nav: {
      padding: '16px',
    },
    button: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      marginBottom: '8px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      color: 'inherit',
      backgroundColor: 'transparent',
    },
    buttonActive: {
      backgroundColor: '#2563eb',
      color: 'white',
    },
    buttonHover: {
      backgroundColor: '#334155',
      color: 'white',
    },
    label: {
      flex: 1,
      textAlign: 'left',
    },
    chevron: {
      opacity: 0,
      transition: 'opacity 0.2s',
    },
    chevronVisible: {
      opacity: 1,
    }
  };

  const menuItems = [
    showFirmTitle &&{
      id: 'welcome',
      label: 'Welcome',
      icon: <BookUser size={20} />,
      onClick: showWelcomeHandler
    },
     {
      id: 'firm',
      label: 'Add Firm',
      icon: <Building size={20} />,
      onClick: showFirmHandler
    },
    {
      id: 'addProduct',
      label: 'Add Product',
      icon: <PackagePlus size={20} />,
      onClick: showProductHandler
    },
    {
      id: 'allProducts',
      label: 'All Products',
      icon: <Boxes size={20} />,
      onClick: showAllProductsHandler
    },
    {
      id: 'userDetails',
      label: 'User Details',
      icon: <UserCog size={20} />,
      onClick: () => {}
    }
  ].filter(Boolean);

  return (
    <aside style={styles.aside}>
      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveItem(item.id);
              item.onClick();
            }}
            style={{
              ...styles.button,
              ...(activeItem === item.id ? styles.buttonActive : {})
            }}
            onMouseEnter={(e) => {
              if (activeItem !== item.id) {
                e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor;
                e.currentTarget.style.color = styles.buttonHover.color;
              }
            }}
            onMouseLeave={(e) => {
              if (activeItem !== item.id) {
                e.currentTarget.style.backgroundColor = styles.button.backgroundColor;
                e.currentTarget.style.color = styles.button.color;
              }
            }}
          >
            {item.icon}
            <span style={styles.label}>{item.label}</span>
            <ChevronRight 
              size={16}
              style={{
                ...styles.chevron,
                ...(activeItem === item.id ? styles.chevronVisible : {})
              }}
            />
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;