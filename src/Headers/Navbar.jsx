import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const navmenu = (
    <>
      <li>
        <details>
          <summary className="bg-white font-medium uppercase">Menu</summary>
          <ul
            className="p-2 w-40 normal-case md:static md:right-0
          absolute right-8"
          >
            <li className="hover:text-[#F99F1C]">
              <a>Home</a>
            </li>
            <li className="hover:text-[#F99F1C]">
              <a>Details</a>
            </li>
            <li className="hover:text-[#F99F1C]">
              <a>Category</a>
            </li>
            <li className="hover:text-[#F99F1C]">
              <a>My Favorite Food</a>
            </li>
            <li className="hover:text-[#F99F1C]">
              <a>Profile</a>
            </li>
            <li className="hover:text-[#F99F1C]">
              <a>Login/Sign Up</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar ">
        <div className="md:navbar-start">
          <a
            style={{
              fontFamily: "'Baloo 2', 'CM Sans Serif 2012', sans-serif",
            }}
            className="btn text-black btn-ghost text-2xl  font-bold"
          >
            pti.
          </a>
        </div>
        <div className="md:navbar-center relative navbar-start md:w-2/5 w-full">
          <div className="px-3 absolute left-0"><CiSearch className="text-lg" /></div>
          <input
            type="text"
            placeholder="Find Your Food"
            className="input pl-9 md:text-sm text-xs input-bordered input-sm focus:outline-none md:w-full w-3/4 max-w-md"
          />

          <ul className="menu text-sm menu-horizontal px-1">{navmenu}</ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;