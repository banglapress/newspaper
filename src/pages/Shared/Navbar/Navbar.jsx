import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { HiShoppingCart } from "react-icons/hi";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Log Out Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">প্রথম পাতা</Link>
      </li>
      <li>
<<<<<<< HEAD
        <Link to="/menu">Our Menu</Link>
=======
        <a>Parent</a>
       
>>>>>>> b438837d6925f2de2ab3795dd9f8517b7a909532
      </li>
      <li>
        <Link to="/order/salads">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <HiShoppingCart className="mr-2" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <span>{user?.displayName}</span>
          </li>
          <li>
            <button onClick={handleLogOut} className="btn-active btn-ghost">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
<<<<<<< HEAD
      <div className="navbar fixed z-10 bg-opacity-40 text-white bg-slate-600 max-w-screen-xl">
=======
      <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black text-white">
>>>>>>> b438837d6925f2de2ab3795dd9f8517b7a909532
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-opacity-40 text-white bg-slate-800  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <div className="flex flex-shrink-0 items-center justify-center">
              <Link
                to="/"
                className="hover:pl-4 transition-all jeebikanavfont font-bold text-red-500 text-3xl"
              >
                jeebika.com
              </Link>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
