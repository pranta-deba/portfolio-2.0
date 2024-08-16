import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Root = () => {

    return (
        <div>
            <Navbar />
            <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
                <div className="absolute pointer-events-none inset-0  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="max-w-[1550px] w-[90%] mx-auto pt-[75px] relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
                    <Outlet />
                    <div>
                        dd
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;