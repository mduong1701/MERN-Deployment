import React from 'react';
import NavBar from './NavBar';
import pirateStyle from './Main.module.css';
// import pic from '../images/a.jpeg';


const Home = () => {
    return (
        <div>
            <div className={pirateStyle.topBox}>
                <NavBar />
            </div>

            {/* <div className={pirateStyle.bigBox}>
                <h2>Are you bored of typical everyday fruits, such as apples, banana?</h2>
            </div> */}
            <div className={pirateStyle.homeImage}>
                {/* <img src={pic} alt="Tropical fruits" /> */}
                <img src="https://www.gardeningknowhow.com/wp-content/uploads/2021/05/assortment-of-colorful-ripe-tropical-fruits.jpg" alt="Tropical fruits" />
            </div>
        </div>
    )
}

export default Home