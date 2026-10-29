import Icon from "../../components/Icons";

function Inicio({ cambiarPagina, onSeleccionarCategoria }) {
  // BENEFICIOS DE LA FIBRA DE VIDRIO
  const beneficios = [
    {
      titulo: "Durabilidad Extrema",
      descripcion: "Material inmune al óxido, termitas y corrosión química o marina.",
      icono: "Shield",
    },
    {
      titulo: "Ligereza y Resistencia",
      descripcion: "Alta relación resistencia-peso: facilita el transporte y montaje sin perder firmeza.",
      icono: "Feather",
    },
    {
      titulo: "Versatilidad de Moldeo",
      descripcion: "Adaptable a curvas complejas, mega toboganes y esculturas hiperrealistas.",
      icono: "Sparkles",
    },
    {
      titulo: "Aislamiento Total",
      descripcion: "Excelente aislamiento térmico y dieléctrico frente a climas extremos.",
      icono: "Zap",
    },
  ];

  // PRODUCTOS DESTACADOS CON IMÁGENES LOCALES Y ENLACES DIRECTOS
  const productosDestacados = [
    {
      id: "acuaticos",
      titulo: "Juegos Acuáticos y Toboganes",
      subtitulo: "Atracciones Turísticas",
      descripcion: "Toboganes gigantes, kamikaze y parques acuáticos completos con certificación de seguridad.",
      imagen: "/imagenes/juegos_acuaticos/a1.jpg",
      icono: "Water",
    },
    {
      id: "portatiles",
      titulo: "Baños Portátiles Ecológicos",
      subtitulo: "Sanitarios Autónomos",
      descripcion: "Módulos de alta resistencia para minería, construcción y eventos masivos.",
      imagen: "/imagenes/portatiles/p1.jpg",
      icono: "Shield",
    },
    {
      id: "embarcaciones",
      titulo: "Embarcaciones e Hidropedales",
      subtitulo: "Turismo Náutico",
      descripcion: "Botes de pedal temáticos, lanchas y estructuras flotantes insumergibles.",
      imagen: "/imagenes/embarcaciones/e1.png",
      icono: "Ship",
    },
    {
      id: "esculturas",
      titulo: "Monumentos y Esculturas",
      subtitulo: "Arte Monumental",
      descripcion: "Esculturas temáticas en fibra de vidrio y mármol reconstituido para rotondas y parques.",
      imagen: "/imagenes/esculturas/e1.jpg",
      icono: "Sparkles",
    },
    {
      id: "tanques",
      titulo: "Tanques Industriales y Acuáticos",
      subtitulo: "Reservorios Hídricos",
      descripcion: "Confinamiento seguro de fluidos con resinas anticorrosivas de máxima duración.",
      imagen: "/imagenes/tanques_agua/ad.jpg",
      icono: "Shield",
    },
    {
      id: "parques_interior",
      titulo: "Parques de Interior",
      subtitulo: "Playgrounds Climatizados",
      descripcion: "Atracciones modulares para centros comerciales y salones de fiesta.",
      imagen: "/imagenes/parques_interior/pi2.jpg",
      icono: "Castle",
    },
  ];

  // EMPRESAS ALIADAS CON LOGOS LOCALES
  const clientes = [
    { nombre: "El Alto", imagen: "/imagenes/clientes/elalto.jpg" },
    { nombre: "Incerpaz", imagen: "/imagenes/clientes/incerpaz.jpg" },
    { nombre: "Sumaj", imagen: "/imagenes/clientes/sumaj.jpg" },
    { nombre: "Visión Mundial", imagen: "/imagenes/clientes/visionmundial.jpg" },
    { nombre: "Comibol", imagen: "/imagenes/clientes/Comibol.jpg" },
  ];

  const handleIrAProducto = (categoriaId) => {
    if (onSeleccionarCategoria) {
      onSeleccionarCategoria(categoriaId);
    } else if (cambiarPagina) {
      cambiarPagina("productos");
    }
  };

  return (
    <main className="min-h-screen bg-sky-50/40 text-slate-800 selection:bg-sky-500 selection:text-white">

      {/* ========================================================= */}
      {/* 1. SECCIÓN PRINCIPAL - HERO CELESTE Y BLANCO */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden border-b border-sky-200/80 bg-gradient-to-b from-sky-100/90 via-sky-50 to-white px-6 pt-2 pb-10 sm:pt-3 sm:pb-12">
        
        {/* Glow ambient celeste */}
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-sky-300/35 blur-3xl"></div>
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-200/35 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl text-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-5 py-2 text-sm font-bold uppercase tracking-wider text-sky-800 backdrop-blur-md shadow-xs">
            <Icon name="Factory" className="h-5 w-5 text-sky-600" />
            INDUSTRIAS REFORPLAZ
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Ingeniería y Arte en{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Fibra de Vidrio
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            Líderes en fabricación de toboganes acuáticos, módulos sanitarios portátiles, embarcaciones y monumentos cívicos de máxima durabilidad y resistencia climática.
          </p>

          {/* PILARES DESTACADOS (FABRICACIÓN, INNOVACIÓN, CALIDAD, PRESENCIA REGIONAL) */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-sky-200/90">
            {/* 1. FABRICACIÓN */}
            <div className="flex select-none flex-col items-center px-6 text-center">
              <div className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-sky-200/80 bg-gradient-to-b from-sky-100/90 to-sky-200/60 shadow-sm">
                  <svg viewBox="0 0 64 64" className="h-12 w-12">
                    <defs>
                      <linearGradient id="fabGradHome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                      <linearGradient id="fabDarkHome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0284c7" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                    </defs>
                    <path d="M44 12h9l2 22H42l2-22z" fill="url(#fabGradHome)" />
                    <rect x="43.5" y="15" width="10" height="3" rx="1" fill="#e0f2fe" />
                    <rect x="43" y="21" width="11" height="2.5" rx="1" fill="#bae6fd" />
                    <path d="M10 52V28l11 8V28l11 8V28l10 7v17H10z" fill="url(#fabDarkHome)" />
                    <path d="M42 34h13v18H42V34z" fill="url(#fabGradHome)" />
                    <rect x="15" y="39" width="5" height="5" rx="1" fill="#e0f2fe" />
                    <rect x="24" y="39" width="5" height="5" rx="1" fill="#e0f2fe" />
                    <rect x="33" y="39" width="5" height="5" rx="1" fill="#e0f2fe" />
                    <rect x="46" y="39" width="5" height="5" rx="1" fill="#e0f2fe" />
                    <rect x="23" y="46" width="7" height="6" rx="1" fill="#bae6fd" />
                    <rect x="8" y="51" width="49" height="3" rx="1.5" fill="#0369a1" />
                  </svg>
                </div>
                <div className="-mt-1.5 h-2.5 w-16 rounded-full bg-sky-200/80 ring-1 ring-sky-300/50"></div>
              </div>
              <h3 className="mt-4 text-base font-extrabold uppercase tracking-wide text-sky-600 sm:text-lg">
                FABRICACIÓN
              </h3>
              <p className="mt-1.5 max-w-[230px] text-sm font-medium leading-relaxed text-slate-600">
                Soluciones en fibra de vidrio y mármol reconstituido.
              </p>
            </div>

            {/* 2. INNOVACIÓN */}
            <div className="flex select-none flex-col items-center px-6 text-center">
              <div className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-sky-200/80 bg-gradient-to-b from-sky-100/90 to-sky-200/60 shadow-sm">
                  <svg viewBox="0 0 64 64" className="h-12 w-12">
                    <defs>
                      <linearGradient id="gearGradHome" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="55%" stopColor="#0284c7" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                      <linearGradient id="bulbGradHome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#bae6fd" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gearGradHome)"
                      d="M35.5 8h-7l-1.2 5.3a17.8 17.8 0 00-4.5 1.9l-4.6-2.9-4.9 4.9 2.9 4.6a17.8 17.8 0 00-1.9 4.5L9 27.5v7l5.3 1.2a17.8 17.8 0 001.9 4.5l-2.9 4.6 4.9 4.9 4.6-2.9a17.8 17.8 0 004.5 1.9L28.5 54h7l1.2-5.3a17.8 17.8 0 004.5-1.9l4.6 2.9 4.9-4.9-2.9-4.6a17.8 17.8 0 001.9-4.5L55 34.5v-7l-5.3-1.2a17.8 17.8 0 00-1.9-4.5l2.9-4.6-4.9-4.9-4.6 2.9a17.8 17.8 0 00-4.5-1.9L35.5 8z"
                    />
                    <circle cx="32" cy="31" r="12.5" fill="#0369a1" />
                    <path
                      d="M32 19.5a9.5 9.5 0 00-6 16.8c1.2 1 2 2.4 2.2 3.9h7.6c.2-1.5 1-2.9 2.2-3.9a9.5 9.5 0 00-6-16.8z"
                      fill="url(#bulbGradHome)"
                    />
                    <rect x="28.5" y="41.5" width="7" height="2.2" rx="1" fill="#bae6fd" />
                    <rect x="29.5" y="44.5" width="5" height="2" rx="1" fill="#7dd3fc" />
                    <path d="M30 35v-5l2-2 2 2v5" stroke="#0284c7" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="-mt-1.5 h-2.5 w-16 rounded-full bg-sky-200/80 ring-1 ring-sky-300/50"></div>
              </div>
              <h3 className="mt-4 text-base font-extrabold uppercase tracking-wide text-sky-600 sm:text-lg">
                INNOVACIÓN
              </h3>
              <p className="mt-1.5 max-w-[230px] text-sm font-medium leading-relaxed text-slate-600">
                Tecnología aplicada al desarrollo de nuestros productos.
              </p>
            </div>

            {/* 3. CALIDAD */}
            <div className="flex select-none flex-col items-center px-6 text-center">
              <div className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-sky-200/80 bg-gradient-to-b from-sky-100/90 to-sky-200/60 shadow-sm">
                  <svg viewBox="0 0 64 64" className="h-12 w-12">
                    <defs>
                      <linearGradient id="shieldOuterHome" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#bae6fd" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                      <linearGradient id="shieldLeftHome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                      <linearGradient id="shieldRightHome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0284c7" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M32 8L13 15.5v15.2C13 44 21.1 52.9 32 56c10.9-3.1 19-12 19-25.3V15.5L32 8z"
                      fill="url(#shieldOuterHome)"
                    />
                    <path
                      d="M32 11.5L16 17.8v12.9c0 11.2 6.8 18.8 16 21.6V11.5z"
                      fill="url(#shieldLeftHome)"
                    />
                    <path
                      d="M32 11.5v40.8c9.2-2.8 16-10.4 16-21.6V17.8L32 11.5z"
                      fill="url(#shieldRightHome)"
                    />
                    <path
                      d="M24.5 32.5l5 5 10.5-10.5"
                      stroke="#ffffff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="-mt-1.5 h-2.5 w-16 rounded-full bg-sky-200/80 ring-1 ring-sky-300/50"></div>
              </div>
              <h3 className="mt-4 text-base font-extrabold uppercase tracking-wide text-sky-600 sm:text-lg">
                CALIDAD
              </h3>
              <p className="mt-1.5 max-w-[230px] text-sm font-medium leading-relaxed text-slate-600">
                Compromiso con la resistencia y durabilidad.
              </p>
            </div>

            {/* 4. PRESENCIA REGIONAL */}
            <div className="flex select-none flex-col items-center px-6 text-center">
              <div className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-sky-200/80 bg-gradient-to-b from-sky-100/90 to-sky-200/60 shadow-sm">
                  <svg viewBox="0 0 64 64" className="h-12 w-12">
                    <defs>
                      <radialGradient id="globeOceanHome" cx="35%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#bae6fd" />
                        <stop offset="55%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </radialGradient>
                      <linearGradient id="globeLandHome" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#0284c7" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <circle cx="32" cy="32" r="22" fill="url(#globeOceanHome)" />
                    <path
                      d="M18 18c3-2 7-2 9 1s1 6-2 8-4 4-2 6 5 2 7 5 1 8-2 11-5 2-6-2-2-6-5-8-4-5-3-9 1-9 4-12z"
                      fill="url(#globeLandHome)"
                    />
                    <path
                      d="M38 14c4 1 8 4 9 8s-2 7-5 8-5 2-4 5 4 4 5 7-2 7-5 8-5-3-5-6 1-6-1-9-3-5-1-9 3-10 7-12z"
                      fill="url(#globeLandHome)"
                      opacity="0.9"
                    />
                    <ellipse cx="25" cy="20" rx="8" ry="4" transform="rotate(-25 25 20)" fill="#ffffff" opacity="0.35" />
                  </svg>
                </div>
                <div className="-mt-1.5 h-2.5 w-16 rounded-full bg-sky-200/80 ring-1 ring-sky-300/50"></div>
              </div>
              <h3 className="mt-4 text-base font-extrabold uppercase tracking-wide text-sky-600 sm:text-lg">
                PRESENCIA REGIONAL
              </h3>
              <p className="mt-1.5 max-w-[230px] text-sm font-medium leading-relaxed text-slate-600">
                Productos para Bolivia y mercados de la región.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* 2. PRESENTACIÓN DE LA EMPRESA */}
      {/* ========================================================= */}
      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
            Nuestra Esencia
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Innovación en Plásticos Reforzados y Mármol Reconstituido
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-sky-500"></div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            En <strong className="text-slate-900">INDUSTRIAS REFORPLAZ</strong> combinamos maestría artesanal con procesos químicos avanzados de laminación. Desarrollamos desde atracciones acuáticas que resisten décadas de uso continuo hasta monumentos urbanos que embellecen ciudades enteras.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. BENEFICIOS DE LA FIBRA DE VIDRIO */}
      {/* ========================================================= */}
      <section className="border-y border-sky-200/70 bg-sky-50/60 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
              ¿Por qué Fibra de Vidrio?
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Ventajas Competitivas del Material
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((b, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-sky-200/80 bg-white p-6 shadow-sm shadow-sky-100 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-md hover:shadow-sky-200/40"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 border border-sky-200 group-hover:scale-110 transition-transform">
                  <Icon name={b.icono} className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{b.titulo}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {b.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. PRODUCTOS DESTACADOS CON GALERÍA Y BOTÓN A CADA UNO */}
      {/* ========================================================= */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                Líneas de Producción
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Nuestras Especialidades
              </h2>
            </div>

            <button
              type="button"
              onClick={() => handleIrAProducto("todos")}
              className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-bold text-sky-800 hover:bg-sky-500 hover:text-white transition cursor-pointer shadow-xs"
            >
              <span>Ver todos los productos</span>
              <Icon name="ArrowRight" className="h-4.5 w-4.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productosDestacados.map((item) => (
              <div
                key={item.id}
                onClick={() => handleIrAProducto(item.id)}
                className="group flex flex-col overflow-hidden rounded-3xl border border-sky-200/80 bg-white shadow-md shadow-sky-100/80 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-200/50 cursor-pointer"
              >
                {/* IMAGEN DE MUESTRA LOCAL */}
                <div className="relative h-64 w-full overflow-hidden bg-sky-50">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent"></div>
                  
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-sky-800 backdrop-blur-md shadow-xs">
                    <Icon name={item.icono} className="h-4 w-4 text-sky-600" />
                    {item.subtitulo}
                  </span>
                </div>

                {/* CONTENIDO */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition">
                    {item.titulo}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.descripcion}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-sky-100 pt-4 text-sm font-bold text-sky-700">
                    <span>Ver fotos y modelos</span>
                    <Icon name="ChevronRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EMPRESAS ALIADAS Y CLIENTES */}
      {/* ========================================================= */}
      <section className="border-t border-sky-200/70 bg-sky-50/60 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-bold text-sky-800 shadow-xs">
              <Icon name="Award" className="h-4 w-4 text-sky-600" />
              Confianza y Respaldo
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Empresas e Instituciones que Confían en Nosotros
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-slate-600">
              Colaboramos con gobiernos municipales, industrias mineras y complejos turísticos en Bolivia y la región.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {clientes.map((c) => (
              <div
                key={c.nombre}
                className="flex min-h-[170px] flex-col items-center justify-center rounded-2xl border border-sky-200 bg-white p-5 shadow-sm select-none"
              >
                <div className="mb-3 flex h-24 w-full items-center justify-center rounded-xl bg-white">
                  <img
                    src={c.imagen}
                    alt={c.nombre}
                    loading="lazy"
                    draggable="false"
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-center text-base font-bold text-slate-800">
                  {c.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. LLAMADO FINAL */}
      {/* ========================================================= */}
      <section className="border-t border-sky-200/80 bg-gradient-to-b from-sky-100/60 via-white to-white px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
            INDUSTRIAS REFORPLAZ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-5xl">
            ¿Listo para hacer realidad tu proyecto?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700">
            Envíanos tus requerimientos técnicos o solicita asesoría personalizada con nuestros expertos en fibra de vidrio.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/59167006297?text=Hola%20REFORPLAZ,%20deseo%20asesoramiento%20para%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-bold text-white shadow-md shadow-emerald-600/20 transition hover:scale-105 active:scale-95"
            >
              <Icon name="WhatsApp" className="h-5 w-5" />
              Contactar por WhatsApp
            </a>

            {cambiarPagina && (
              <button
                type="button"
                onClick={() => cambiarPagina("contactos")}
                className="inline-flex items-center gap-2 rounded-2xl border border-sky-200 bg-white px-8 py-4 text-base font-bold text-slate-700 transition hover:border-sky-400 hover:text-slate-900 cursor-pointer shadow-xs"
              >
                <Icon name="Phone" className="h-5 w-5" />
                Ver Teléfonos y Ubicación
              </button>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Inicio;
