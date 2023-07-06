import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UseContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);

  const handleLogOUt = () => {
    logOutUser()
      .then(() => {
        console.log("LogOUt Successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="header-main-parent-div">
      <div className="navbar">
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
              <li>
                <Link className="color" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="color" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="color" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="color" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="color" to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link className="color" to="/contact">
                  Contact
                </Link>
              </li>

              {user?.uid ? (
                <button onClick={handleLogOUt} className="color">
                  LogOut
                </button>
              ) : (
                <>
                  <li>
                    <Link className="color" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="color" to="/signUp">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link
            to="/home"
            className="cycle btn btn-ghost normal-case text-xl web-name"
          >
            Cycle Zz<span className="oo">Oo</span>N
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="color" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="color" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="color" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="color" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="color" to="/news">
                News
              </Link>
            </li>
            <li>
              <Link className="color" to="/contact">
                Contact
              </Link>
            </li>

            {user?.uid ? (
              <button onClick={handleLogOUt} className="color">
                LogOut
              </button>
            ) : (
              <>
                {" "}
                <li>
                  <Link className="color" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="color" to="/signUp">
                    SignUp
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <h1 style={{ color: "greenyellow", marginRight: "100px" }}>
            {user?.displayName}
          </h1>
          <Link className="shopNow btn ">Shop New</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
