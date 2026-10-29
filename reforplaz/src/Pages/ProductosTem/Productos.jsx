import { useState, useMemo } from "react";
import { CATEGORIAS_PRODUCTOS } from "../../data/productosData";
import ProductCarousel from "../../components/ProductCarousel";
import Icon from "../../components/Icons";

function Productos({ categoriaInicial = "todos", cambiarPagina }) {
  const [categoriaActiva, setCategoriaActiva] = useState(categoriaInicial);

  // Lista de categorías para las pestañas de filtro
  const categoriasFiltro = CATEGORIAS_PRODUCTOS;

  // Filtrado de productos reales (excluyendo el objeto 'todos')
  const productosBase = useMemo(() => {
    return CATEGORIAS_PRODUCTOS.filter((p) => p.id !== "todos");
  }, []);

  const productosFiltrados = useMemo(() => {
    return productosBase.filter(
      (item) => categoriaActiva === "todos" || item.id === categoriaActiva
    );
  }, [productosBase, categoriaActiva]);

  return (
    <main className="min-h-screen bg-sky-50/40 text-slate-800 selection:bg-sky-500 selection:text-white">
      
      {/* ========================================================= */}
      {/* HERO SECTION DE PRODUCTOS - TONOS CELESTES Y BLANCO */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden border-b border-sky-200/80 bg-gradient-to-b from-sky-100/90 via-sky-50 to-white px-6 pt-3 pb-10 lg:pt-4 lg:pb-12">
        
        {/* Glow ambient celeste suave */}
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl"></div>
        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl text-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-5 py-2 text-sm font-bold uppercase tracking-wider text-sky-800 backdrop-blur-md shadow-xs">
            <Icon name="Sparkles" className="h-5 w-5 text-sky-600" />
            Catálogo Oficial • Industrias REFORPLAZ
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Soluciones en{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Fibra de Vidrio
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            Diseñamos y fabricamos productos de alta ingeniería técnica y artística:
            toboganes acuáticos, módulos sanitarios portátiles, embarcaciones, gimnasios urbanos,
            monumentos y parques de interior de máxima resistencia estructural.
          </p>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SELECTOR DE CATEGORÍAS (TABS CON SCROLL) */}
      {/* ========================================================= */}
      <section className="border-b border-sky-100 bg-white px-4 py-3.5 shadow-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2.5">
          {categoriasFiltro.map((cat) => {
            const esActiva = categoriaActiva === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoriaActiva(cat.id)}
                className={`flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-200 cursor-pointer ${
                  esActiva
                    ? "bg-gradient-to-r from-sky-500 to-cyan-600 text-white shadow-md shadow-sky-500/25 scale-105"
                    : "bg-white text-slate-700 border border-sky-200/80 hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50/60"
                }`}
              >
                <Icon name={cat.icono || "Layers"} className="h-4.5 w-4.5" />
                {cat.nombre}
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* LISTADO DE PRODUCTOS CON SUS CARRUSELES */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* RESULTADOS ENCONTRADOS */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              {categoriaActiva === "todos"
                ? "Catálogo Completo"
                : categoriasFiltro.find((c) => c.id === categoriaActiva)?.nombre}
            </h2>
            <p className="text-sm font-medium text-slate-600 mt-1">
              Mostrando {productosFiltrados.length} líneas de producción especializadas
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            Disponibilidad para proyectos nacionales e internacionales
          </div>
        </div>

        {/* SI NO HAY RESULTADOS */}
        {productosFiltrados.length === 0 && (
          <div className="rounded-3xl border border-dashed border-sky-300 bg-white p-12 text-center shadow-xs">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-400">
              <Icon name="Search" className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No se encontraron productos</h3>
            <p className="mt-2 text-sm text-slate-500">
              No hay productos disponibles en esta categoría. Selecciona "Todos los Productos" para ver el catálogo completo.
            </p>
            <button
              type="button"
              onClick={() => setCategoriaActiva("todos")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-sky-700 transition"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* GRID DE PRODUCTOS */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {productosFiltrados.map((producto) => (
            <ProductCarousel key={producto.id} producto={producto} />
          ))}
        </div>

      </section>

      {/* ========================================================= */}
      {/* BANNER DE COTIZACIÓN PERSONALIZADA */}
      {/* ========================================================= */}
      <section className="border-t border-sky-200/80 bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100/70 via-white to-cyan-50/60 p-8 shadow-xl shadow-sky-200/30 sm:p-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-sky-700">
                ¿Tienes un proyecto en mente?
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Fabricamos a medida según tus especificaciones
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-700">
                Parques acuáticos completos, estructuras arquitectónicas monumentales o módulos sanitarios a gran escala. Nuestros ingenieros y artesanos te asesoran desde el plano inicial hasta la instalación.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/59167006297?text=Hola%20REFORPLAZ,%20deseo%20asesoramiento%20y%20cotizaci%C3%B3n%20para%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-600 px-7 py-4 text-base font-bold text-white shadow-md shadow-sky-500/25 transition hover:from-sky-600 hover:to-cyan-700 active:scale-95"
              >
                <Icon name="WhatsApp" className="h-5 w-5" />
                Contactar Asesor
              </a>

              {cambiarPagina && (
                <button
                  type="button"
                  onClick={() => cambiarPagina("contactos")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white px-7 py-4 text-base font-bold text-slate-700 transition hover:border-sky-400 hover:text-slate-900 active:scale-95 cursor-pointer shadow-xs"
                >
                  <Icon name="Mail" className="h-5 w-5" />
                  Ver Oficinas
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Productos;
