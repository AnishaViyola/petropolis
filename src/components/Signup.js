import signupimg from './signupimg.png'
import facebook from './facebook.png';
import insta from './insta.png';
import twit from './twit.png';
import React from 'react';
import { useState,useEffect } from 'react';
export const Signup = () =>
    {
      const initialValues={name:" ",username:" ",password:" ",phoneno:" "};
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
             window.location.href='/';
         }
      });
      const validate = (values) =>
        {
            let errors={};
            if(values.name===" ")
                {
                   errors.name="name is required!";
                }
           if(values.username===" ")
            {
              errors.username="emailid is required";
            }
            else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.username))
              {
                  errors.username="emailid is not valid!";
              }
            
           
          
            if(values.password===" ")
                    {
                        errors.password="password is required!";
                    }
            else if(values.password.length < 8)
            {
                              errors.password="password must be 8 characters";
            }
            if(values.phoneno===" ")
              {
                errors.phoneno="phone number is required!";
              }
              else if(values.phoneno <= 10)
                {
                  errors.phoneno="phone number must be 10 digits!";
                }
             return errors;
                 

                 
                        
                  
                        
                 
                 
        };
        return (
        <div className="bg-gradient-to-r from-[#74b3ec] to-pink-300 h-screen">
            
            <div className="bg-white w-[55%] h-[85%] absolute top-[12%] left-[22%] shadow-black shadow-2xl rounded-[50px]">
               <img src={signupimg} className="absolute top-[0%] left-[45%] w-[55%] h-[100%] rounded-[50px]"/>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Username" values={formData.name}  className="absolute top-[10%] left-[5%] text-black placeholder-black p-[20px] w-[28%] border-b-2 border-black" onChange={handleChange}></input>
               <p className="absolute top-[23%] left-[5%] text-red-600">{Ferrors.name}</p>
                <input type="email" name="username" values={formData.username} className="absolute top-[33%] left-[5%] border-black border-b-2 p-[20px] w-[28%] placeholder-black"  placeholder="Enter Emailid" onChange={handleChange}></input>
                <p className="absolute top-[45%] left-[5%]  text-red-600">{Ferrors.username}</p>
                <input type="password"   name="password" placeholder="enter password" values={formData.password} className="absolute top-[57%] placeholder-black left-[5%] border-black border-b-2 p-[20px] w-[28%]" onChange={handleChange}></input>
                <p className="absolute top-[69%] left-[5%]  text-red-600">{Ferrors.password}</p>
                 <input type="text" name="phoneno"  placeholder="Enter phoneno." values={formData.phoneno} className="absolute top-[78%] placeholder-black left-[5%] border-black border-b-2 p-[20px] w-[28%]" onChange={handleChange}></input>
                 <p className="absolute top-[90%] left-[5%]  text-red-600">{Ferrors.phoneno}</p>
              <button type="submit" className="absolute top-[90%]  left-[35%] bg-[#5f9ea0]  p-[10px] w-[80px] border-none rounded-[40px] shadow-lg shadow-black" value="sub" name="subbtn"><b>signup</b></button>
              
              </form>
            </div>
            <footer className="bg-black h-[445px] w-[100%] absolute top-[100%] left-0 ">
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
        </div>);
    }