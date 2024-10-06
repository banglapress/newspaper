import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems.jsx/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddJobs from "../pages/Dashboard/AddJobs/AddJobs";
import AllJobs from "../pages/Dashboard/AllJobs/AllJobs";
import Registration from "../pages/Registration/Registration";
import ProgramDetail from "../pages/ProgramDetail/ProgramDetail/ProgramDetail";
import JobDetailPage from "../pages/CategoryPage/JobDetailPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import UpdateUserProfile from "../pages/Dashboard/UpdateUserProfile/UpdateUserProfile";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import UpdateUser from "../pages/Dashboard/UpdateUser/UpdateUser";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/program-detail",
        element: <ProgramDetail />,
      },

      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "jobs/category/:category",
        element: <CategoryPage />,
      },

      {
        path: "/jobs/:jobId",
        element: <JobDetailPage />,
      },

      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // normal users route
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "updateUserProfile",
        element: <UpdateUserProfile />,
      },

      // admins only routes
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },

      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },

      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jeebisa.vercel.app/menu/${params.id}`),
      },

      {
        path: "updateUser/:id",
        element: (
          <AdminRoute>
            <UpdateUser />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },

      {
        path: "addjobs",
        element: (
          <AdminRoute>
            <AddJobs />
          </AdminRoute>
        ),
      },

      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "alljobs",
        element: (
          <AdminRoute>
            <AllJobs />
          </AdminRoute>
        ),
      },
    ],
  },
]);
