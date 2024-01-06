import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar";


const MainLayout = () => {
    return (
        <div className="bg-[#EEEFF0]">
           <div className="max-w-screen-xl mx-auto md:px-4 px-0">
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;