import img from './img.png'
import { Link } from 'react-router-dom'
import facebook from './facebook.png';
import insta from './insta.png';
import twit from './twit.png';
import React from 'react';
import { useState,useEffect } from 'react';

export const Login = () =>
    {
       const initialValues={username:" ",password:" "};
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
                    if(values.username===" ")
                        {
                           errors.username="emailid is required!";
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
                     return errors;
                         

                         
                                
                          
                                
                         
                         
                };
        return (
           
            <div className="bg-gradient-to-r from-[#FE8484] to-[#99EDC3] h-screen w-[100%]">
                <p className="text-5xl text-white justify-center flex absolute top-[5%] left-[43%]  shadow-2xl"><b>SIGN IN </b></p>
                 
              <div className="bg-white w-[60%] h-[65%] absolute top-[24%] left-[18%] rounded-[50px]  shadow-2xl shadow-black">
                <img src={img} className="absolute top-[0%] left-[45%] h-[100%] rounded-[50px]"/>
             <form onSubmit={handleSubmit}> 
               
                <input type="email"  placeholder="Enter Email" name="username"  values={formData.username} className="absolute top-[15%] left-[5%] placeholder-black text-black p-[20px] w-[28%]  border-b-2 border-black" onChange={handleChange}  />
                <p className="absolute top-[35%] left-[5%] text-red-600"> {Ferrors.username}</p>
                
                <input type="password"  name="password" placeholder="Enter password" values={formData.password}  className="absolute top-[50%] left-[5%] placeholder-black border-b-2 border-black text-black p-[20px] w-[28%]" onChange={handleChange}></input>
                <p className="absolute top-[65%] left-[5%] text-red-600"> {Ferrors.password}</p>
                <button type="submit" name="logsub" value="login" className="absolute top-[75%]  left-[7%] bg-[#5f9ea0] p-[10px] w-[80px] border-none rounded-[40px] shadow-lg shadow-black"><b>login</b></button >
                <Link className="absolute top-[88%] text-xl text-red-700 left-[5%] underline" to='/Signup'>Don't have an account ? - Signup</Link>
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
            </div>
        );
    }