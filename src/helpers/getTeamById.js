import { teams } from "../data/teams"

export const getTeamById = (id) => {
  return teams.find(team => team.id === id)
}
