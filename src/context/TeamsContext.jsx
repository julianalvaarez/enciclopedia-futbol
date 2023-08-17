import { createContext, useState} from "react";
import { teams } from "../data/teams";

export const TeamsContext = createContext();  

export function TeamsContextProvider(props) {

    // Modal de Comparacion
    const [equipoComparado1, setEquipoComparado1] = useState(null)  
    const [equipoComparado2, setEquipoComparado2] = useState(null) 

    
    function compararEquipo(equipo) {
      if (equipoComparado1 === null) {
        setEquipoComparado1(equipo);
      } else if (equipoComparado2 === null) {
        setEquipoComparado2(equipo);
      }
      console.log({equipoComparado1, equipoComparado2});
    } 

    function resetearComparacion() {
      setEquipoComparado1(null)
      setEquipoComparado2(null)
    }

    // Filtro por Confederacion
    const [confederacionFiltrada, setConfederacionFiltrada] = useState(null)
    function filtrarConfederacion(confederacion) {
      setConfederacionFiltrada(confederacion)
    }

    const data = confederacionFiltrada ? teams.filter((team) => team.CONF === confederacionFiltrada) : teams
 



  return (
    <TeamsContext.Provider value={{
        data,
        equipoComparado1,
        equipoComparado2,
        compararEquipo,
        resetearComparacion,
        filtrarConfederacion,
    }}> 
      {props.children}
    </TeamsContext.Provider>
  );
}
