import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex max-w-6xl p-3 mx-auto justify-between items-center">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Sahand</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 flex items-center p-3 rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none w-24 sm:w-64 bg-transparent "
          />
          <FaSearch className="text-slate-500"></FaSearch>
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/sign-in">Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
