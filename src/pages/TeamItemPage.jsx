import { useContext, useMemo } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { TeamsContext } from "../context/TeamsContext";
import { getTeamByName } from "../helpers/getTeamByName";
import { getTeamById } from "../helpers/getTeamById";

export const TeamItemPage = () => {
    const {compararEquipo} = useContext(TeamsContext)

    const {id} = useParams()
    const team = useMemo(() => getTeamById(id), [id])
    const {Equipo, Pais, TOTAL, CONF, CM, CC1, CC2, CC3, CCO, LN, CN, CN2, OCN} = team
    const totalInternacionales = CC1 + CC2 + CC3 + CCO + CM
    const totalNacionales = LN + CN + CN2 + OCN
    const navigate = useNavigate()

    if (!team) {
      return <Navigate to='/'/>
    }
  
    function onNavigateBack() {
      navigate(-1)
    }
  return (
    <>
      <div className="h-screen">
          <div>
            <h2 className="pt-6 text-center text-3xl font-light mt-3 md:text-5xl">
              {Equipo}
            </h2>
            <div className="flex flex-col items-center mt-3 text-sm md:text-lg md:font-light">
              <h4>
                {Pais}({CONF})
              </h4>
              <h4 className="font-semibold">Titulos Totales: {TOTAL}</h4>
            </div>
          </div>
          <div className="md:flex md:justify-around">
            <div className="flex flex-col items-center my-5 md:text-xl md:grid md:grid-rows-6 md:text-center md:gap-3">
              <h5 className="font-semibold mb-2 md:text-3xl md:font-light">
                Nacionales
              </h5>
              <p>Total: {totalNacionales}</p>
              <p>Ligas: {LN}</p>
              <p>Copas Principales: {CN}</p>
              <p>Copas Secundarias: {CN2}</p>
              <p>Otras Copas: {OCN}</p>
            </div>
            <div className="flex flex-col items-center my-5 md:text-xl md:grid md:grid-rows-6 md:text-center md:gap-3">
              <h5 className="font-semibold mb-2 md:text-3xl md:font-light">
                Internacionales
              </h5>
              <p>Total: {totalInternacionales}</p>
              <p>Copas Mundiales: {CM}</p>
              <p>Copas Continentales: {CC1}</p>
              <p>Continentales Secundarias: {CC2}</p>
              <p>Continentales Terciarias: {CC3}</p>
              <p>Otras Copas: {CCO}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={() => compararEquipo(team)} className="bg-amber-700 p-3 text-sm rounded-xl text-white font-semibold">
              Comparar con Otro Equipo
            </button>
          </div>
          <div className="font-semibold m-4 text-lg text-center">
            <button onClick={onNavigateBack} className="underline rounded-md">Regresar...</button>
          </div>
      </div>
    </>
  );
};
