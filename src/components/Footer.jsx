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
    padding: '1rem',
    background: '#f5f5f5',
    color: '#666',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    fontSize: '0.8rem',
},

link: {
    color: '#666',
    fontWeight: 400,
    fontSize: '0.8rem', 
    textDecoration: 'underline',
},
};

export default Footer;
