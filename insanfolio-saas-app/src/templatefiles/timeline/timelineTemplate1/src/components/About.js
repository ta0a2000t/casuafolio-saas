

import React, { useEffect, useState } from 'react';
import './About.css';
import ImageGallery from './ImageGallery';  // Import the ImageGallery component
//import {ABOUT_SECTION_TEXT, ABOUT_SECTION_GREETING, ABOUT_SECTION_GALLERY} from '../personalizationConstants';

const About = ({info}) => {

    const ABOUT_SECTION_GREETING = info.ABOUT_SECTION_GREETING
    const ABOUT_SECTION_TEXT = info.ABOUT_SECTION_TEXT
    const ABOUT_SECTION_GALLERY = info.ABOUT_SECTION_GALLERY

    // Check if ABOUT_SECTION_GALLERY is empty and adjust its value accordingly
    const gallery = ABOUT_SECTION_GALLERY.length === 0 
        ? ["https://fastly.picsum.photos/id/82/200/300.jpg?hmac=hfuNcoCWsYuVOmlcRdKAieM4Ax03DjM-mpVlqRUdGfc", "https://fastly.picsum.photos/id/85/200/200.jpg?hmac=gQRdT-HPw1azaNf38WLW_QZv7aC0WjwOSM4Sf5kWm3U", "https://fastly.picsum.photos/id/238/200/200.jpg?hmac=O4Jc6lqHVfaKVzLf8bWssNTbWzQoaRUC0TDXod9xDdM"] 
        : ABOUT_SECTION_GALLERY;

    // Destructure the adjusted array to separate the first image from the rest
    const [firstImg, ...withoutFirstImg] = gallery;
    return (
        <section className="about-section">
            <h2>{ABOUT_SECTION_GREETING}</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src= {`${firstImg}`} alt="That's Me!" loading="lazy" />
                </div>
                <div className="about-text">
                    {ABOUT_SECTION_TEXT.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
            </div>
            <div className="image-gallery-padding"></div>
            <ImageGallery gallery={withoutFirstImg} />
        </section>
    );
}

export default About;
