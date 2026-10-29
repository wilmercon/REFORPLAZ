import { useState, useRef, useEffect } from "react";
import { CATEGORIAS_PRODUCTOS } from "../../data/productosData";
import Icon from "../../components/Icons";

function ProductosMenu({ mobile = false, cambiarPagina, onSeleccionarCategoria }) {
  const [abierto, setAbierto] = useState(false);
  const menuRef = useRef(null);

  // Lista de productos reales para el menú desplegable
  const productos = CATEGORIAS_PRODUCTOS.filter((p) => p.id !== "todos");

  const handleSeleccionar = (categoriaId) => {
    if (onSeleccionarCategoria) {
      onSeleccionarCategoria(categoriaId);
    }
    if (cambiarPagina) {
      cambiarPagina("productos");
    }
    setAbierto(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close when clicking outside on desktop
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAbierto(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className={`relative ${mobile ? "w-full" : ""}`}
      onMouseEnter={() => {
        if (!mobile) setAbierto(true);
      }}
      onMouseLeave={() => {
        if (!mobile) setAbierto(false);
      }}
    >
      {/* BOTÓN PRINCIPAL PRODUCTOS */}
      <button
        type="button"
        onClick={() => {
          if (mobile) {
            setAbierto(!abierto);
          } else {
            handleSeleccionar("todos");
          }
        }}
        aria-expanded={abierto}
        aria-haspopup="true"
        className={`flex w-full cursor-pointer items-center justify-between lg:justify-start gap-2 text-left text-base font-bold tracking-wide transition-all duration-200 ${
          abierto ? "text-sky-600" : "text-slate-700 hover:text-sky-600"
        }`}
      >
        <span>PRODUCTOS</span>
        <Icon
          name="ChevronDown"
          className={`h-4 w-4 transition-transform duration-200 ${
            abierto ? "rotate-180 text-sky-600" : "text-slate-400"
          }`}
        />
      </button>

      {/* MENÚ DESPLEGABLE */}
      {abierto && (
        <div
          className={
            mobile
              ? "mt-2 w-full pl-3 border-l-2 border-sky-400"
              : "absolute left-0 top-full z-50 w-[360px] pt-3"
          }
        >
          <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white py-2 shadow-2xl backdrop-blur-xl">
            
            {/* ENLACE AL CATÁLOGO COMPLETO */}
            <button
              type="button"
              onClick={() => handleSeleccionar("todos")}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-sky-700 hover:bg-sky-50 transition cursor-pointer border-b border-sky-100"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                <Icon name="Layers" className="h-5 w-5" />
              </div>
              <span>Ver Todo el Catálogo</span>
            </button>

            {/* RECORRER PRODUCTOS */}
            <div className="max-h-[400px] overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-sky-200">
              {productos.map((producto) => (
                <button
                  key={producto.id}
                  type="button"
                  onClick={() => handleSeleccionar(producto.id)}
                  className="group flex w-full cursor-pointer items-center gap-3.5 px-4 py-3 text-left transition duration-150 hover:bg-sky-50/70 hover:text-sky-700"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-200 transition group-hover:border-sky-400 group-hover:bg-sky-100 group-hover:text-sky-800">
                    <Icon name={producto.icono || "Layers"} className="h-5 w-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="truncate text-[15px] font-bold text-slate-800 group-hover:text-sky-700">
                      {producto.nombre}
                    </p>
                    <p className="truncate text-xs font-medium text-slate-500">
                      {producto.subtitulo || "Fibra de Vidrio"}
                    </p>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default ProductosMenu;
