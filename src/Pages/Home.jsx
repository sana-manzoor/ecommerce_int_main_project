import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import Pcard from '../Components/Pcard';
import Header from '../Components/Header';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import logo from '../assets/logo1.png';
import Navbr from './Navbr';
import { Dropdown } from 'react-bootstrap';

function Home() {

    const clearss = async () => {
        if (sessionStorage.getItem("id")) {
            sessionStorage.removeItem("id");
        }
    };

    useEffect(() => {
        clearss();
    }, []);

    return (
        <>
            {/* Carousel */}
            <Header />
            <Carousel>
                <Carousel.Item style={{ height: '320px' }}>
                    <img src={c1} alt="carousel-img" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item style={{ height: '320px' }}>
                    <img src={c2} alt="carousel-img" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item style={{ height: '320px' }}>
                    <img src={c3} alt="carousel-img" className="img-fluid" />
                </Carousel.Item>
            </Carousel>

            {/* Categories Section */}
            <div className="mb-3">
                <Navbr />
            </div>

            {/* All Products */}
            <div className="pt-3 mt-2 pb-5">
                <h3>All Products</h3>
                
                   
                        <Pcard />
                    
                    {/* You can add a sidebar or other content here */}
                
            </div>

            {/* Category Card */}
            <div className="pb-5" style={{ paddingBottom: '3rem' }}>
    <div className="row align-items-center">
        {/* Left Column - Image */}
        <div className="col-md-6">
            <img 
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/discount-sale-template-design-ca64fd4fa502e497442a7713f6540f82_screen.jpg?ts=1682224854" 
                alt="category" 
                className="img-fluid" 
                style={{
                    width: '100%',
                    maxHeight: '350px', // Control max height
                    objectFit: 'cover', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }} 
            />
        </div>
        
        {/* Right Column - Content */}
        <div className="col-md-6">
            <h2 style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: '#333',
                marginBottom: '20px'
            }}>
                Why Choose <img src={logo} alt="logo" style={{ height: '95px', width: '140px' }} />
            </h2>
            <ul className="list-unstyled" style={{ paddingLeft: '0' }}>
                <li className="d-flex align-items-center mb-3" style={{ marginBottom: '1.5rem' }}>
                    <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#4E5ED0' }}></i>
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        marginLeft: '12px'
                    }}>Wide range of products</span>
                </li>
                <li className="d-flex align-items-center mb-3" style={{ marginBottom: '1.5rem' }}>
                    <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#4E5ED0' }}></i>
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        marginLeft: '12px'
                    }}>Quality Support</span>
                </li>
                <li className="d-flex align-items-center mb-3" style={{ marginBottom: '1.5rem' }}>
                    <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#4E5ED0' }}></i>
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        marginLeft: '12px'
                    }}>Order from any location</span>
                </li>
                <li className="d-flex align-items-center mb-3" style={{ marginBottom: '1.5rem' }}>
                    <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#4E5ED0' }}></i>
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        marginLeft: '12px'
                    }}>Fastest Delivery</span>
                </li>
                <li className="d-flex align-items-center mb-3" style={{ marginBottom: '1.5rem' }}>
                    <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#4E5ED0' }}></i>
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        marginLeft: '12px'
                    }}>Anytime at your doorstep</span>
                </li>
                <li className="d-flex align-items-center mb-3" style={{ marginBottom: '1.5rem' }}>
                    <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#4E5ED0' }}></i>
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        marginLeft: '12px'
                    }}>Quality Assurance</span>
                </li>
            </ul>
        </div>
    </div>
</div>

        </>
    );
}

export default Home;
