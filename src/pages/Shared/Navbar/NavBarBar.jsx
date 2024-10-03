import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

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
      className="bg-gray-800 fixed top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center justify-center">
                  <Link
                    to="/"
                    className="hover:pl-4 transition-all jeebikanavfont font-bold text-red-500 text-3xl"
                  >
                    jeebika.com
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 abshapla ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-xl"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 px-4 py-2 text-gray-400 outline-double hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {user ? (
                    <>
                      <li>
                        <span>{user?.displayName}</span>
                      </li>

                      <li>
                        <button
                          onClick={handleLogOut}
                          className="btn-active btn-ghost"
                        >
                          Log Out
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 px-4 py-2 text-gray-400 outline-double hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5 text-xl" />
                        <Link to="login">লগইন</Link>
                      </button>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
