import { useState } from "react";
import Icon from "../../components/Icons";

function Blog({ cambiarPagina }) {
  const [categoriaActiva, setCategoriaActiva] = useState("todos");

  const articulos = [
    {
      id: 1,
      categoria: "Acuáticos",
      titulo: "¿Por qué los toboganes de fibra de vidrio superan a cualquier otro material?",
      resumen:
        "Análisis de durabilidad, fricción hidrodinámica, resistencia al cloro y salitre, y por qué los grandes parques acuáticos del mundo escogen exclusivamente fibra de vidrio con acabado Gel-Coat isoftálico.",
      fecha: "2026",
      tiempoLectura: "4 min de lectura",
      imagen: "/imagenes/juegos_acuaticos/a1.jpg",
      tags: ["Seguridad", "Toboganes", "Acabado Gel-Coat"]
    },
    {
      id: 2,
      categoria: "Sostenibilidad",
      titulo: "Baños Portátiles Ecológicos: Solución sanitaria para minería y construcción",
      resumen:
        "Cómo los módulos sanitarios de fibra de vidrio reducen la huella ambiental, evitan filtraciones al subsuelo y ofrecen resistencia a la corrosión en climas de gran altura y salinidad.",
      fecha: "2026",
      tiempoLectura: "5 min de lectura",
      imagen: "/imagenes/portatiles/p1.jpg",
      tags: ["Ecología", "Minería", "Salubridad"]
    },
    {
      id: 3,
      categoria: "Náutica",
      titulo: "Mantenimiento y vida útil de embarcaciones recreativas e hidropedales",
      resumen:
        "Guía técnica para propietarios de complejos lacustres y turísticos. Claves para preservar la pigmentación y asegurar flotabilidad permanente sin costo elevado de mantenimiento.",
      fecha: "2026",
      tiempoLectura: "6 min de lectura",
      imagen: "/imagenes/embarcaciones/e1.png",
      tags: ["Náutica", "Turismo", "Mantenimiento"]
    },
    {
      id: 4,
      categoria: "Arte y Ciudad",
      titulo: "Mármol reconstituido y fibra: El secreto detrás de los monumentos urbanos",
      resumen:
        "Descubre cómo combinamos polímeros sintéticos con áridos de mármol para dar vida a esculturas a gran escala que no se fracturan con cambios bruscos de temperatura.",
      fecha: "2026",
      tiempoLectura: "5 min de lectura",
      imagen: "/imagenes/esculturas/e1.jpg",
      tags: ["Arquitectura", "Esculturas", "Mármol"]
    }
  ];

  const categorias = ["todos", "Acuáticos", "Sostenibilidad", "Náutica", "Arte y Ciudad"];

  const articulosFiltrados = categoriaActiva === "todos"
    ? articulos
    : articulos.filter((a) => a.categoria === categoriaActiva);

  return (
    <main className="min-h-screen bg-sky-50/40 text-slate-800 selection:bg-sky-500 selection:text-white">

      {/* ========================================================= */}
      {/* 1. SECCIÓN DE BIENVENIDA - CELESTE Y BLANCO */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden border-b border-sky-200/80 bg-gradient-to-b from-sky-100/90 via-sky-50 to-white px-6 pt-3 pb-10 text-center">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-sky-300/35 blur-3xl"></div>
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-5 py-2 text-sm font-bold uppercase tracking-wider text-sky-800 shadow-xs">
            <Icon name="Sparkles" className="h-4 w-4 text-sky-600" />
            Blog Técnico y Novedades REFORPLAZ
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Innovación en{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Fibra de Vidrio
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            La fibra de vidrio es un material fascinante que revoluciona industrias como la náutica, la recreación turística y la arquitectura cívica. Artículos técnicos y consejos prácticos elaborados por nuestros especialistas.
          </p>

          {/* VIDEO DEL BLOG */}
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border border-sky-200/90 bg-white p-2 shadow-lg shadow-sky-100/80">
            <video
              controls
              preload="metadata"
              className="w-full rounded-2xl bg-slate-900 max-h-[440px] object-contain"
            >
              <source src="/imagenes/video_blog.mp4" type="video/mp4" />
              <source src="https://reforplaz.com/img/video_blog.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
          {/* FILTROS DE CATEGORÍA DEL BLOG */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoriaActiva(cat)}
                className={`rounded-xl px-4.5 py-2.5 text-sm font-bold transition cursor-pointer ${
                  categoriaActiva === cat
                    ? "bg-gradient-to-r from-sky-500 to-cyan-600 text-white shadow-md shadow-sky-500/25"
                    : "bg-white text-slate-700 border border-sky-200 hover:border-sky-300 hover:bg-sky-50/60"
                }`}
              >
                {cat === "todos" ? "Todos los Artículos" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ARTÍCULOS EN GRID */}
      {/* ========================================================= */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {articulosFiltrados.map((art) => (
              <article
                key={art.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-sky-200/80 bg-white shadow-md shadow-sky-100/70 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-200/40"
              >
                {/* IMAGEN DE CABECERA */}
                <div className="relative h-64 w-full overflow-hidden bg-sky-50">
                  <img
                    src={art.imagen}
                    alt={art.titulo}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent"></div>
                  <span className="absolute left-4 top-4 rounded-full border border-sky-200 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-sky-800 backdrop-blur-md shadow-xs">
                    {art.categoria}
                  </span>
                </div>

                {/* TEXTO */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Icon name="Clock" className="h-4 w-4 text-sky-600" />
                      {art.tiempoLectura}
                    </span>
                    <span>•</span>
                    <span>Año {art.fecha}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition">
                    {art.titulo}
                  </h2>

                  <p className="mt-3.5 flex-1 text-base leading-relaxed text-slate-700">
                    {art.resumen}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-sky-100 pt-4">
                    {art.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800 border border-sky-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECCIÓN FINAL */}
      {/* ========================================================= */}
      <section className="border-t border-sky-200/80 bg-gradient-to-b from-sky-50 to-white px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            ¿Quieres saber más sobre cómo fabricamos?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
            En Industrias REFORPLAZ abrimos las puertas a proyectos a gran escala. Visita nuestra planta en Santa Cruz o contáctanos por WhatsApp para consultas técnicas.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            {cambiarPagina && (
              <button
                type="button"
                onClick={() => cambiarPagina("productos")}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-600 px-7 py-3.5 text-sm font-bold text-white hover:from-sky-600 hover:to-cyan-700 transition cursor-pointer shadow-md shadow-sky-500/20"
              >
                <Icon name="Layers" className="h-5 w-5" />
                Explorar Catálogo
              </button>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Blog;
