import { useState } from "react";
import ProductosMenu from "../Pages/ProductosTem/ProductosMenu.jsx";
import Icon from "./Icons";

function Navbar({ paginaActual, cambiarPagina, onSeleccionarCategoria }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navegar = (pagina) => {
    cambiarPagina(pagina);
    setMenuAbierto(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* MENÚ PARA COMPUTADORAS (DESKTOP) */}
      <nav className="hidden items-center gap-7 lg:flex">
        
        {/* INICIO */}
        <button
          type="button"
          onClick={() => navegar("inicio")}
          className={`cursor-pointer text-base font-bold tracking-wide transition-all duration-200 ${
            paginaActual === "inicio"
              ? "text-sky-600 border-b-2 border-sky-500 pb-1"
              : "text-slate-700 hover:text-sky-600"
          }`}
        >
          INICIO
        </button>

        {/* PRODUCTOS CON MENÚ DESPLEGABLE */}
        <ProductosMenu
          cambiarPagina={cambiarPagina}
          onSeleccionarCategoria={onSeleccionarCategoria}
        />

        {/* BLOG */}
        <button
          type="button"
          onClick={() => navegar("blog")}
          className={`cursor-pointer text-base font-bold tracking-wide transition-all duration-200 ${
            paginaActual === "blog"
              ? "text-sky-600 border-b-2 border-sky-500 pb-1"
              : "text-slate-700 hover:text-sky-600"
          }`}
        >
          BLOG
        </button>

        {/* CONTACTOS */}
        <button
          type="button"
          onClick={() => navegar("contactos")}
          className={`cursor-pointer text-base font-bold tracking-wide transition-all duration-200 ${
            paginaActual === "contactos"
              ? "text-sky-600 border-b-2 border-sky-500 pb-1"
              : "text-slate-700 hover:text-sky-600"
          }`}
        >
          CONTACTOS
        </button>

        {/* ACERCA DE NOSOTROS */}
        <button
          type="button"
          onClick={() => navegar("nosotros")}
          className={`cursor-pointer text-base font-bold tracking-wide transition-all duration-200 ${
            paginaActual === "nosotros"
              ? "text-sky-600 border-b-2 border-sky-500 pb-1"
              : "text-slate-700 hover:text-sky-600"
          }`}
        >
          ACERCA DE NOSOTROS
        </button>

        {/* BOTÓN RÁPIDO DE COTIZACIÓN */}
        <a
          href="https://wa.me/59167006297?text=Hola%20REFORPLAZ,%20deseo%20una%20cotizaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-500/25 transition hover:from-sky-600 hover:to-cyan-600 hover:scale-105 active:scale-95"
        >
          <Icon name="WhatsApp" className="h-4 w-4" />
          Cotizar
        </a>

      </nav>

      {/* BOTÓN PARA CELULARES (MOBILE HAMBURGER) */}
      <button
        type="button"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir o cerrar menú"
        aria-expanded={menuAbierto}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-slate-800 transition hover:border-sky-400 hover:text-sky-600 cursor-pointer lg:hidden"
      >
        <Icon name={menuAbierto ? "Close" : "Menu"} className="h-6 w-6" />
      </button>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {menuAbierto && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col border-b border-sky-100 bg-white/98 px-6 py-6 shadow-2xl backdrop-blur-2xl lg:hidden">
          
          <button
            type="button"
            onClick={() => navegar("inicio")}
            className={`text-left py-2 text-base font-bold transition ${
              paginaActual === "inicio" ? "text-sky-600" : "text-slate-800 hover:text-sky-600"
            }`}
          >
            INICIO
          </button>

          <div className="py-2">
            <ProductosMenu
              mobile
              cambiarPagina={(pag) => {
                cambiarPagina(pag);
                setMenuAbierto(false);
              }}
              onSeleccionarCategoria={(cat) => {
                if (onSeleccionarCategoria) onSeleccionarCategoria(cat);
                cambiarPagina("productos");
                setMenuAbierto(false);
              }}
            />
          </div>

          <button
            type="button"
            onClick={() => navegar("blog")}
            className={`text-left py-2 text-base font-bold transition ${
              paginaActual === "blog" ? "text-sky-600" : "text-slate-800 hover:text-sky-600"
            }`}
          >
            BLOG
          </button>

          <button
            type="button"
            onClick={() => navegar("contactos")}
            className={`text-left py-2 text-base font-bold transition ${
              paginaActual === "contactos" ? "text-sky-600" : "text-slate-800 hover:text-sky-600"
            }`}
          >
            CONTACTOS
          </button>

          <button
            type="button"
            onClick={() => navegar("nosotros")}
            className={`text-left py-2 text-base font-bold transition ${
              paginaActual === "nosotros" ? "text-sky-600" : "text-slate-800 hover:text-sky-600"
            }`}
          >
            ACERCA DE NOSOTROS
          </button>

          {/* ACCIÓN RÁPIDA MÓVIL */}
          <div className="mt-4 pt-4 border-t border-sky-100">
            <a
              href="https://wa.me/59167006297?text=Hola%20REFORPLAZ,%20deseo%20una%20cotizaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 py-3 text-center text-sm font-bold text-white shadow-md shadow-sky-500/25"
            >
              <Icon name="WhatsApp" className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;
