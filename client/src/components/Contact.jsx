import React from 'react';
import NavBar from './NavBar';
import pirateStyle from './Main.module.css';

const Contact = () => {
    return (
        <div>
            <div className={pirateStyle.topBox}>
                <NavBar />
            </div>
            <div className={pirateStyle.centerContact}>
                <h3>Plug and Play Tech Center</h3>
                <p>440 N Wolfe Rd,</p>
                <p>Sunnyvale, CA 94085</p>
                <p>Phone: 408-524-1400</p>
                <hr></hr>
                <h3>How to order:</h3>
                <p>1. Please call us at 408-524-1400 to order</p>
                <p>2. Pick up your order at our location OR we can deliver for a small fee.</p>
                <p>3. We accept cash, credit/debit card, Venmo 😄</p>
            </div>
        </div>
    )
}

export default Contact
