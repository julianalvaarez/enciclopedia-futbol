import { TeamsContextProvider } from "./context/TeamsContext"
import { RouterApp } from "./router/RouterApp"

export const TeamsApp = () => {
  return (
    <>
    <TeamsContextProvider>
     <RouterApp/>
    </TeamsContextProvider>
    </>
  )
}
