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
                <h3>Exotic Fruits</h3>
                <p>12345 N Main St,</p>
                <p>Bobdale, CA 98765</p>
                <p>Phone: 123-456-7890</p>
                <hr></hr>
                <h3>How to order:</h3>
                <p>1. Please call us at 123-456-7890 to order</p>
                <p>2. Pick up your order at our location OR we can deliver for a small fee.</p>
                <p>3. We accept cash, credit/debit card, Venmo 😄</p>
            </div>
        </div>
    )
}

export default Contact
