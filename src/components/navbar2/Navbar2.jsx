import { useState } from 'react';
import Link from './../link/Link';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Navbar2 = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', component: 'Home' },
        { id: 2, path: '/about', component: 'About' },
        { id: 3, path: '/services', component: 'Services' },
        { id: 4, path: '/contact', component: 'Contact' },
        { id: 5, path: '/products', component: 'Products' }
    ];

    return (
        <nav className='bg-yellow-200 p-6 flex items-center md:justify-between' >
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose className='text-3xl' /> : <IoMenu className='text-3xl' />
                }
            </div>
            <ul className={`md:flex duration-1000 absolute md:static bg-yellow-200 ${open ? 'left-0 top-[70px]' : 'top-[70px] -left-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            <h3 className='text-3xl font-semibold pl-4 md:pr-6'>nextCloud</h3>
        </nav>
    );
};

export default Navbar2;