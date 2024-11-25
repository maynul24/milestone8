import React, { useState } from 'react';
import Link from './Link/Link';
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/services", name: "Services" },
        { id: 5, path: "/user/:id/:name", name: "User Details" },
      ]   
    return (
        <nav className=''>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoIosClose/> : <RiMenu2Fill />
                }
            
            </div>
            <ul className={`md:flex absolute ${open ? '' : 'hidden'} bg-yellow-300 px-6`}>
            {
                 routes.map(route => <Link key={route.id} route={route}></Link>
                )
            }
            </ul>
        </nav>
    );
};

export default NavBar;