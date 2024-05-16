import { useEffect, useRef, useState } from 'react';
import CosminLogo from '../assets/CosminLogo.svg';
import { links } from '../data';
import { motion, MotionConfig } from 'framer-motion';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [active, setActive] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuButtonClick = (e) => {
        e.stopPropagation();
        toggleMenu();
    };

    const handleCLickOutside = (e) => {
        if (!menuRef.current || !menuRef.current.contains(e.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleCLickOutside);
        return () => {
            document.removeEventListener('click', handleCLickOutside);
        };
    }, []);

    return (
        <nav className="bg-black font-bold text-orange-500 font-sans flex justify-between items-center px-8 py-4 relative">
            <div>
                <img src={CosminLogo} className="h-60 w-auto" />
            </div>
            <div className="hidden sm:flex gap-x-3">
                {links.map((link) => {
                    const { id, href, text } = link;
                    return (
                        <a
                            key={id}
                            href={href}
                            className="capitalize text-lg tracking-wide hover:text-slate-200 duration-300 px-2"
                        >
                            {text}
                        </a>
                    );
                })}
            </div>
            <div className="sm:hidden">
                <MotionConfig   transition={{
                            duration: 0.5,
                            ease:"easeInOut"
                        }}>
                <motion.button
                initial={false}
                onClick={() => setActive((pv) => !pv)}
                 className="relative h-20 w-20 rounded-full bg-white/transition-colors"
                 animate={active ? "open" : "closed"}>
                    <motion.span style={{
                        left:"50%", 
                        top:"35%", 
                        x: "-50%",
                         y:"-50%"
                    }} className='absolute h-1 w-10 bg-white'
                        variants={{
                            open: {
                                rotate: ["0deg","0deg","45deg"],
                                top: ["35%","50%","50%"],
                            }, 
                            closed: {
                                rotate: ["45deg","0deg","0deg"],
                                top: ["50%","50%","35%"],
                            },
                        }}
                    />
                    <motion.span style={{
                        left:"50%", 
                        top:"50%", 
                        x: "-50%",
                         y:"-50%"
                    }} className='absolute h-1 w-10 bg-white'
                    variants={{
                        open: {
                            rotate: ["0deg","0deg","-45deg"],
                        }, 
                        closed: {
                            rotate: ["-45deg","0deg","0deg"],
                        },
                    }}
                      
                    />
                    <motion.span style={{
                        left:"calc(50% + 10px)", 
                        bottom:"35%", 
                        x: "-50%",
                         y:"50%"
                    }} className='absolute h-1 w-5 bg-white'
                    variants={{
                        open: {
                            rotate: ["0deg","0deg","45deg"],
                            left: "50%",
                            bottom:["35%", "50%","50%"],
                        }, 
                        closed: {
                            rotate: ["45deg","0deg","0deg"],
                            left:"calc(50% + 10px)",
                            bottom:["50%","50%","35%"],
                        },
                    }}/>
                </motion.button>
                </MotionConfig>
                {isMenuOpen && (
                    <div
                        ref={menuRef}
                        className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="bg-black bg-opacity-75 rounded-lg shadow-lg py-2 px-4">
                            {links.map((link) => {
                                const { id, href, text } = link;
                                return (
                                    <a
                                        key={id}
                                        href={href}
                                        className="block capitalize text-xl tracking-wide hover:text-slate-200 duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {text}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
