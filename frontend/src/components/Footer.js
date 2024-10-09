import React from 'react';
import './Style.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>DragonNest</h3>
                    <p>DragonNest provides a platform for Drexel University Students to find the perfect match for their housing needs. We ensure a reliable and user-friendly experience.</p>
                </div>
                <div className="footer-section contact-info">
                    <h3>Contact Us</h3>
                    <p>If you have any questions, feel free to reach out to us:</p>
                    <p>Email: contact@dragonnest.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} DragonNest | All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
