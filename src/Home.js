import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div class="home__row">
                <Product
                    id="1"
                    title="Dubliners: Centennial Edition (Penguin Classics Deluxe Edition)"
                    price={8.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ySJimFL4L._SX331_BO1,204,203,200_.jpg"
                />
                <Product
                    id="2"
                    title="The Best of Fyodor Dostoevsky"
                    price={34.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Z15h9JmmL._SY498_BO1,204,203,200_.jpg"
                />
            </div>
            <div class="home__row">
                <Product
                    id="3"
                    title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                    price={274.49}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SX466_.jpg"
                />
                <Product
                    id="4"
                    title="The Doors (180 Gram Vinyl)"
                    price={25.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81dWUePuUsL._SX425_.jpg"
                />
                <Product
                    id="5"
                    title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
                    price={129.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/91K9SyGiyzL._AC_SX679_.jpg"
                />
            </div>
            <div class="home__row">
                <Product
                    id="6"
                    title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT-TQ"
                    price={53.38}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71ZL0B3kwhS._AC_SX679_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
