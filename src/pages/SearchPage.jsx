import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import { getTeamByName } from "../helpers/getTeamByName";
import { TeamItem } from "../components/TeamItem";
import { useForm } from "../hooks/useForm";
import { TablaEncabezado } from "../components/recursos/TablaEncabezado";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const teamFound = getTeamByName(q);

  function onSearchSubmit(e) {
    e.preventDefault();
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }
  return (
    <>
        <div className="pt-10 md:flex md:w-full md:justify-around">
          <div className="h-full justify-center">
            <form onSubmit={onSearchSubmit} className="flex justify-around items-center">
              <input
                type="text"
                placeholder="Buscar Equipo..."
                autoComplete="off"
                name="searchText"
                value={searchText}
                onChange={onInputChange}
                className="p-1 w-8/12 md:w-96 md:mr-4 md:p-3 rounded-md bg-amber-200 text-amber-800 placeholder:text-amber-800"
              />
              <button className="bg-orange-800 text-white font-medium p-1 md:p-3 px-2 rounded-md">Buscar</button>
            </form>
          </div>

          <div>
            <div className="mt-4">
              <div className="flex justify-between text-lg">
                <h4 className="mx-3 text-amber-800">Resultados...</h4>
                {teamFound.length > 0 && <span>Equipos Encontrados: {teamFound.length}</span>}
              </div>
              <hr className="mx-3 bg-amber-800 rounded-xl" />
            </div>

            {teamFound.length > 0 && (
              <div className="overflow-x-auto max-w-full">
                <table className="w-full m-2">
                  <TablaEncabezado />
                  <tbody>
                    {teamFound.map((team) => (
                      <TeamItem key={team.id} team={team} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {q.length === 0 ? (
              <span className="font-medium text-xl text-amber-900 flex justify-center mt-5">Busca un Equipo</span>
            ) : (
              teamFound.length === 0 && (
                <div className="font-medium text-amber-900 flex justify-center mt-5">
                  Equipo <b className="mx-1">"{q}"</b> no encontrado
                </div>
              )
            )}
          </div>
        </div>
    </>
  );
};
