import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
     const [open, setOpen] = useState(false);
     const routes = [
          { id: 1, name: 'Home', path: '/Home' },
          { id: 2, name: 'Products', path: '/Home' },
          { id: 3, name: 'Orders', path: '/Home' },
          { id: 4, name: 'Contact', path: '/Home' },
          { id: 5, name: 'About', path: '/Home' }
     ]
     return (
          <nav className='bg-gray-400 py-2'>
               <div onClick={() => setOpen(!open)} className="h-6 w-6 m-2 md:hidden cursor-pointer">
                    {
                         open ? <XMarkIcon />
                              : <Bars3Icon />
                    }
               </div>

               <ul className={`font-bold w-full bg-gray-400 md:flex justify-center  absolute md:static duration-300 ease-in ${open ? 'top-10' : 'top-[-150px]'}`}>
                    {
                         routes.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                    }
               </ul>
          </nav>
     );
};

export default Navbar;