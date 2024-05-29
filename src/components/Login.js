import img from './img.png'
import { Link } from 'react-router-dom'
import facebook from './facebook.png';
import insta from './insta.png';
import twit from './twit.png';
import React from 'react';
import { useState,useEffect } from 'react';
import loggo2 from './loggo2.png';

export const Login = () =>
    {
    
        useEffect(() => {
              
            const existingScript = document.querySelector(`script[src="//js.hsforms.net/forms/embed/v2.js"]`);
        
            if (!existingScript) {
              const script = document.createElement('script');
              script.src = '//js.hsforms.net/forms/embed/v2.js';
              script.type = 'text/javascript';
              script.charset = 'utf-8';
              script.async = true;
        
              script.onload = () => {
                if (window.hbspt) {
                  window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '46242923',
                    formId: '7df9df35-ac63-4eef-8396-b4fe358ca8ab',
                    target: '#hubspotForm'
                  });
                }
              };
        
              document.body.appendChild(script);
            } else {
              // Script already exists, just create the form
              if (window.hbspt) {
                window.hbspt.forms.create({
                  region: 'na1',
                  portalId: '46242923',
                  formId: '7df9df35-ac63-4eef-8396-b4fe358ca8ab',
                  target: '#hubspotForm'
                });
               
              }
            }
        
            // Cleanup function
            return () => {
              const formContainer = document.querySelector('#hubspotForm');
              if (formContainer) {
                formContainer.innerHTML = '';
              
              }
            };
          }, []);  
                
                       

          
          return (
            <div>
            <div className="w-full bg-[#266D81] h-[135px] gap-[90px] p-[75px] flex justify-end text-xl">
    
        <Link className="no-underline hover:text-orange-300  text-white" to='/'>Home</Link>
        <Link className="no-underline  hover:text-orange-300  text-white"  to='/About'>About us</Link>
        <Link className="no-underline  hover:text-orange-300  text-white" to='/Guidelines'>Guidelines</Link>
        <Link className="no-underline  hover:text-orange-300  text-white" to='/Appointment'>Appointment</Link>
        <Link className="no-underline  hover:text-orange-300  text-white" to='/Login'>Login</Link>
        <img src={loggo2} className="absolute left-0 top-[3%] w-[15%] h-[18%]"/>
        </div>
           
        <div className="bg-gradient-to-r from-orange-300 to-yellow-100 h-screen w-[100%]">
           <center> <p className="text-5xl p-[2%] animate-bounce "><b>LOGIN</b></p> </center>
        <div className="bg-white w-[60%] h-[70%] absolute top-[40%] left-[20%] rounded-[50px]  shadow-2xl shadow-black">

               
                 <div id="hubspotForm" className="w-[40%] absolute top-[13%] left-[30%]">
    </div>
    <Link className="absolute top-[70%] text-xl text-red-700 left-[55%] underline" to='/Signup'>Don't have an account ? - Signup</Link>

    </div>

          
              <footer className="bg-black h-[445px] w-[100%] absolute top-[115%] left-0 ">
   <h1 className="text-white ml-[5%] mt-[5%] text-4xl">Contact Us</h1> 
   <p className="text-white text-2xl ml-[5%] mt-[2%]">
    Call :+91-2378956490<br/><br/>
    whatsApp: 2378956490<br/><br/>
    Email:info@petropolis.com</p>
    <img src={facebook} className="absolute top-[40%] left-[48%]"/>
    <img src={insta} className="absolute top-[40%] left-[59%]"/>
    <img src={twit} className="absolute top-[40%] left-[70%]"/>
    <p className="ml-[35%] mt-[5%] text-white text-2xl">&copy 2024 petropolis All rights reserved</p>
    </footer>
    
    </div>
    </div>
        );
    }