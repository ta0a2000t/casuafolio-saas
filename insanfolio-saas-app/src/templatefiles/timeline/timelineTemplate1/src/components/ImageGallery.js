

import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({ gallery }) => {
    console.log(`Image Gallery`, gallery);

    // Render empty div if gallery size is 0
    if (gallery.length === 0) {
    return <div style={{ paddingBottom: '1em' }}></div>;
    }

    return (
    <div className="image-container">
        <div className="timeline-gallery">
        {gallery.map((img, index) => (
            <div key={index} className="image-wrapper">
            <img src={`${img}`} alt={`Gallery ${img}`} loading="lazy" />
            </div>
        ))}
        </div>
    </div>
    );
    };

    ImageGallery.propTypes = {
    gallery: PropTypes.array.isRequired, 
    };

export default ImageGallery;
