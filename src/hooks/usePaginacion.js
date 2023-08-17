import { useState } from "react";

export const usePaginacion = (data) => {

  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPorPagina, setItemsPorPagina] = useState(30);
  const indexOfLastItem = paginaActual * itemsPorPagina;
  const indexOfFirstItem = indexOfLastItem - itemsPorPagina;
  const resultado = data.slice(indexOfFirstItem, indexOfLastItem);
  const cambiarPagina = (pageNumber) => {
    if (pageNumber === 0) return;
    setPaginaActual(pageNumber);
  };

  return {
    cambiarPagina,
    paginaActual,
    setPaginaActual,
    resultado,
  };
};