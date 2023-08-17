import { NavLink, useNavigate } from "react-router-dom";
import { NavBarFiltro } from "./recursos/NavBarFiltro";
import "../navBarFiltro.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const NavBar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <header className="w-screen fixed -mt-8 md:-mt-14">
        <nav className="bg-orange-400 p-2">

          {/* Menu PC */}
          <div className="hidden md:flex justify-between mx-10 p-2 items-center">
            <span className="navLogo font-bold text-xl">
              <NavLink to="/">Enciclopedia Futbol</NavLink>
            </span>
            <ul className="flex font-semibold text-lg">
              <li className="mr-5"><NavLink to='search'>Buscar Equipo</NavLink></li>
              <li><NavLink to="/comparacion">Comparacion de Equipo</NavLink></li>
            </ul>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <div className="flex justify-between items-center mx-2">
              <span className="navLogo font-bold">
                <NavLink to="/">Enciclopedia Futbol</NavLink>
              </span>
              <span onClick={() => setNavActive(!navActive)} className="text-xl">
                <FaBars />
              </span>
            </div>

            {navActive && (
              <ul className="flex flex-col items-end menu-horizontal font-semibold underline my-4">
                <li className="mb-3 w-screen text-end"><NavLink to='search'>Buscar Equipo</NavLink></li>
                <li><NavLink to="/comparacion">Comparacion de Equipo</NavLink></li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
