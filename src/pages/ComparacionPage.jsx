import { useContext } from "react"
import { TeamsContext } from "../context/TeamsContext"
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
1
export const ComparacionPage = () => {
  const navigate = useNavigate()
  const {equipoComparado1, equipoComparado2, resetearComparacion} = useContext(TeamsContext)
  const totalInternacionales = equipoComparado1?.CM + equipoComparado1?.CC1 + equipoComparado1?.CC2 + equipoComparado1?.CC3 + equipoComparado1?.CCO
  const totalNacionales = equipoComparado1?.LN + equipoComparado1?.CN + equipoComparado1?.CN2 + equipoComparado1?.OCN
  const totalInternacionales2 = equipoComparado2?.CM + equipoComparado2?.CC1 + equipoComparado2?.CC2 + equipoComparado2?.CC3 + equipoComparado2?.CCO
  const totalNacionales2 = equipoComparado2?.LN + equipoComparado2?.CN + equipoComparado2?.CN2 + equipoComparado2?.OCN
  return (
    <div className="flex flex-col">
      {equipoComparado1 && equipoComparado2 ? (
        <div className="md:text-xl">
            <div className="grid grid-cols-3 grid-rows-6 gap-6 place-items-center pt-8">
                <h2 className="font-semibold">{equipoComparado1.Equipo}</h2>
                <span>-</span>
                <h2 className="font-semibold">{equipoComparado2.Equipo}</h2>
                <span>{equipoComparado1.TOTAL}</span>
                <span>Titulos</span>
                <span>{equipoComparado2.TOTAL}</span>
                <span>{totalInternacionales}</span>
                <span className="text-center text-sm md:text-xl">Total Internacionales</span>
                <span>{totalInternacionales2}</span>
                <span>{equipoComparado1.CM}</span>
                <span>Mundiales</span>
                <span>{equipoComparado2.CM}</span>
                <span>{equipoComparado1.CC1}</span>
                <span>Continentales</span>
                <span>{equipoComparado2.CC1}</span>
                <span>{totalNacionales}</span>
                <span className="text-sm text-center md:text-xl">Total Nacionales</span>
                <span>{totalNacionales2}</span>
                <span>{equipoComparado1.LN}</span>
                <span>Ligas</span>
                <span>{equipoComparado2.LN}</span>
                <span>{equipoComparado1.CN + equipoComparado1.CN2 + equipoComparado1.OCN}</span>
                <span>Copas</span>
                <span>{equipoComparado2.CN + equipoComparado2.CN2 + equipoComparado2.OCN}</span>
            </div>

            <div className="grid place-items-center mt-5">
                <button className="p-2 mb-5 bg-amber-500 rounded-md py-1 hover:bg-amber-800 text-base font-semibold mt-4" onClick={resetearComparacion}>
                    Vaciar Comparacion
                </button>
            </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full my-5">
            <h2 className="font-semibold text-center">No Elegiste Dos Equipos a Comparar</h2>
        </div>
      )}  
      <span className="underline font-semibold mx-3 text-center md:text-lg" onClick={() => navigate('/')}>Regresar...</span>
    </div>
  )
}
