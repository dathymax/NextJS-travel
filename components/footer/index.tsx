import React from 'react'
import './footer.css'

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="box">
                    <strong>Travel</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, at?</p>

                    <div className="social">
                        <a href="" aria-label='facebook' title='facebook'>
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="" aria-label='twitter' title='twitter'>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" aria-label='instagram' title='instagram'>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="box">
                    <strong>Links</strong>
                    <ul>
                        <li><a href="#home">home</a></li>
                        <li><a href="#trending">trending</a></li>
                        <li><a href="#destinations">destinations</a></li>
                        <li><a href="#testimonials">testimonials</a></li>
                        <li><a href="#">book online</a></li>
                    </ul>
                </div>

                <div className="box">
                    <strong>Extra Links</strong>
                    <ul>
                        <li><a href="#search">find destinations</a></li>
                        <li><a href="#explore">explore nearby</a></li>
                        <li><a href="#subscribe">subscribe</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">term of use</a></li>
                    </ul>
                </div>

                <div className="box">
                    <strong>Contact</strong>
                    <span><i className="fas fa-map-marker-alt"></i>Hà Nội, VN</span>
                    <span><i className="fas fa-envelope"></i>Example@gmail.com</span>
                    <span><i className="fas fa-phone-square-alt"></i>098.76.54.321</span>
                </div>
            </div>

            <span className="copyright">
                All Copyright Reserved 2023
            </span>
        </footer>
    )
}

export default Footer