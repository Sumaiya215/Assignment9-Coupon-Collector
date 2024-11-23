import { Link, NavLink, useLocation } from "react-router-dom";
import './Header.css'
import logo from '../../assets/logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandItch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePeople } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { RiAccountBoxFill } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
    const{user , signOutUser} = useContext(AuthContext);
    const location = useLocation();
    console.log(user);

    const handleSignOut = () =>{
        signOutUser()
        .then(() =>{
            console.log('user sign out successfully')
        })
        .catch(error => console.log('ERROR', error.message))
    }

    const links= <>
      <li className="font-bold mr-2 "><NavLink to="/"><IoHomeOutline />Home</NavLink></li>
      <li className="font-bold mr-2"><NavLink to="/brands"><TbBrandItch />Brands</NavLink></li>
      {
        user && <>
        <li className="font-bold mr-2"><NavLink to="/myProfile"><CgProfile /> My Profile</NavLink></li>
        <li className="font-bold mr-2"><NavLink to="/updateProfile"><CgProfile />Update Profile</NavLink></li>
        </>
      }
      
    </>
    return (
        <div>
        <div>
            { user && location.pathname === '/' && 
            <h2 className="text-xl font-bold text-center mt-4">Welcome to CouponZ, 
            {user.displayName}</h2>

              }
        </div>
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
              
                <img className="w-[100px] ml-3" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

            {
                    user ?
                    <>
                    <img className="w-[30px] h-[25px] rounded-full mr-3" src={user.photoURL} alt="user" />
                    <span>{user.email}</span>
                    <a onClick={handleSignOut} className="btn mx-3">Log Out</a>
                    </>
                    :
                    <>
                      <Link to="/login" className="btn mr-3"><IoLogInOutline /> Login</Link>
                      <Link to="/register" className="btn mr-3"><RiAccountBoxFill /> Register</Link>
                   </>
                }
                
            </div>
        </div>
        </div>
    );
};

export default Header;