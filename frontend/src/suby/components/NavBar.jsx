import React from 'react';
import { Menu, ChevronDown, LogOut, LogIn, UserPlus } from 'lucide-react';

const NavBar = ({ showLoginHandler, showRegisterHandler, showLogOut, logOutHandler }) => {
  const firmName = localStorage.getItem('firmName');
  
  const styles = {
    nav: {
      backgroundColor: '#1e293b',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px'
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    logo: {
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    },
    companyName: {
      fontSize: '1.25rem',
      fontWeight: '600'
    },
    firmNameContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: '8px',
      backgroundColor: 'rgba(255,255,255,0.1)'
    },
    firmLabel: {
      color: '#cbd5e1',
      marginRight: '8px'
    },
    firmValue: {
      fontWeight: '500'
    },
    authContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '8px 12px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      color: 'white',
      backgroundColor: 'transparent'
    },
    loginButton: {
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'rgba(255,255,255,0.1)'
      }
    },
    registerButton: {
      backgroundColor: '#2563eb',
      ':hover': {
        backgroundColor: '#1d4ed8'
      }
    },
    logoutButton: {
      color: '#f87171',
      ':hover': {
        backgroundColor: 'rgba(255,255,255,0.1)'
      }
    },
    mobileMenu: {
      padding: '8px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      color: 'white'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.flexContainer}>
          {/* Logo and Company Name */}
          <div style={styles.logoSection}>
            <div style={styles.companyName}>
             Dashboard
            </div>
          </div>

          {/* Firm Name */}
          {firmName && (
            <div style={styles.firmNameContainer}>
              <span style={styles.firmLabel}>Firm:</span>
              <span style={styles.firmValue}>{firmName}</span>
            </div>
          )}

          {/* Auth Buttons */}
          <div style={styles.authContainer}>
            {!showLogOut ? (
              <div style={styles.authContainer}>
                <button
                  onClick={showLoginHandler}
                  style={{...styles.button, ...styles.loginButton}}
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </button>
                <button
                  onClick={showRegisterHandler}
                  style={{...styles.button, ...styles.registerButton}}
                >
                  <UserPlus size={18} />
                  <span>Register</span>
                </button>
              </div>
            ) : (
              <button
                onClick={logOutHandler}
                style={{...styles.button, ...styles.logoutButton}}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button style={styles.mobileMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;