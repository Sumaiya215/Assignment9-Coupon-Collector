import { Link, NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../assets/logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandItch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePeople } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { RiAccountBoxFill } from "react-icons/ri";

const Header = () => {
    const links= <>
      <li className="font-bold mr-2 "><NavLink to="/"><IoHomeOutline />Home</NavLink></li>
      <li className="font-bold mr-2"><NavLink to="/brands"><TbBrandItch />Brands</NavLink></li>
      <li className="font-bold"><NavLink to="/myProfile"><CgProfile /> My Profile</NavLink></li>
      <li className="font-bold mr-2"><NavLink to="/aboutUs"><MdOutlinePeople /> About Us</NavLink></li>
    </>
    return (
        <div className="navbar max-w-[1200px] mx-auto bg-cyan-600 rounded-lg my-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">logo</a> */}
                <img className="w-[100px] ml-3" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn mr-3"><IoLogInOutline /> Login</Link>
                <Link to="/register" className="btn mr-3"><RiAccountBoxFill /> Register</Link>
            </div>
        </div>
    );
};

export default Header;