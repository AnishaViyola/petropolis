import { Link } from 'react-router-dom'
import loggo2 from './loggo2.png';
import dogfood from './dogfood.png';
import facebook from './facebook.png';
import insta from './insta.png';
import twit from './twit.png';

export const Guidelines = () =>
    {
        return (
            <div>
            <div className="w-full bg-[#266D81] h-[135px] gap-[90px] p-[75px] flex justify-end text-xl">
    
    <Link className="no-underline hover:text-orange-300  text-white" to='/'>Home</Link>
    <Link className="no-underline  hover:text-orange-300  text-white"  to='/About'>About us</Link>
    <Link className="no-underline  hover:text-orange-300  text-white" to='/Guidelines'>Guidelines</Link>
    <Link className="no-underline  hover:text-orange-300  text-white" to='/Appointment'>Appointment</Link>
    <Link className="no-underline  hover:text-orange-300  text-white" to='/Login'>Login</Link>
    <img src={loggo2} className="absolute left-0 top-[3%] w-[15%] h-[18%]"/></div>

    <div className="bg-orange-300 h-[150%] w-[100%] absolute top-[21%] left-[0%]">
        <p className="text-5xl text-black justify-center flex mt-[3%]"><b>Are you feeding your  doggo the correct way?</b></p>
        <img src={dogfood} className="absolute top-[16%] left-[37%] w-[25%]"/>
        <h1 className="text-4xl ml-[5%] mt-[7%] text-white"><b>Home-Cooked Food</b><br/><br/><ul className="list-disc">
        <li className="text-2xl">Deficient & unbalanced<br/></li>
       <li className="text-2xl"> Not very time-convenient & costly in the <br/>longer run<br/></li>
       <li className="text-2xl"> Not governed by any guidelines</li></ul></h1>
       <h1 className="text-4xl ml-[72%] mt-[-14%] text-white"><b>Pet Food</b><br/><br/>
       <ul className="list-disc">
        <li className="text-2xl">Nutritionally well-balanced</li>
        <li className="text-2xl">Time convenient & cost-friendly</li>
        <li className="text-2xl">Scientifically approved</li>
        <li className="text-2xl">Made with dog-friendly ingredients</li>
        <li className="text-2xl">Address different biological needs for a <br/>health,active & long-life of your dog</li></ul></h1>

        <p className="text-4xl  text-center mt-[5%]"><b>Feeding Guidelines</b></p>
        <table className="border border-collapse ml-[23%] mt-[3%]">
            <thead>
                <tr>
                   <td className="p-[15px] border text-black"> <th>Breed Size</th></td>
                    <td className="p-[15px] border text-black"><th>2-3 months</th></td>
                    <td className="p-[15px] border text-black"><th>4-6 months</th></td>
                    <td className="p-[15px] border text-black"><th>6-9 months</th></td>
                    <td className="p-[15px] border text-black"><th>9-12 months</th></td>
                    <td className="p-[15px] border text-black"><th>1-2 years</th></td>
                </tr>
            </thead>
            <tbody>
                <tr className="border p-[15px]">
                    <td className="border p-[15px] text-black">Small breads(1-10kg)</td>
                    <td className="border p-[15px] text-black">40g</td>
                    <td className="border p-[15px] text-black">60g</td>
                    <td className="border p-[15px] text-black">100g</td>
                    <td className="border p-[15px] text-black">150g</td>
                    <td className="border p-[15px] text-black">120g</td>




                </tr>
                <tr className="border p-[15px]">
                    <td className="border p-[15px] text-black">Medium breeds(10-25kg)</td>
                    <td className="border p-[15px] text-black">175g</td>
                    <td className="border p-[15px] text-black">240g</td>
                    <td className="border p-[15px] text-black">325g</td>
                    <td className="border p-[15px] text-black">375g</td>
                    <td className="border p-[15px] text-black">300g</td>





                </tr>
                <tr className="border">
                    <td className="border p-[15px] text-black">Large breeds(25-45kg)</td>
                    <td className="border p-[15px] text-black">200g</td>
                    <td className="border p-[15px] text-black">325g</td>
                    <td className="border p-[15px] text-black">425g</td>
                    <td className="border p-[15px] text-black">475g</td>
                    <td className="border p-[15px] text-black">500g</td>





                </tr>
                <tr className="border">
                    <td className="border p-[15px] text-black">Large breeds(45-80kg)</td>
                    <td className="border p-[15px] text-black">275g</td>
                    <td className="border p-[15px] text-black">475g</td>
                    <td className="border p-[15px] text-black">600g</td>
                    <td className="border p-[15px] text-black">800g</td>
                    <td className="border p-[15px] text-black">850g</td>





                </tr>

            </tbody>
        </table>
        <footer className="bg-black h-[445px] w-[100%] absolute top-[95%] left-0 ">
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