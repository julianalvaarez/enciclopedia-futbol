export const Paginacion = ({ cambiarPagina, paginaActual }) => {

    return (
      <div className="flex justify-around my-4 items-center md:justify-center">
        <button className={buttonPage} onClick={() => cambiarPagina(paginaActual - 1)}> Pagina Anterior </button>
        <button className={buttonPage} onClick={() => cambiarPagina(paginaActual + 1)}> Pagina Siguiente </button>
        <button className={buttonXSPage} onClick={() => cambiarPagina(paginaActual - 1)}> Anterior </button>
        <button className={buttonXSPage} onClick={() => cambiarPagina(paginaActual + 1)}> Siguiente </button>
        <p className={numberPage}>
          {paginaActual}
        </p>
      </div>
    );
  };
  
  const buttonPage = 'hidden md:flex bg-yellow-600 px-2 py-1 font-semibold text-amber-100 rounded-md md:px-4 md:py-2 mr-6'
  const buttonXSPage = 'md:hidden bg-yellow-600 px-2 py-1 font-semibold text-amber-100 rounded-md md:px-4 md:py-2 mr-6'
  const numberPage = "p-1 px-2 font-semibold text-amber-100 select-none bg-yellow-800 rounded-md md:px-4 md:py-2"