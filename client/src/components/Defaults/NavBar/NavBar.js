import React from 'react'
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import MobileMenu from './MobileMenu';
import './NavBar.css';

function NavBar() {
    // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <nav className="navMenu" id="navbar">
            <div className="menu__container">
                <div className="menu_left">
                    <LeftMenu mode="horizontal" />
                </div>
                <div className="menu_rigth">
                    <RightMenu mode="horizontal" />
                </div>
                <div className="mobile-nav-class">
                    <MobileMenu />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
