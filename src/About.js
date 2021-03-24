import React from 'react';
import './About.css';
import img from './img.png';



function About() {
    return (
        <div className="About">
            <div className='Img'>
                <img src={img}></img>
            </div>
            <div className='Details'>
                <h1>About Me</h1>
                <h2>Some description about me!!!</h2>
                <h3>I am Venkata</h3>
                <ul className='SpecificDetails'>
                    <li>
                        <span>Name:</span>
                        <span>Venkata Sai Abhishek</span>
                    </li>
                    <li>
                        <span>Date of birth:</span>
                        <span>28-08-1998</span>
                    </li>
                    <li>
                        <span>Address:</span>
                        <span>Stockholm</span>
                    </li>
                    <li>
                        <span>Zip code:</span>
                        <span></span>
                    </li>
                    <li>
                        <span>Email:</span>
                        <span>abhishekpvs20@gmail.com</span>
                    </li>
                    <li>
                        <span>Phone:</span>
                        <span>+46 768274568</span>
                    </li>
                    <li>
                    <button className='DownloadButton'>Download CV</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
