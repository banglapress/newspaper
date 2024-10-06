import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
// import logoimage from "../../../assets/logo.png";

const initialNavigation = [
  { name: "রেজিস্ট্রেশন", href: "registration", current: true },
  { name: "আমাদের সম্পর্কে", href: "our-team", current: false },
  { name: "বিস্তারিত কার্যক্রম", href: "program-detail", current: false },
  { name: "যোগাযোগ", href: "contact", current: false },
  { name: "ড্যাশবোর্ড", href: "dashboard/cart", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBarBar() {
  const { user, logOut } = useContext(AuthContext);

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

  const location = useLocation();
  const [navigation, setNavigation] = useState(initialNavigation);

  useEffect(() => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.href === location.pathname,
    }));

    setNavigation(updatedNavigation);
  }, [location.pathname]);

  return (
    <Disclosure
      as="nav"
      className="fixed bg-gray-800 top-0 left-0 right-0 max-w-screen-xl mx-auto"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo and desktop navigation */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    to="/"
                    className="hover:pl-4 transition-all jeebikanavfont font-bold text-yellow-300 text-3xl"
                  >
                    jeebika.com
                    {/* <img height="100px" width="150px" src={logoimage} alt="" /> */}
                  </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 abshapla">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-xl"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* User profile */}
              <div className="absolute text-orange-300 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user ? (
                  <>
                    <img
                      src={user?.photoURL}
                      alt="User Avatar"
                      className="h-8 w-8 rounded-full mr-2 object-cover"
                    />
                    <span className="hidden sm:inline mr-4">
                      {user?.displayName}
                    </span>

                    <button
                      onClick={handleLogOut}
                      className="btn-active btn-ghost hover:text-white"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <Link
                    to="login"
                    className="rounded-full bg-gray-800 px-4 py-2 text-gray-400 hover:text-white"
                  >
                    লগইন
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
