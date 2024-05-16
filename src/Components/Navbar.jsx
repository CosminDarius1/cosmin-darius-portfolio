import { useEffect, useRef, useState } from 'react';
import CosminLogo from '../assets/CosminLogo.svg';
import { links } from '../data';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevOpen) => !prevOpen);
        setActive((prevActive) => !prevActive);
    };

    const handleMenuButtonClick = (e) => {
        e.stopPropagation();
        toggleMenu();
    };

    const handleCLickOutside = (e) => {
        if (!menuRef.current || !menuRef.current.contains(e.target)) {
            setIsMenuOpen(false);
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleCLickOutside);
        return () => {
            document.removeEventListener('click', handleCLickOutside);
        };
    }, []);

    const menuVariants = {
        initial: { scaleY: 0, opacity: 0, originY: 0 },
        animate: { scaleY: 1, opacity: 1, originY: 0, transition: { duration: 0.5 } },
        exit: { scaleY: 0, opacity: 0, originY: 0, transition: { duration: 0.5 } },
    };

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
                <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <motion.button
                        initial={false}
                        onClick={handleMenuButtonClick}
                        className="relative z-50 h-20 w-20 rounded-full bg-black transition-colors"
                        animate={active ? "open" : "closed"}
                    >
                        <motion.span
                            style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
                            className="absolute h-1 w-10 bg-white"
                            variants={{
                                open: { rotate: "45deg", top: "50%" },
                                closed: { rotate: "0deg", top: "35%" },
                            }}
                        />
                        <motion.span
                            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
                            className="absolute h-1 w-10 bg-white"
                            variants={{
                                open: { rotate: "-45deg" },
                                closed: { rotate: "0deg" },
                            }}
                        />
                        <motion.span
                            style={{ left: "calc(50% + 10px)", bottom: "35%", x: "-50%", y: "50%" }}
                            className="absolute h-1 w-5 bg-white"
                            variants={{
                                open: { rotate: "45deg", left: "50%", bottom: "50%" },
                                closed: { rotate: "0deg", left: "calc(50% + 10px)", bottom: "35%" },
                            }}
                        />
                    </motion.button>
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                key="menu"
                                ref={menuRef}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={menuVariants}
                                className="fixed left-0 top-0 w-full h-full bg-yellow text-white flex justify-center items-center"
                            >
                                <div className="bg-orange-500 bg-opacity-75 shadow-lg px-4 w-full h-full flex justify-center flex-col items-center">
                                    {links.map((link) => {
                                        const { id, href, text } = link;
                                        return (
                                            <a
                                                key={id}
                                                href={href}
                                                className="block capitalize text-4xl tracking-wide text-black hover:text-white"
                                            >
                                                {text}
                                            </a>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </MotionConfig>
            </div>
        </nav>
    );
};

export default Navbar;
