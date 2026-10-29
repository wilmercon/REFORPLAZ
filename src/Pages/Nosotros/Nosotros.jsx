import Icon from "../../components/Icons";

function Nosotros({ cambiarPagina }) {

  // Países con presencia internacional y datos de impacto
  const paises = [
    {
      id: "chile",
      nombre: "Chile",
      bandera: "/imagenes/banderas/cl.png",
      proyectos: "Toboganes turísticos y módulos sanitarios portátiles",
      region: "Zona Norte y Central"
    },
    {
      id: "peru",
      nombre: "Perú",
      bandera: "/imagenes/banderas/pe.png",
      proyectos: "Parques acuáticos y esculturas temáticas",
      region: "Lima, Arequipa y Cusco"
    },
    {
      id: "ecuador",
      nombre: "Ecuador",
      bandera: "/imagenes/banderas/ec.png",
      proyectos: "Embarcaciones náuticas y equipamiento recreativo",
      region: "Guayaquil y Quito"
    },
    {
      id: "paraguay",
      nombre: "Paraguay",
      bandera: "/imagenes/banderas/py.png",
      proyectos: "Reservorios y tanques industriales en fibra de vidrio",
      region: "Asunción y alrededores"
    },
  ];

  const caracteristicas = [
    {
      id: "fabricacion",
      titulo: "FABRICACIÓN",
      detalle: "Soluciones en fibra de vidrio y mármol reconstituido.",
      svg: (
        <svg viewBox="0 0 64 64" className="h-12 w-12">
          <defs>
            <linearGradient id="fabGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="fabDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          {/* Chimenea */}
          <path d="M44 12h9l2 22H42l2-22z" fill="url(#fabGrad)" />
          <rect x="43.5" y="15" width="10" height="3" rx="1" fill="#e0f2fe" />
          <rect x="43" y="21" width="11" height="2.5" rx="1" fill="#bae6fd" />
          {/* Edificio industrial con techo diente de sierra */}
          <path d="M10 52V28l11 8V28l11 8V28l10 7v17H10z" fill="url(#fabDark)" />
          <path d="M42 34h13v18H42V34z" fill="url(#fabGrad)" />
          {/* Ventanas y puerta */}
          <rect x="15" y="39" width="5" height="5" rx="1" fill="#e0f2fe" />
          <rect x="24" y="39" width="5" height="5" rx="1" fill="#e0f2fe" />
          <rect x="33" y="39" width="5" height="5" rx="1" fill="#e0f2fe" />
          <rect x="46" y="39" width="5" height="5" rx="1" fill="#e0f2fe" />
          <rect x="23" y="46" width="7" height="6" rx="1" fill="#bae6fd" />
          <rect x="8" y="51" width="49" height="3" rx="1.5" fill="#0369a1" />
        </svg>
      ),
    },
    {
      id: "innovacion",
      titulo: "INNOVACIÓN",
      detalle: "Tecnología aplicada al desarrollo de nuestros productos.",
      svg: (
        <svg viewBox="0 0 64 64" className="h-12 w-12">
          <defs>
            <linearGradient id="gearGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="55%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="bulbGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
          </defs>
          {/* Engranaje exterior */}
          <path
            fill="url(#gearGrad)"
            d="M35.5 8h-7l-1.2 5.3a17.8 17.8 0 00-4.5 1.9l-4.6-2.9-4.9 4.9 2.9 4.6a17.8 17.8 0 00-1.9 4.5L9 27.5v7l5.3 1.2a17.8 17.8 0 001.9 4.5l-2.9 4.6 4.9 4.9 4.6-2.9a17.8 17.8 0 004.5 1.9L28.5 54h7l1.2-5.3a17.8 17.8 0 004.5-1.9l4.6 2.9 4.9-4.9-2.9-4.6a17.8 17.8 0 001.9-4.5L55 34.5v-7l-5.3-1.2a17.8 17.8 0 00-1.9-4.5l2.9-4.6-4.9-4.9-4.6 2.9a17.8 17.8 0 00-4.5-1.9L35.5 8z"
          />
          <circle cx="32" cy="31" r="12.5" fill="#0369a1" />
          {/* Bombilla interior */}
          <path
            d="M32 19.5a9.5 9.5 0 00-6 16.8c1.2 1 2 2.4 2.2 3.9h7.6c.2-1.5 1-2.9 2.2-3.9a9.5 9.5 0 00-6-16.8z"
            fill="url(#bulbGrad)"
          />
          <rect x="28.5" y="41.5" width="7" height="2.2" rx="1" fill="#bae6fd" />
          <rect x="29.5" y="44.5" width="5" height="2" rx="1" fill="#7dd3fc" />
          <path d="M30 35v-5l2-2 2 2v5" stroke="#0284c7" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "calidad",
      titulo: "CALIDAD",
      detalle: "Compromiso con la resistencia y durabilidad.",
      svg: (
        <svg viewBox="0 0 64 64" className="h-12 w-12">
          <defs>
            <linearGradient id="shieldOuter" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="shieldLeft" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="shieldRight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          {/* Escudo borde exterior */}
          <path
            d="M32 8L13 15.5v15.2C13 44 21.1 52.9 32 56c10.9-3.1 19-12 19-25.3V15.5L32 8z"
            fill="url(#shieldOuter)"
          />
          {/* Escudo interior bicolor */}
          <path
            d="M32 11.5L16 17.8v12.9c0 11.2 6.8 18.8 16 21.6V11.5z"
            fill="url(#shieldLeft)"
          />
          <path
            d="M32 11.5v40.8c9.2-2.8 16-10.4 16-21.6V17.8L32 11.5z"
            fill="url(#shieldRight)"
          />
          {/* Check blanco */}
          <path
            d="M24.5 32.5l5 5 10.5-10.5"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: "presencia",
      titulo: "PRESENCIA REGIONAL",
      detalle: "Productos para Bolivia y mercados de la región.",
      svg: (
        <svg viewBox="0 0 64 64" className="h-12 w-12">
          <defs>
            <radialGradient id="globeOcean" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="55%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </radialGradient>
            <linearGradient id="globeLand" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          {/* Esfera oceánica */}
          <circle cx="32" cy="32" r="22" fill="url(#globeOcean)" />
          {/* Continentes estilizados */}
          <path
            d="M18 18c3-2 7-2 9 1s1 6-2 8-4 4-2 6 5 2 7 5 1 8-2 11-5 2-6-2-2-6-5-8-4-5-3-9 1-9 4-12z"
            fill="url(#globeLand)"
          />
          <path
            d="M38 14c4 1 8 4 9 8s-2 7-5 8-5 2-4 5 4 4 5 7-2 7-5 8-5-3-5-6 1-6-1-9-3-5-1-9 3-10 7-12z"
            fill="url(#globeLand)"
            opacity="0.9"
          />
          {/* Brillo superior */}
          <ellipse cx="25" cy="20" rx="8" ry="4" transform="rotate(-25 25 20)" fill="#ffffff" opacity="0.35" />
        </svg>
      ),
    },
  ];

  const pilares = [
    {
      icono: "Target",
      titulo: "Misión",
      subtitulo: "Nuestra razón de ser",
      descripcion:
        "Diseñar y fabricar productos de fibra de vidrio y mármol reconstituido de la más alta calidad que respondan a las necesidades de nuestros clientes en distintos sectores. Nos comprometemos a ofrecer soluciones innovadoras, resistentes y funcionales, desarrolladas con altos estándares técnicos para enriquecer espacios recreativos, turísticos e industriales.",
      color: "from-sky-100/70 via-white to-cyan-50/50",
      borde: "border-sky-200",
      textoColor: "text-sky-700"
    },
    {
      icono: "Eye",
      titulo: "Visión",
      subtitulo: "Hacia dónde vamos",
      descripcion:
        "Consolidarnos como la empresa líder indiscutible en Bolivia y una referencia en el mercado sudamericano en soluciones integrales de fibra de vidrio. Aspiramos a continuar expandiendo nuestra presencia internacional, destacándonos por la innovación constante, la artesanía de precisión y el compromiso inquebrantable en cada proyecto.",
      color: "from-cyan-100/60 via-white to-sky-50/50",
      borde: "border-cyan-200",
      textoColor: "text-cyan-700"
    },
  ];

  const valores = [
    {
      titulo: "Ingeniería en Fibra de Vidrio",
      descripcion: "Uso de resinas isoftálicas y fibra multiaxial para máxima solidez mecánica.",
      icono: "Shield"
    },
    {
      titulo: "Mármol Reconstituido",
      descripcion: "Técnicas exclusivas para esculturas monumentales y acabados arquitectónicos pétreos.",
      icono: "Sparkles"
    },
    {
      titulo: "Sostenibilidad y Eficiencia",
      descripcion: "Soluciones de larga vida útil que reducen el impacto ecológico y costos de reposición.",
      icono: "Water"
    },
    {
      titulo: "Personalización Integral",
      descripcion: "Capacidad de convertir cualquier plano, idea o maqueta en una estructura real.",
      icono: "Factory"
    }
  ];

  return (
    <main className="min-h-screen bg-sky-50/40 text-slate-800 selection:bg-sky-500 selection:text-white">

      {/* ========================================================= */}
      {/* 1. HERO CON TONOS CELESTE Y BLANCO */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden border-b border-sky-200/80 bg-gradient-to-b from-sky-100/90 via-sky-50 to-white px-6 pt-2 pb-10 sm:pt-3 sm:pb-12">
        <div className="pointer-events-none absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-sky-300/30 blur-[120px]"></div>
        <div className="pointer-events-none absolute -right-48 bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-[120px]"></div>

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-5 py-2 text-sm font-bold uppercase tracking-wider text-sky-800 backdrop-blur-md shadow-xs">
            <Icon name="Factory" className="h-5 w-5 text-sky-600" />
            Conoce Nuestra Trayectoria
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            INDUSTRIAS{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              REFORPLAZ
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            Tecnología, precisión e innovación continua en productos de fibra de vidrio y mármol reconstituido para toda Bolivia y la región.
          </p>

          {/* PILARES DESTACADOS (FABRICACIÓN, INNOVACIÓN, CALIDAD, PRESENCIA REGIONAL) */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-sky-200/90">
            {caracteristicas.map((item) => (
              <div
                key={item.id}
                className="flex select-none flex-col items-center px-6 text-center"
              >
                {/* Ícono circular con pedestal */}
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-sky-200/80 bg-gradient-to-b from-sky-100/90 to-sky-200/60 shadow-sm">
                    {item.svg}
                  </div>
                  <div className="-mt-1.5 h-2.5 w-16 rounded-full bg-sky-200/80 ring-1 ring-sky-300/50"></div>
                </div>

                <h3 className="mt-4 text-base font-extrabold uppercase tracking-wide text-sky-600 sm:text-lg">
                  {item.titulo}
                </h3>
                <p className="mt-1.5 max-w-[230px] text-sm font-medium leading-relaxed text-slate-600">
                  {item.detalle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ACERCA DE NOSOTROS - HISTORIA Y ESPECIALIDAD */}
      {/* ========================================================= */}
      <section className="relative bg-white px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            
            {/* TEXTO DESCRIPTIVO */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                Liderazgo y Fabricación
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Soluciones Industriales y Recreativas de Primer Nivel
              </h2>
              
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  <strong className="text-slate-900">INDUSTRIAS REFORPLAZ</strong> es una empresa boliviana altamente especializada en el modelado, diseño estructural y fabricación de piezas elaboradas en fibra de vidrio de alta densidad y mármol reconstituido.
                </p>
                <p>
                  Desarrollamos soluciones innovadoras para proyectos recreativos, arquitectónicos e industriales, combinando tecnología de punta, creatividad artística y rigurosa experiencia técnica en materiales compuestos.
                </p>
                <p>
                  Nuestra sólida trayectoria incluye la materialización de parques infantiles, toboganes para grandes balnearios, esculturas monumentales en rotondas, embarcaciones insumergibles y estructuras a medida para clientes públicos y corporativos.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {cambiarPagina && (
                  <button
                    type="button"
                    onClick={() => cambiarPagina("productos")}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-600 px-7 py-3.5 text-base font-bold text-white shadow-md shadow-sky-500/20 transition hover:from-sky-600 hover:to-cyan-700 active:scale-95 cursor-pointer"
                  >
                    <Icon name="Layers" className="h-5 w-5" />
                    Explorar Productos
                  </button>
                )}
                {cambiarPagina && (
                  <button
                    type="button"
                    onClick={() => cambiarPagina("contactos")}
                    className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-7 py-3.5 text-base font-bold text-slate-700 transition hover:border-sky-400 hover:text-slate-900 cursor-pointer shadow-xs"
                  >
                    <Icon name="Phone" className="h-5 w-5" />
                    Contáctanos
                  </button>
                )}
              </div>
            </div>

            {/* TARJETAS DE VALOR DESTACADO */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {valores.map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-sky-200/80 bg-sky-50/50 p-6 shadow-sm shadow-sky-100 transition-all hover:border-sky-400 hover:bg-white hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 border border-sky-200">
                    <Icon name={v.icono} className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{v.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {v.descripcion}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MISIÓN Y VISIÓN (TARJETAS GLASSMORPHIC CLARAS) */}
      {/* ========================================================= */}
      <section className="border-y border-sky-200/80 bg-sky-50/70 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
              Nuestra Identidad Corporativa
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Misión y Visión
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Los principios que impulsan cada obra que producimos y el horizonte hacia el cual avanzamos día a día.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {pilares.map((p, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-3xl border ${p.borde} bg-gradient-to-br ${p.color} p-8 sm:p-10 shadow-lg shadow-sky-100/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-sky-200 shadow-sm">
                    <Icon name={p.icono} className={`h-7 w-7 ${p.textoColor}`} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      {p.subtitulo}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      {p.titulo}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 h-1 w-16 rounded-full bg-sky-500"></div>

                <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                  {p.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. PRESENCIA INTERNACIONAL */}
      {/* ========================================================= */}
      <section className="relative bg-white px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
              Alcance Regional
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Nuestra Presencia Internacional
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A lo largo de los años, <strong className="text-slate-900">REFORPLAZ</strong> ha expandido sus operaciones más allá del mercado nacional, participando en proyectos internacionales y forjando alianzas estratégicas que nos permiten exportar soluciones duraderas por toda Sudamérica.
            </p>
          </div>

          {/* TARJETAS DE PAÍSES INTERACTIVAS */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {paises.map((pais) => (
              <div
                key={pais.id}
                className="relative flex select-none flex-col items-center justify-center rounded-3xl border border-sky-200 bg-sky-50/50 p-6 text-center shadow-md shadow-sky-100/70"
              >
                {/* BANDERA ESTÁTICA */}
                <div className="relative mb-5 flex h-20 w-28 items-center justify-center overflow-hidden rounded-2xl border border-sky-100 bg-white p-2 shadow-sm">
                  <img
                    src={pais.bandera}
                    alt={`Bandera de ${pais.nombre}`}
                    draggable="false"
                    className="h-full w-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 tracking-wide">
                  {pais.nombre}
                </h3>

                <p className="mt-2 text-sm font-bold text-sky-600">
                  {pais.region}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 border-t border-sky-100 pt-3">
                  {pais.proyectos}
                </p>
              </div>
            ))}
          </div>

          {/* AVISO DE EXPORTACIÓN */}
          <div className="mt-12 rounded-2xl border border-sky-200 bg-sky-50/70 p-6 text-center">
            <p className="text-sm font-medium text-slate-700">
              ¿Requieres exportación o instalación de proyectos en otro país de la región? Contamos con logística y equipo técnico para acompañar tu montaje internacional.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. LLAMADO A LA ACCIÓN FINAL */}
      {/* ========================================================= */}
      <section className="border-t border-sky-200/80 bg-gradient-to-b from-sky-50 to-white px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
            INDUSTRIAS REFORPLAZ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-5xl">
            Innovación, Calidad y Compromiso
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
            Seguimos transformando el futuro de los espacios acuáticos, cívicos e industriales con la versatilidad inigualable de la fibra de vidrio.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/59167006297?text=Hola%20REFORPLAZ,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-600 px-8 py-4 text-base font-bold text-white shadow-md shadow-sky-500/25 transition hover:from-sky-600 hover:to-cyan-700 active:scale-95"
            >
              <Icon name="WhatsApp" className="h-5 w-5" />
              Chatear con un Asesor
            </a>

            {cambiarPagina && (
              <button
                type="button"
                onClick={() => cambiarPagina("productos")}
                className="inline-flex items-center gap-2 rounded-2xl border border-sky-200 bg-white px-8 py-4 text-base font-bold text-slate-700 transition hover:border-sky-400 hover:text-slate-900 cursor-pointer shadow-xs"
              >
                <Icon name="Layers" className="h-5 w-5" />
                Ver Productos
              </button>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Nosotros;
