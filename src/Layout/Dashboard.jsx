import { BiFoodMenu } from "react-icons/bi";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaMoneyBill,
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Dashboard Side Bar */}
      <div className="w-64 min-h-screen bg-teal-600 ">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <FaList />
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addjobs">
                  <FaBook />
                  Add A New Job
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addtender">
                  <FaBook />
                  Add A New Tender
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addEduNotice">
                  <FaBook />
                  Add A New Education Notice
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/alljobs">
                  <FaUsers />
                  All Jobs
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaUser />
                  User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaMoneyBill />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineRateReview />
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaList />
                  My Booking
                </NavLink>
              </li>
            </>
          )}

          {/* Shared Dashboard Navlink for All Users */}
          <div className="divider" />
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <BiFoodMenu />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salads">
              <FaShoppingBag />
              Order Food
            </NavLink>
          </li>
          <li>
            <NavLink to="/secret">
              <GrContact />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Main Content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
