import { Link, useNavigate } from "react-router-dom"
import { teams } from "../data/teams"

export const TeamItem = ({team}) => {
  const {Equipo, Pais, TOTAL, CONF, CM, CC1, CC2, CC3, CCO, LN, CN, CN2, OCN, id} = team
  const totalInternacionales = CC1 + CC2 + CC3 + CCO + CM
  const totalNacionales = LN + CN + CN2 + OCN
  const navigate = useNavigate()
  function navigateToTeamPage() {
    navigate(`team/${team.id}`, { replace: true });
  }

  return (
    <>
        <tr className="text-center">
            <td>{teams.indexOf(team) + 1}</td>
            <td className="cursor-pointer underline" onClick={navigateToTeamPage}>{Equipo}</td>
            <td>{Pais}</td>
            <td>{CONF}</td>
            <td>{TOTAL}</td>
            <td>{CM}</td>  
            <td>{CC1}</td>
            <td>{totalInternacionales}</td>
            <td>{LN}</td>
            <td>{CN + CN2 + OCN}</td>
            <td>{totalNacionales}</td>
        </tr>
    </>
  )
}
