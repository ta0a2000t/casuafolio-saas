

import React, { useEffect, useState } from 'react';
import './About.css';
import ImageGallery from './ImageGallery';  // Import the ImageGallery component
//import {ABOUT_SECTION_TEXT, ABOUT_SECTION_GREETING, ABOUT_SECTION_GALLERY} from '../personalizationConstants';

const About = ({info}) => {

    const ABOUT_SECTION_GREETING = info.ABOUT_SECTION_GREETING
    const ABOUT_SECTION_TEXT = info.ABOUT_SECTION_TEXT
    const ABOUT_SECTION_GALLERY = info.ABOUT_SECTION_GALLERY

    // Check if ABOUT_SECTION_GALLERY is empty and adjust its value accordingly
    const gallery = ABOUT_SECTION_GALLERY;

    // Destructure the adjusted array to separate the first image from the rest
    const [firstImg, ...withoutFirstImg] = gallery;
    return (
        <section className="about-section">
            <h2>{ABOUT_SECTION_GREETING}</h2>
            <div className="about-content">
                {(gallery.length > 0) && 
                    <div className="about-image">
                        <img src= {`${firstImg}`} alt="That's Me!" loading="lazy" />
                    </div>
                }

                <div className="about-text">
                    {ABOUT_SECTION_TEXT.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
            </div>
            <div className="image-gallery-padding"></div>
            {(withoutFirstImg.length > 0) && (<ImageGallery gallery={withoutFirstImg} />)}
        </section>
    );
}

export default About;
