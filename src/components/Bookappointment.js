import React from 'react'
import { Link } from 'react-router-dom'
import loggo2 from './loggo2.png';
import facebook from './facebook.png';
import insta from './insta.png';
import twit from './twit.png';
import { useState,useEffect } from 'react';




export const  Bookappointment = () => {
  const initialValues={name:" ",username:" ",phone:" ",street:" ",city:" ",state:" "};
  const[formData,setFormData]=useState(initialValues);
  const [Ferrors, setErrors] = useState({});
  const[isSubmit,setIsSubmit]=useState(false);
  const handleChange = (e) =>
    {
        const {name,value} = e.target;
        setFormData({
            ...formData,[name]:value
        });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(formData));
      setIsSubmit(true);
     

  };
  useEffect(()=>{
    if(Object.keys(Ferrors).length===0 && isSubmit)//if no erros then submit form 
   {
       console.log(formData);
       alert("groomer is booked ! ");
       window.location.href='/';
   }
});
const validate = (values) =>
  {
      let errors={};
      if(values.name===" ")
          {
             errors.name="*name is required!";
          }
     if(values.username===" ")
      {
        errors.username="*emailid is required";
      }
      else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.username))
        {
            errors.username="*emailid is not valid!";
        }
      if(values.phone===" ")
          {
              errors.phone="*phone  number is required!";
          }
      if(values.street===" ")
            {
              errors.street="*street is required";
            }
  
  if(values.city===" ")
    {
      errors.city="*city is required!";
    }
    if(values.state===" ")
      {
        errors.state="*state is required!"
      }

   return errors;
    }

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
    <div className="bg-orange-100 h-screen">
       <center> <form onSubmit={handleSubmit}> 
            <p className="font-extrabold text-5xl text-gray-600 p-[5%]">Please Enter Your Details</p>
            <input type="text"  name="name" values={formData.name} className=" text-black w-[35%] absolute top-[55%] left-[13%] p-[15px] rounded-[5px] placeholder-black drop-shadow-2xl " placeholder="Enter your name" onChange={handleChange}></input>
           <p className=" text-red-600 absolute top-[65%] left-[13%]">{Ferrors.name}</p>
            <input type="email" name="username" values={formData.username} className="text-black absolute top-[55%] left-[53%] p-[15px] rounded-[5px] w-[35%] drop-shadow-2xl placeholder-black" placeholder="Enter your email id" onChange={handleChange}></input>
           <p className="text-red-600 absolute top-[65%] left-[53%]">{Ferrors.username}</p>
            <input type="text" name="phone" values={formData.phone} className="text-black absolute top-[70%] left-[13%] p-[15px] rounded-[5px] w-[35%] drop-shadow-2xl placeholder-black" placeholder="Enter Your phone number" onChange={handleChange}></input>
            <p className="text-red-600 absolute top-[80%] left-[13%]">{Ferrors.phone}</p>

            <input type="text" name="street" values={formData.street} className="text-black absolute top-[70%] left-[53%] p-[15px] rounded-[5px] w-[35%] drop-shadow-2xl placeholder-black" placeholder="Localty/Street" onChange={handleChange}></input>
            <p className="text-red-600 absolute top-[80%] left-[53%]">{Ferrors.street}</p>

            <input type="text" name="city" values={formData.city} className="text-black absolute top-[85%] left-[13%] p-[15px] rounded-[5px] w-[35%] drop-shadow-2xl placeholder-black" placeholder="City" onChange={handleChange}></input>
            <p className="text-red-600 absolute top-[95%] left-[13%]">{Ferrors.city}</p>

            <input type="text"name="state" values={formData.state} className="text-black absolute top-[85%] left-[53%] p-[15px] rounded-[5px] w-[35%] drop-shadow-2xl placeholder-black" placeholder="State" onChange={handleChange}></input>
            <p className="text-red-600 absolute top-[95%] left-[53%]">{Ferrors.state}</p>

            <button type="submit" className=" text-2xl absolute top-[100%] left-[45%] bg-gradient-to-br from-red-400 to-orange-300 drop-shadow-2xl  p-[20px] rounded-[20px] hover:text-white">confirm</button>

        </form></center>

    </div>
    <footer className="bg-black h-[445px] w-[100%] absolute top-[120%] left-0 ">
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

