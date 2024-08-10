import React, { useState } from 'react';
import './products.css';


import image1 from '../assets/product_1.png';
import image2 from '../assets/product_2.png';
import image3 from '../assets/product_3.png';
import image4 from '../assets/product_4.png';


const images = [image1, image2, image3, image4 ];

const Product = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="product-carousel">
            <h2 className="product-title">Our Products</h2>
            <div className='product-para'><p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis semper sapien.
            </p></div>
            <div className="products-container">
                {images.map((image, index) => (
                    <div
                        className={`image-container ${index === currentImageIndex ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={image} alt={`Product ${index + 1}`} className="product-image" />
                        <p className="product-name">Product {index + 1}</p>
                    </div>
                ))}
            </div>
            <div className="carousel-controls">
                <button onClick={handlePrevious} className="control-button">{'<'}</button>
                <button onClick={handleNext} className="control-button">{'>'}</button>
            </div>
        </div>
    );
};

export default Product;

