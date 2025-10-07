import React from 'react';
import BgImage from '../../assets/bg-green.jpg';
import MainVilla from '../../assets/villa.jpg';
import Navbar from '../Navbar/Navbar';
import {motion, scale} from 'framer-motion';
import{FaFacebookF, FaInstagram} from 'react-icons/fa';


const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};



const Hero = () => {
  const[sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage} className='h-screen'>
        <section relative className ='min-h-[750px] w-full'>
            <div className="container">
              { /* Navbar*/ }
<Navbar sidebar=  {sidebar} setSidebar={setSidebar}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                  { /* text content section */ }
                    <div className="text-lightOrange mt-[100px] space-y-28 md:mt-0 p-4">
                        <motion.h1 initial={{opacity: 0, y: -100}} animate={{opacity:1, y: 0}} transition={{
                          type: 'spring', stiffness: 100, damping: 10, delay: 1,
                        }} className='text-7xl font-bold leading-light ml-14'>Welcome Prakriti Farm</motion.h1>
                       <motion.div 
                       initial={{opacity: 0, y: 100}} animate={{opacity:1, y: 0}} transition={{
                          type: 'spring', stiffness: 100, damping: 10, delay: 1,
                        }} 
                       className='relative'>
                        <div className="relative z-10 space-y-4">
                          <h1 className='text-2xl'>Fresh farm,</h1>
                          <h1 className='
                          text-sm opacity-55 leading leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                        </div>
                        <div className="absolute -top-6 -left-10 w-[250px] h-[190px]bg-gray-700/25"></div>
                       </motion.div>
</div>
{ /* image section */ }
<div className='relative'>
<motion.img  
                       initial={{opacity: 0, scale: 0}} animate={{opacity:1, scale: 1}} transition={{
                          type: 'spring', stiffness: 100, damping: 10, delay: 0.4,
                        }} 
src={MainVilla} alt="" className='relative z-40 h-[400px] md:h-[500px] img-shadow rounded-2xl' />

{ /*  Ring */ }
<motion.div 
                       initial={{opacity: 0, y: 100}} animate={{opacity:1, y: 0}} transition={{
                          type: 'spring', stiffness: 100, damping: 10, delay: 0.8,
                        }} 
className='h-[100px] w-[100px] absolute -top-10 -right-10 border-primary border-[20px] rounded-full z-10'></motion.div>

<motion.div  initial={{opacity: 0, y: 100}} animate={{opacity:1, y: 0}} transition={{
                          type: 'spring', stiffness: 100, damping: 10, delay:0.8,
                        }} className='h-[100px] w-[100px] absolute -bottom-10 -left-10 border-primary border-[20px] rounded-full z-10'></motion.div>


  </div>

{ /* Third Section */ }
<div className="text-lightOrange mt-[100px] space-y-28 md:mt-0 p-6">
                        <motion.h1 
                        initial={{opacity: 0, y: -100}} animate={{opacity:1, y: 0}} transition={{
                          type: 'spring', stiffness: 100, damping: 10, delay: 1,
                        }} 
                        className='text-7xl font-bold leading-light ml-14'>Welcome Prakriti Farm</motion.h1>
                       <motion.div 
                       initial={{opacity: 0, y: 100}} animate={{opacity:1, y: 0}} transition={{
                          type: 'spring', stiffness: 100, damping: 10, delay: 1,
                        }} className='relative'>
                        <div className="relative z-10 space-y-4 p-5">
                          <h1 className='text-2xl'>Fresh farm,</h1>
                          <h1 className='
                          text-sm opacity-55 leading leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                        </div>
                        <div className="absolute -top-6 -right-10 w-[250px] h-[190px]bg-darkGray/50"></div>
                       </motion.div>
</div>
</div>
</div>
{ /* Sidebar */ }
{
  sidebar && (
   <div className='absolute top-0 right-0 w-[118px] h-full bg-gradient-to-b from-primary/80 to-primary/80 backdrop-blur-sm z-10'>
  <div className='w-full h-full flex justify-center items-center'>
  <div className= 'flex flex-col justify-center items-center gap-6 text-white'>
    <div className='w-[1px] h-[70px] bg-white'> </div>
    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
       <FaFacebookF className='text-2xl'/>
       </div>
   <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>   
     <FaInstagram className='text-2xl'/>
     </div>
<div className='w-[1px] h-[70px] bg-white'> </div>
  </div>
</div>
</div>
  )
}

</section>
    </main>
  )
}
export default Hero
