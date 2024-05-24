import loggo2 from './loggo2.png';
import anim2 from './anim2.gif';
import dog1 from './dog1.png';
import dog2 from './dog2.png';
import dog3 from './dog3.png';
import facebook from './facebook.png';
import insta from './insta.png';
import twit from './twit.png';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export const  Homee = () => 
    {
        let navigate = useNavigate(); 
        const routeChange = () =>{ 
          let path = '/Guidelines'; 
          navigate(path);
        }
        const routeChange2 = () =>{ 
            let path = '/Appointment'; 
            navigate(path);
          }
    return(
    <div>
    <div className="w-full bg-[#266D81] h-[135px] gap-[100px] p-[75px] flex justify-end text-xl">
    
    <Link className="no-underline hover:text-orange-300  text-white " to='/'>Home</Link>
    <Link className="no-underline  hover:text-orange-300  text-white"  to='/About'>About us</Link>
    <Link className="no-underline  hover:text-orange-300  text-white" to='/Guidelines'>Guidelines</Link>
    <Link className="no-underline  hover:text-orange-300  text-white" to='/Appointment'>Appointment</Link>
    <Link className="no-underline  hover:text-orange-300  text-white" to='/Login'>Login</Link>
   
    <img src={loggo2} className="absolute left-0 top-[3%] w-[15%] h-[18%]"/>
    <img src={anim2} className="absolute top-[21%] left-[0%] w-[100%] h-[87%]"/>
    <h1 className="absolute left-[43%] top-[113%] text-black text-5xl animate-bounce"><b>Latest Buzz</b></h1>
    <img src={dog1} className="absolute top-[125%] left-[4%] w-[20%] h-[45%] rounded-3xl"/>
    <p className="absolute left-[4%] top-[170%] text-black "><b className="text-2xl">Expert Tips:Pet Parenting 101<br/></b>
    Learn the secrets to being the<br/> best pet parent with <br/>our exclusive guidelines and<br/>expert advice</p>
    
    <button  value="guidelines" name="guide"  className="rounded-full bg-orange-500 p-[23px] hover:opacity-70 text-white absolute top-[195%] left-[4%]" onClick={routeChange}><b className="text-2xl">Guidelines</b></button>
    <img src={dog2} className="absolute top-[125%] left-[38%] w-[20%] h-[45%] rounded-3xl"/>
    <p className="absolute left-[38%] top-[170%] text-black"><b className="text-2xl">New Discounts: Grooming <br/>Excellence Unleashed</b><br/>
    Indulge your pets with our <br/>care Because Dogs Deserve<br/> the Best Fur-ever </p>
    <button value="shop" name="shopnow" className="rounded-full hover:opacity-70 bg-orange-500 p-[23px] text-white absolute top-[195%] left-[38%]" onClick={routeChange2}><b className="text-2xl">book now</b></button>
    <img src={dog3} className="absolute top-[125%] left-[74%] w-[20%] h-[45%] rounded-3xl"/>
    <p className="absolute left-[74%] top-[170%] text-black"><b className="text-2xl">Pawsome Discounts: Limited <br/>Time Offer!</b><br/>
    Grab your furry friend's <br/> favorites at unbeatable prices<br/> before this pawsitivelyamazing deal ends!</p>
    <button value="shop" name="shopnow" className="rounded-full hover:opacity-70 bg-orange-500 p-[23px] text-white absolute top-[195%] left-[74%]" onClick={routeChange2}><b className="text-2xl">book now</b></button>
    <div className="bg-orange-300 w-[80%] h-[50%] absolute top-[215%] left-[10%] rounded-3xl shadow-2xl shadow-black p-[4%]">
        <h1 className="ml-[13%] text-5xl text-white">Spoil your Pet Today, They Deserve It!<br/><br/>
        <p className="ml-[-2%]">Pampering Paws, One Fur at a Time!!</p></h1>
    <button value="shop now" name="shopbox" className="rounded-full hover:opacity-70 bg-orange-500 p-[23px] text-white absolute top-[70%] left-[45%]" onClick={routeChange2}><b className="text-2xl">book now</b></button>
    </div>
</div>
<footer className="bg-black h-[445px] w-[100%] absolute top-[280%] left-0 ">
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