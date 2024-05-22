import { Link } from 'react-router-dom'
import loggo2 from './loggo2.png';
import aboutimg from './aboutimg.png'
import facebook from './facebook.png';
import insta from './insta.png';
import twit from './twit.png';
export const About = () =>
    {
        return (<div className="w-full bg-[#266D81] h-[135px] gap-[90px] p-[75px] flex justify-end text-xl">
    
        <Link className="no-underline hover:text-orange-300  text-white" to='/'>Home</Link>
        <Link className="no-underline  hover:text-orange-300  text-white"  to='/About'>About us</Link>
        <Link className="no-underline  hover:text-orange-300  text-white" to='/Guidelines'>Guidelines</Link>
        <Link className="no-underline  hover:text-orange-300  text-white" to='/Appointment'>Appointment</Link>
        <Link className="no-underline  hover:text-orange-300  text-white" to='/Login'>Login</Link>
        <img src={loggo2} className="absolute left-0 top-[3%] w-[15%] h-[18%]"/>
        <div className="bg-orange-300 h-[120%] w-[100%] left-[0%] absolute top-[21%]">
            <div className="bg-white rounded-[50px] h-[60%] ml-[5%] mt-[2%] w-[90%] shadow-2xl shadow-black justify-start">
               <br/><br/> <b className="text-4xl ml-[3%] ">About Petropolis</b>
                <p className="text-2xl ml-[3%] pt-[75px]">At Petropolis, we're more than just a pet store - we're a community<br/> of pet lovers dedicated to providing the best for your furry friends.<br/><br/>

                From premium pet foods to expert guidelines for pet parents,<br/> we've got everything you need to keep your pets happy and healthy.<br/><br/>

Join us in creating a paradise for pets, one wagging tail at a time!
</p>
 <img src={aboutimg} className="w-[32%] h-[60.3%] absolute top-[3.5%] left-[63%] rounded-[50px]"/>
 </div></div>
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
    </footer></div>);
    }