import { useContext } from "react";
import { Paginacion } from "../components/Paginacion";
import { TeamsList } from "../components/TeamsList";
import { usePaginacion } from "../hooks/usePaginacion";
import { TeamsContext } from "../context/TeamsContext";
import { NavLink, Route, Routes } from "react-router-dom";

export const TeamsPage = () => {
  const { data } = useContext(TeamsContext);
  const { resultado, cambiarPagina, paginaActual } = usePaginacion(data);
  return (
    <div>
      <div className="text-2xl md:text-4xl text-center font-bold px-2 py-6 bg-orange-300">
        <NavLink to="/"> <h1>ENCICLOPEDIA DEL FUTBOL</h1></NavLink>
        <h2 className="descripcion text-sm md:text-lg text-center font-medium mx-6 mt-2">Enciclopedia de todos los campeones del futbol.</h2>
      </div>
      <Paginacion cambiarPagina={cambiarPagina} paginaActual={paginaActual} />
      <TeamsList resultado={resultado} />
    </div>
  );
};
