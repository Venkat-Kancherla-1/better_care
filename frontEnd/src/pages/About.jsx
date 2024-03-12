import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import about from '../assets/icons/about.jpg'
function About() {
    return (
        <>
            <Header/>
            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                src={about}
                                
                                alt="image"
                                className='rounded-lg'
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Empowering Mental Wellness with Better Care
                            </h2>
                            <p className="mt-6 text-gray-600">
                            Welcome to our About Us page, where we share the story behind our mission to revolutionize mental health support. Founded by a team of passionate individuals dedicated to making a positive impact, our platform strives to provide accessible and engaging tools for mental well-being. Learn more about our values, vision, and the team driving our mission forward. Join us on our journey to empower individuals worldwide to prioritize their mental health and live their best lives.
                            </p>
                            <p className="mt-4 text-gray-600">
                            Explore the ethos and mission driving Better Care as we strive to redefine mental health support. Delve into our narrative, uncovering the heart behind our commitment to empowering individuals on their journey to well-being. Join us as we champion a world where mental wellness is prioritized and accessible to all through Better Care.
                            </p>
                            <br />
                            <div>
                            <button className='bg-teal-600 text-white rounded-xl' >Contact Us!</button>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
            
    );
}

export default About;