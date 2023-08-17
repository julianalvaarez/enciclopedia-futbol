import { useContext } from "react";
import { TeamsContext } from "../../context/TeamsContext";

export const NavBarFiltro = () => {
  const {filtrarConfederacion} = useContext(TeamsContext)

  return (
    <>
      <button onClick={() => filtrarConfederacion(null)}>TODOS</button>
      <button onClick={() => filtrarConfederacion("CONMEBOL")}>CONMEBOL</button>
      <button onClick={() => filtrarConfederacion("UEFA")}>UEFA</button>
      <button onClick={() => filtrarConfederacion("CONCACAF")}>CONCACAF</button>
      <button onClick={() => filtrarConfederacion("AFC")}>AFC</button>
      <button onClick={() => filtrarConfederacion("CAF")}>CAF</button>
      <button onClick={() => filtrarConfederacion("OFC")}>OFC</button>
    </>
  );
};
