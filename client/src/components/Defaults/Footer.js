import React from 'react'
import { withRouter, Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="intro-footer">
            <h5>Advertising and Sponsorship Contact</h5>
            <p>soumy21@naver.com</p>
            <p>Disclaimer:<br></br>All content is provided for fun and entertainment purposes only</p>
            <Link style={{color:"#cecfd0", fontWeight:'800'}} to="/privacy" className="footer-to-privacy-link">and Privacy Policy</Link>
            <p>©Withsome Company All Rights Reserved. 2021.</p>
        </div>
    )
}

export default withRouter(Footer)
