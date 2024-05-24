import signupimg from './signupimg.png'
import facebook from './facebook.png';
import insta from './insta.png';
import twit from './twit.png';
import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import loggo2 from './loggo2.png';

export const Signup = () =>
   {
    //  const initialValues={name:" ",username:" ",password:" ",phoneno:" "};
    //   const[formData,setFormData]=useState(initialValues);
    //     const [Ferrors, setErrors] = useState({});
    //     const[isSubmit,setIsSubmit]=useState(false);
    //     const handleChange = (e) =>
    //       {
    //           const {name,value} = e.target;
    //           setFormData({
    //               ...formData,[name]:value
    //           });
    //       };
    //       const handleSubmit = (e) => {
    //         e.preventDefault();
    //         setErrors(validate(formData));
    //         setIsSubmit(true);
           

    //     };
    //     useEffect(()=>{
    //       if(Object.keys(Ferrors).length===0 && isSubmit)//if no erros then submit form 
    //      {
    //          console.log(formData);
    //          window.location.href='/';
    //      }
    //   });
    //   const validate = (values) =>
    //     {
    //         let errors={};
    //         if(values.name===" ")
    //             {
    //                errors.name="name is required!";
    //             }
    //        if(values.username===" ")
    //         {
    //           errors.username="emailid is required";
    //         }
    //         else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.username))
    //           {
    //               errors.username="emailid is not valid!";
    //           }
            
           
          
    //         if(values.password===" ")
    //                 {
    //                     errors.password="password is required!";
    //                 }
    //         else if(values.password.length < 8)
    //         {
    //                           errors.password="password must be 8 characters";
    //         }
    //         if(values.phoneno===" ")
    //           {
    //             errors.phoneno="phone number is required!";
    //           }
    //           else if(values.phoneno <= 10)
    //             {
    //               errors.phoneno="phone number must be 10 digits!";
    //             }
    //          return errors;
                 

                 
                        
                  
                        
                 
                 
    //     };
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
              formId: 'd375ee9d-0c3c-4f15-9bee-33a68ef41cf3',
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
            formId: 'd375ee9d-0c3c-4f15-9bee-33a68ef41cf3',
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
       
          
         
    
   
           
            
            <div className="bg-white w-[60%] h-[85%] absolute top-[25%] left-[20%] shadow-black shadow-2xl rounded-[50px]">
            <p className=" ml-[20%] text-2xl animate-bounce"><b>SIGN-IN</b> </p>
               <img src={signupimg} className="absolute top-[0%] left-[45%] w-[55%] h-[100%] rounded-[50px]"/>
               <div id="hubspotForm" className="w-[30%] absolute top-[13%] left-[5%]">
    </div>
              {/* <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Username" values={formData.name}  className="absolute top-[10%] left-[5%] text-black placeholder-black p-[20px] w-[28%] border-b-2 border-black" onChange={handleChange}></input>
               <p className="absolute top-[23%] left-[5%] text-red-600">{Ferrors.name}</p>
                <input type="email" name="username" values={formData.username} className="absolute top-[33%] left-[5%] border-black border-b-2 p-[20px] w-[28%] placeholder-black"  placeholder="Enter Emailid" onChange={handleChange}></input>
                <p className="absolute top-[45%] left-[5%]  text-red-600">{Ferrors.username}</p>
                <input type="password"   name="password" placeholder="enter password" values={formData.password} className="absolute top-[57%] placeholder-black left-[5%] border-black border-b-2 p-[20px] w-[28%]" onChange={handleChange}></input>
                <p className="absolute top-[69%] left-[5%]  text-red-600">{Ferrors.password}</p>
                 <input type="text" name="phoneno"  placeholder="Enter phoneno." values={formData.phoneno} className="absolute top-[78%] placeholder-black left-[5%] border-black border-b-2 p-[20px] w-[28%]" onChange={handleChange}></input>
                 <p className="absolute top-[90%] left-[5%]  text-red-600">{Ferrors.phoneno}</p> */}
              
              {/* </form> */}
            </div>
            <footer className="bg-black h-[445px] w-[100%] absolute top-[112%] left-0 ">
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


   
    