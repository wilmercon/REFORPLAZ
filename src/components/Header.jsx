import Navbar from "./Navbar";

function Header({ paginaActual, cambiarPagina, onSeleccionarCategoria }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-100 bg-white/95 backdrop-blur-xl shadow-xs">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO REFORPLAZ - ESTÁTICO (SIN MOVIMIENTO NI SCROLL) */}
        <button
          type="button"
          onClick={() => {
            if (paginaActual !== "inicio") {
              cambiarPagina("inicio");
            }
          }}
          className="flex items-center text-left cursor-pointer focus:outline-none select-none"
          title="INDUSTRIAS REFORPLAZ - Inicio"
        >
          <img
            src="/imagenes/logo.png"
            alt="INDUSTRIAS REFORPLAZ - Tecnología en Fibra de Vidrio"
            className="h-18 sm:h-24 w-auto object-contain rounded-lg"
          />
        </button>

        {/* COMPONENTE NAVBAR */}
        <Navbar
          paginaActual={paginaActual}
          cambiarPagina={cambiarPagina}
          onSeleccionarCategoria={onSeleccionarCategoria}
        />

      </div>
    </header>
  );
}

export default Header;
