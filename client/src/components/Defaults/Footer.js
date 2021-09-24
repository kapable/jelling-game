import React from 'react'
import { withRouter, Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="intro-footer">
            <h5>광고 및 후원 문의<br></br>Advertising and Sponsorship Contact</h5>
            <p>soumy21@naver.com</p>
            <p>Disclaimer:<br></br>All content is provided for fun and entertainment purposes only</p>
            <Link  to="/privacy" className="footer-to-privacy-link">privacy policy</Link>
            <p>©주식회사 위드썸컴퍼니 All Rights Reserved. 2021.</p>
        </div>
    )
}

export default withRouter(Footer)
