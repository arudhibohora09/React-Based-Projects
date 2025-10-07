import React from 'react';
import Logo from '../../assets/logopk.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import {motion} from 'framer-motion';

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-40">
      <div className="container">
        {/* Logo */}
        <div className=' flex items-center justify-between px-20 -mt-5  '>
          <motion.img
           initial={{opacity: 0, y: -100}} animate={{opacity:1, y: 0}} transition={{
                          type: 'spring', stiffness: 100, damping: 10, delay: 0.2,
                        }}  src={Logo} alt="Logo" className="h-[110px] w-auto sm:h-[130px] md:h-[150px] object-contain ml-[-10px] -mt-6" />
          <motion.div  initial={{opacity: 0, y: -100}} animate={{opacity:1, y: 0}} transition={{
                          type: 'spring', stiffness: 100, damping: 10, delay: 0.2,
                        }} >

 
  <GiHamburgerMenu 
   onClick={() => setSidebar(!sidebar)}
  className='text-3xl cursor-pointer'/>
</motion.div>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;

