import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const navmenu = (
    <>
      <li>
        <details>
          <summary className="bg-white text-xs font-medium uppercase">
            Menu
          </summary>
          <ul
            className="p-2 w-44 normal-case md:static md:right-0
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
            className="btn text-black btn-ghost xl:text-3xl text-2xl  font-bold"
          >
            pti.
          </a>
        </div>
        <div className="md:navbar-center relative navbar-start md:w-2/5 w-full">
          <div className="px-3 absolute left-0">
            <CiSearch className="text-lg" />
          </div>
          <input
            type="text"
            placeholder="Search Food"
            className="input pl-9 md:text-sm  text-xs input-bordered input-sm focus:outline-none md:w-full w-3/4 max-w-md"
          />

          <ul className="menu z-10 text-sm menu-horizontal px-1">{navmenu}</ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <div className="avatar">
            <div className="w-9 cursor-pointer rounded-full">
              <img src="https://i.postimg.cc/brzv6bH3/avatar.png" className="drop-shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
