import React from 'react';
import NavBar from './NavBar';
import pirateStyle from './Main.module.css';

const Home = () => {
    return (
        <div>
            <div className={pirateStyle.topBox}>
                <NavBar />
            </div>
            <div className={pirateStyle.homeText}>
                <p>Are you bored of eating ordinary fruits, such as apple, banana, watermelon, or orange?</p>
                <h5>Our store offers a huge selection of fancy fruits.</h5>
            </div>
            <div className={pirateStyle.homeImage}>
                {/* <img src={pic} alt="Tropical fruits" /> */}
                <img src="https://www.gardeningknowhow.com/wp-content/uploads/2021/05/assortment-of-colorful-ripe-tropical-fruits.jpg" alt="Tropical fruits" />
            </div>
        </div>
    )
}

export default Home