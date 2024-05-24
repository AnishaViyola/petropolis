import React from 'react'
import { Link } from 'react-router-dom'
import loggo2 from './loggo2.png';
import banner from './banner.png';
import facebook from './facebook.png';
import insta from './insta.png';
import twit from './twit.png';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';




export const Appointment = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/Bookappointment'; 
    navigate(path);
  }

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
              formId: 'a76e043a-028b-43dd-9ba2-65d9bae2c3e9',
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
            formId: 'a76e043a-028b-43dd-9ba2-65d9bae2c3e9',
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

        <div className="w-full bg-[#266D81] h-[135px] gap-[100px] p-[75px] flex justify-end text-xl">
    
    <Link className="no-underline hover:text-orange-300  text-white " to='/'>Home</Link>
    <Link className="no-underline  hover:text-orange-300  text-white"  to='/About'>About us</Link>
    <Link className="no-underline  hover:text-orange-300  text-white" to='/Guidelines'>Guidelines</Link>
    <Link className="no-underline  hover:text-orange-300  text-white" to='/Appointment'>Appointment</Link>
    <Link className="no-underline  hover:text-orange-300  text-white" to='/Login'>Login</Link>
    <img src={loggo2} className="absolute left-0 top-[3%] w-[15%] h-[18%]"/>
    </div>
    <div >
      <img src={banner} className="h-[2%] w-full"/>
      <h1 className="absolute top-[50%] left-[15%] text-7xl"><b>Pet Grooming Service At Home</b><br/><br/>
      <p className="text-2xl ml-[21%]">Book pet grooming service at home that comes to you<br/><br/>
      </p>
      <p className="text-2xl ml-[-0%]"><b>Apart from bathing place and personel towels your pet groomer will take care of everything !</b>
</p><br/><br/>
<center><a href="#petdetails" className="text-5xl bg-gradient-to-br from-red-400 to-orange-300  hover:bg-gradient-to-bl p-[25px] rounded-[20px] hover:text-white">Book Now</a></center>
</h1>
      <p className="flex justify-center text-4xl p-[2%]"><b>Dog & cat Grooming packages</b>
      </p>
      <div className="bg-orange-100 w-[25%] h-[80%] absolute top-[160%] left-[3%] shadow-2xl shadow-black p-[45px] ">
        
       <ul className="list-disc">
        <li className="text-3xl list-none"><b>Spa Bath</b>  ₹1200</li><br/><hr></hr><br/>
        <li className="text-2xl">bath with shampoo & conditioner</li><br/>
        <li className="text-2xl">Blow Dry</li><br/>
        <li className="text-2xl">Nail Clipping</li><br/>
        <li className="text-2xl">Paw Massage</li><br/>
        <li className="text-2xl">Ear cleaning</li>




       </ul>

      </div>
      <div className="bg-orange-100 w-[25%] h-[80%] absolute top-[160%] left-[37%] shadow-2xl shadow-black p-[45px] ">
        
       <ul className="list-disc">
        <li className="text-3xl list-none"><b>Full Service</b>  ₹1620</li><br/><hr></hr><br/>
        <li className="text-2xl">bath with shampoo & conditioner</li><br/>
        <li className="text-2xl">Blow Dry</li><br/>
        <li className="text-2xl">Nail Clipping</li><br/>
        <li className="text-2xl">Full Body trimming/Styling</li><br/>
        <li className="text-2xl">Ear cleaning</li><br/>
        <li className="text-2xl">Anti-Tick Cleaning </li><br/>
        <li className="text-2xl">Teeth cleaning</li>
      </ul>

      </div>
      <div className="bg-orange-100 w-[25%] h-[80%] absolute top-[160%] left-[70%] shadow-2xl shadow-black p-[45px] ">
        
       <ul className="list-disc">
        <li className="text-3xl list-none"><b>Trans-fur-mation</b>  ₹1300</li><br/><hr></hr><br/>
        <li className="text-2xl">Nail Clipping</li><br/>
        <li className="text-2xl">Full Body trimming/Styling</li><br/>
        <li className="text-2xl">Ear cleaning</li><br/>
      </ul>

      </div>
      <div className="absolute top-[265%] left-[0%] bg-gray-100 h-[130%] w-[100%] p-[3%]" id="petdetails">
       <center><p className="text-5xl text-gray-600"><b>Add Pet Details</b> </p></center>
       
       <div id="hubspotForm" className="w-[40%] absolute top-[15%] left-[30%]">
    </div>
      {/* <form>
      <select className="bg-gray-400 w-[15%] p-[15px] rounded-[15px] mt-[8%]" required>
        <option value="choose your pet" selected disabled>choose your pet</option>
        <option value="cat">cat</option>
        <option value="dog">dog</option>
      </select>
      <input type="text" name="breed" className="bg-gray-400 ml-[10%] rounded-[15px] w-[25%] p-[1%] placeholder-black" placeholder="Breed of your pet?" required></input>
      <select className="bg-gray-400 w-[15%] p-[15px] rounded-[15px] ml-[8%]" required>
        <option value="Gender" selected disabled>Gender Of Your Pet?</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
      <select className="bg-gray-400 w-[15%] p-[15px] rounded-[15px] ml-[8%]" required>
        <option value="size" selected disabled>Size Of Your Pet?</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <center><select className="bg-gray-400 w-[20%] p-[15px] rounded-[15px] mt-[5%] " required>
        <option value="nature" selected disabled>How aggressive is Your Pet?</option>
        <option value="Low">Low</option>
        <option value="Normal">Normal</option>
        <option value="High">High</option>
      </select>
      <select className="bg-gray-400 w-[20%] p-[15px] rounded-[15px] mt-[5%] ml-[3%]" required>
        <option value="package" selected disabled>choose package</option>
        <option value="spa bath">Spa bath</option>
        <option value="full service">Full service</option>
        <option value="trans-fur-mation">trans-fur-mation</option></select><br/><br/><br/><br/>
      <button  type="submit" value="book" className="text-2xl bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 p-[15px] rounded-[10px]" onClick={routeChange}>Book Groomer</button></center>
      
      </form> */}
     

      </div>
    </div>
    <footer className="bg-black h-[445px] w-[100%] absolute top-[395%] left-0 ">
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
  )
}

