import Header from '../../Components/Header/Header.js';
import img1 from '../../Assets/1.png';
import img2 from '../../Assets/2.png';
import img3 from '../../Assets/3.png';
import img4 from '../../Assets/4.jpg';
import img5 from '../../Assets/5.jpg';
import img6 from '../../Assets/6.jpg';
import img7 from '../../Assets/7.jpg';
import img8 from '../../Assets/8.jpg';
import img9 from '../../Assets/9.jpg';

import './Home.css';

import React from 'react';
import LeafWithText from '../../Components/LeafWithText/LeafWithText.js';
import ThreeImageGallery from '../../Components/ThreeImageGallery/ThreeImageGallery.js';
import Footer from '../../Components/Footer/Footer.js';

function Home()
{
    return (
        <div>
            <Header/>
                <h1 className='wallheading'>Travel Solo, Travel Adventurously</h1>
            <h2 className='wallsubheading'>Welcome to your one-stop resource for a life-changing journey.</h2>
            <button className='gettoknow'>
                BEGIN YOUR ADVENTURE HERE
            </button>
            
            <LeafWithText text="My recent adventures" />
            <ThreeImageGallery image1={img1} image2={img2} image3={img3} /> 
            <LeafWithText text="My favorite stories"/>
            <ThreeImageGallery image1={img4} image2={img5} image3={img6} /> 
            <LeafWithText text="My Travel Countries stories"/>
            <ThreeImageGallery image1={img7} image2={img8} image3={img9} /> 
            <Footer/>
        </div>
    );
}

export default Home;