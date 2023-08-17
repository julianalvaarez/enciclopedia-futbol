import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { TeamsPage } from "../pages/TeamsPage";
import { SearchPage } from "../pages/SearchPage";
import { teams } from "../data/teams";
import { TeamItemPage } from "../pages/TeamItemPage";
import { ComparacionPage } from "../pages/ComparacionPage";

export const RouterApp = () => {
  return (
    <>
      <NavBar/>
      <div className="mt-8 md:mt-14">
        <Routes>
          <Route path="/" element={<TeamsPage/>}/>
          <Route path="/comparacion" element={<ComparacionPage/>}/>
          <Route path='search/team/:id' element={<TeamItemPage/>}/>
          <Route path='/team/:id' element={<TeamItemPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </div>
    </>
  );
};
