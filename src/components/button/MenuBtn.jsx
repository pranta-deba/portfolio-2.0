import { useState } from "react";
import { motion } from "framer-motion";

const MenuBtn = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.button
            onClick={toggleButton}
            className={`relative m-4 px-12 py-4 uppercase font-bold text-white rounded-3xl overflow-hidden 
        ${isOpen ? "bg-gradient-to-r from-pink-500 to-violet-600" : "bg-blue-500"}`}
            
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <motion.span
                className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                animate={{ y: isOpen ? "0%" : "-100%" }}
            >
                {isOpen ? "Close" : "Menu"}
            </motion.span>
            <motion.span
                className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                animate={{ y: isOpen ? "100%" : "0%" }}
            >
                {isOpen ? "Close" : "Menu"}
            </motion.span>
        </motion.button>
    );
};

export default MenuBtn;