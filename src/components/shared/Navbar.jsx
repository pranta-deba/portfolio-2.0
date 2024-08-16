// src/components/Navbar.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/classNames";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);
    return (
        <div className="relative">
            <nav className="max-w-[1550px] w-[90%] mx-auto fixed top-0 left-0 right-0 bg-transparent text-white p-4 flex items-center justify-between z-50">
                <div className="text-lg font-bold">PD.</div>
                <div className="flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="bg-white text-purple-900 px-4 py-2 rounded-lg"
                    >
                        Menu
                    </button>
                    <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-3xl font-bold transform hover:-translate-y-1 transition duration-400">
                        Figma Outline
                    </button>

                </div>
            </nav>

            <motion.div
                initial={{ opacity: 0, y: "-100vh" }}
                animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : "-100vh" }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed inset-0 bg-black text-white flex flex-col items-center justify-center text-4xl z-30",
                    { hidden: !menuOpen }
                )}
            >
                <a href="#home" className="p-4">
                    Home
                </a>
                <a href="#projects" className="p-4">
                    Projects
                </a>
                <a href="#about" className="p-4">
                    About
                </a>
                <a href="#contact" className="p-4">
                    Contact
                </a>
            </motion.div>
        </div>
    );
};

export default Navbar;
