import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => alert("logout successfully"))
      .catch((error) => console.log(error));
  };
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Service</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
      {user?<li><Link to="/bookingItems">Booking Item</Link></li>:<></>}
    </>
  );
  return (
    <div className="navbar bg-base-100 my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CarWo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn btn-primary" onClick={handleLogout}>
            logout
          </button>
        ) : (
          <Link to="/login"><button className="btn btn-secondary" >login</button></Link>
        )}
        <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
