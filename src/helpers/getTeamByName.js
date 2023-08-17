import { teams } from "../data/teams";


export const getTeamByName = (name = "") => {
  name = name.toLowerCase().trim();
  if (name.length === 0) return [];

  const teamsFounds = teams.filter((team) => {
    if (typeof team.Equipo === 'string') {
      return team.Equipo.toLowerCase().includes(name);
    }
    return false; // Si Equipo no es una cadena, no se incluye en el resultado
  })

  return teamsFounds
};
