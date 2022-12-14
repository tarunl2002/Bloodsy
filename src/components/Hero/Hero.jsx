import React from 'react'
import Header from './Header'
import './Hero.css'
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            <div className="slogan">
                <div className='shade'></div>
                <span>Be the reason for someone's Heartbeat</span>
            </div>
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Donate</span>
                    <span> Your</span>
                </div>
                <div>
                    <span className='red'>Blood</span><span> Today</span>
                </div>
                <div>
                    <span>Saving a life  won't cost you anything. Go ahead and donate blood.</span>
                </div>
            </div>
            <div className="figures">
                <div>
                    <span>5K+</span>
                    <span>People Donated</span>
                </div>
                <div>
                    <span>15K+</span>
                    <span>Registered</span>
                </div>
                <div>
                    <span>8+</span>
                    <span>Requests Everyday</span>
                </div>
            </div>
            
        </div>
        <div className="right-h">
            
            <button className="btn reg">Register</button>
            
            <div>
                <img src={Heart} alt="" className='heart'/>
            </div>
            <div className="hero-buttons">
                <button className='btn'>Donate Now</button>
                <button className='btn'>Make a request</button>
            </div>
            <div className="social">
                <ul>
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>

        </div>

        <div className="img-back">
                <img src={hero_image_back} alt="" />
        </div>
    </div>
  )
}

export default Hero