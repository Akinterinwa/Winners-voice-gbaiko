import React from 'react';

const Footer = () => {
return (
    <footer style={styles.footer}>
    <p>
        &copy; Developed by{' '}
        <a href="https://linktr.ee/oluwanifemi_akin" target="_blank" rel="noopener noreferrer" style={styles.link}>
        Akinterinwa Oluwanifemi
        </a>
    </p>
    </footer>
);
};

const styles = {
footer: {
    marginTop: '50px',
    textAlign: 'center',
    padding: '1.2rem',
    background: '#9e9e9e00',
    color: '#444',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    fontSize: '0.95rem',
},

link: {
    color: '#423F41FF',
    fontWeight: 600,
    transition: 'color 0.3s ease',
    textDecoration: 'underline',
},
};

export default Footer;
