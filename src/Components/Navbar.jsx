import {links} from '../data'
import CosminLogo from '../assets/CosminLogo.svg'
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const menuRef = useRef(null);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
};

const handleMenuButtonClick = (e) => {
    e.stopPropagation();
    toggleMenu();
}
const handleCLickOutside = (e) => {
    if(menuRef.current && !menuRef.current.contains(e.target)){
        setIsMenuOpen(false)
    }
};

useEffect(() => {
    document.addEventListener('click',handleCLickOutside);
    return () => {
        document.removeEventListener('click',handleCLickOutside);
    }
},[]);

    return (
        <nav className="bg-black font-bold text-orange-500 font-sans flex justify-between items-center px-8 py-4">
            <div>
                <img src={CosminLogo} className='h-60 w-auto'/>
            </div>
            {/* <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8"></div> */}
            <div className="hidden sm:flex gap-x-3">
                {links.map((link)=>{
                const {id,href,text} = link 
                return <a key={id} href={href} className='capitalize text-lg tracking-wide hover:text-slate-200 duration-300 px-2'>
                    {text}
                </a>
            })}
            </div>
            <button className='sm:hidden' onClick={toggleMenu}>
            <svg className="h-8 w-8 fill-current text-white" viewBox="0 0 24 24" onClick={handleMenuButtonClick}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                    />
                </svg>
            </button>
            {isMenuOpen && (
                <div ref={menuRef} className="sm:hidden absolute top-16 right-8 bg-black rounded-lg shadow-lg py-2 px-4">
                {links.map((link) => {
                    const { id, href, text } = link;
                    return (
                        <a key={id} href={href} className='block capitalize text-lg tracking-wide hover:text-slate-200 duration-300' onClick={handleMenuButtonClick}>
                            {text}
                        </a>
                    );
                    })}
                    </div>
            )}
        </nav>
    )
}
export default Navbar