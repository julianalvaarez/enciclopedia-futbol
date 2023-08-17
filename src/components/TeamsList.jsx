import { TeamItem } from "./TeamItem";
import { TablaEncabezado } from "./recursos/TablaEncabezado";

export const TeamsList = ({ resultado }) => {
  return (
    <>
      <div className="overflow-x-auto max-w-full">
        <table className="w-full m-2">
          <TablaEncabezado/>
          <tbody>
            {resultado.map((team, index) => (
              <TeamItem key={index} team={team} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
