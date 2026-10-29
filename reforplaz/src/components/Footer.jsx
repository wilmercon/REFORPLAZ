import Icon from "./Icons";

function Footer({ cambiarPagina }) {
  const redes = [
    {
      nombre: "Facebook",
      icono: "Facebook",
      enlace: "https://www.facebook.com/share/18hErmEm16/",
      color: "hover:text-blue-600 hover:border-blue-300",
    },
    {
      nombre: "Instagram",
      icono: "Instagram",
      enlace: "https://www.instagram.com/industrias.reforplaz?igsh=aXFhNjFyMTh2NnBm",
      color: "hover:text-pink-600 hover:border-pink-300",
    },
    {
      nombre: "YouTube",
      icono: "YouTube",
      enlace: "https://youtube.com/@industriasreforplaz?si=O02bApabIH1axJ0Q",
      color: "hover:text-red-600 hover:border-red-300",
    },
    {
      nombre: "WhatsApp",
      icono: "WhatsApp",
      enlace: "https://wa.me/59167006297",
      color: "hover:text-emerald-600 hover:border-emerald-300",
    },
  ];

  return (
    <footer className="border-t border-sky-200/80 bg-sky-100/70 text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          
          {/* COLUMNA 1: LOGO Y RESUMEN */}
          <div className="space-y-2.5 md:col-span-1">
            <button
              type="button"
              onClick={() => {
                if (cambiarPagina) cambiarPagina("inicio");
              }}
              className="text-left cursor-pointer focus:outline-none select-none"
              title="INDUSTRIAS REFORPLAZ"
            >
              <img
                src="/imagenes/logo.png"
                alt="INDUSTRIAS REFORPLAZ - Tecnología en Fibra de Vidrio"
                className="h-14 w-auto object-contain rounded-lg"
              />
            </button>
            <p className="text-xs leading-relaxed text-slate-600">
              Líderes en diseño, fabricación y montaje de productos en fibra de vidrio y mármol reconstituido. Proyectos recreativos, industriales y arquitectónicos de alta resistencia.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {redes.map((r) => (
                <a
                  key={r.nombre}
                  href={r.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={r.nombre}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border border-sky-200 bg-white text-slate-700 shadow-xs transition-all hover:scale-110 ${r.color}`}
                >
                  <Icon name={r.icono} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Navegación
            </h4>
            <ul className="mt-2.5 space-y-1.5 text-xs text-slate-600">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (cambiarPagina) cambiarPagina("inicio");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sky-700 transition cursor-pointer font-semibold"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (cambiarPagina) cambiarPagina("productos");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sky-700 transition cursor-pointer font-semibold"
                >
                  Catálogo de Productos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (cambiarPagina) cambiarPagina("nosotros");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sky-700 transition cursor-pointer font-semibold"
                >
                  Acerca de Nosotros
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (cambiarPagina) cambiarPagina("blog");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sky-700 transition cursor-pointer font-semibold"
                >
                  Blog Técnico
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (cambiarPagina) cambiarPagina("contactos");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sky-700 transition cursor-pointer font-semibold"
                >
                  Contactos y Cotizaciones
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: ESPECIALIDADES */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Líneas Destacadas
            </h4>
            <ul className="mt-2.5 space-y-1.5 text-xs text-slate-600">
              <li>Toboganes y Juegos Acuáticos</li>
              <li>Baños Portátiles Ecológicos</li>
              <li>Embarcaciones e Hidropedales</li>
              <li>Monumentos y Esculturas Cívicas</li>
              <li>Parques de Interior e Infantiles</li>
              <li>Tanques Acuáticos e Industriales</li>
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO DIRECTO */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Atención y Fábrica
            </h4>
            <div className="mt-2.5 space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <Icon name="Phone" className="h-4 w-4 shrink-0 text-sky-600 mt-0.5" />
                <div>
                  <a href="tel:+59167006297" className="hover:text-slate-900 transition block font-bold text-slate-800">
                    +591 67006297
                  </a>
                  <a href="tel:+59171512374" className="hover:text-slate-900 transition block font-bold text-slate-800">
                    +591 71512374
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Icon name="Mail" className="h-4 w-4 shrink-0 text-sky-600 mt-0.5" />
                <a href="mailto:reforplaz2015@gmail.com" className="hover:text-slate-900 transition font-bold text-slate-800">
                  reforplaz2015@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Icon name="MapPin" className="h-4 w-4 shrink-0 text-sky-600 mt-0.5" />
                <span className="font-medium">Bolivia • Envíos a nivel nacional e internacional</span>
              </div>
            </div>
          </div>

        </div>

        {/* LÍNEA FINAL DE COPYRIGHT */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-sky-200/80 pt-4 sm:flex-row text-xs font-medium text-slate-600">
          <p>© 2026 INDUSTRIAS REFORPLAZ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
