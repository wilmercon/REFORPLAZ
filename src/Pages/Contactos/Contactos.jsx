import { useState } from "react";
import Icon from "../../components/Icons";

function Contactos() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    producto: "Juegos Acuáticos",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const textoWhatsApp = `Hola REFORPLAZ,%0A%0ASoy *${encodeURIComponent(formulario.nombre)}*%0ATeléfono: ${encodeURIComponent(formulario.telefono)}%0ACorreo: ${encodeURIComponent(formulario.correo || "No indicado")}%0AInterés en: *${encodeURIComponent(formulario.producto)}*%0AMensaje: ${encodeURIComponent(formulario.mensaje)}`;
    window.open(`https://wa.me/59167006297?text=${textoWhatsApp}`, "_blank");
    setEnviado(true);
  };

  const redesSociales = [
    {
      nombre: "Facebook",
      icono: "Facebook",
      enlace: "https://www.facebook.com/share/18hErmEm16/",
      color: "bg-blue-600 hover:bg-blue-500",
      usuario: "@reforplaz",
    },
    {
      nombre: "Instagram",
      icono: "Instagram",
      enlace: "https://www.instagram.com/industrias.reforplaz?igsh=aXFhNjFyMTh2NnBm",
      color: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90",
      usuario: "@industrias.reforplaz",
    },
    {
      nombre: "YouTube",
      icono: "YouTube",
      enlace: "https://youtube.com/@industriasreforplaz?si=O02bApabIH1axJ0Q",
      color: "bg-red-600 hover:bg-red-500",
      usuario: "Industrias REFORPLAZ",
    },
    {
      nombre: "WhatsApp",
      icono: "WhatsApp",
      enlace: "https://wa.me/59167006297",
      color: "bg-emerald-600 hover:bg-emerald-500",
      usuario: "+591 67006297",
    },
  ];

  const informacion = [
    {
      titulo: "Teléfonos de Contacto",
      icono: "Phone",
      lineas: [
        { label: "Línea Central / WhatsApp", valor: "+591 67006297", href: "tel:+59167006297" },
        { label: "Atención a Clientes", valor: "+591 71512374", href: "tel:+59171512374" },
      ],
    },
    {
      titulo: "Correo Electrónico",
      icono: "Mail",
      lineas: [
        { label: "Cotizaciones y Proyectos", valor: "reforplaz2015@gmail.com", href: "mailto:reforplaz2015@gmail.com" },
      ],
    },
    {
      titulo: "Dirección",
      icono: "MapPin",
      lineas: [
        { label: "Ciudad", valor: "Santa Cruz - Bolivia" },
        { label: "Zona / Planta", valor: "Z/Satélite Norte" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-sky-50/40 text-slate-800 selection:bg-sky-500 selection:text-white">

      {/* ========================================================= */}
      {/* 1. ENCABEZADO DE CONTACTOS - CELESTE Y BLANCO */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden border-b border-sky-200/80 bg-gradient-to-b from-sky-100/90 via-sky-50 to-white px-6 pt-3 pb-10 text-center">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-sky-300/35 blur-3xl"></div>
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-5 py-2 text-sm font-bold uppercase tracking-wider text-sky-800 shadow-xs">
            <Icon name="Phone" className="h-4 w-4 text-sky-600" />
            Canales Oficiales REFORPLAZ
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            ¡Hablemos de tu{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Proyecto!
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            Estamos listos para asesorarte técnica y económicamente. Diseñamos a medida para empresas, municipios y particulares en Bolivia y el exterior.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. TARJETAS DE INFORMACIÓN RÁPIDA */}
      {/* ========================================================= */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {informacion.map((info, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-sky-200/80 bg-white p-8 shadow-md shadow-sky-100/70 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-200/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 border border-sky-200 text-sky-700">
                  <Icon name={info.icono} className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                  {info.titulo}
                </h3>

                <div className="space-y-3.5">
                  {info.lineas.map((linea, lIdx) => (
                    <div key={lIdx}>
                      <span className="block text-sm font-semibold text-slate-500">
                        {linea.label}
                      </span>
                      {linea.href ? (
                        <a
                          href={linea.href}
                          className="mt-0.5 block text-base font-bold text-slate-900 hover:text-sky-600 transition"
                        >
                          {linea.valor}
                        </a>
                      ) : (
                        <span className="mt-0.5 block text-base font-bold text-slate-900">
                          {linea.valor}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* MAPA INTERACTIVO GOOGLE MAPS */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-sky-200/90 bg-white p-2 shadow-lg shadow-sky-100/80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243182.86904159302!2d-63.17644329255772!3d-17.7572470582653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e81ca7c01a63%3A0x5c8b0a53a467611b!2sSanta%20Cruz%20de%20la%20Sierra!5e0!3m2!1ses!2sbo!4v1775944747819!5m2!1ses!2sbo"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Santa Cruz de la Sierra - REFORPLAZ"
              className="w-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FORMULARIO DE COTIZACIÓN + REDES SOCIALES */}
      {/* ========================================================= */}
      <section className="border-t border-sky-200/70 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            
            {/* FORMULARIO DIRECTO */}
            <div className="rounded-3xl border border-sky-200 bg-sky-50/40 p-8 sm:p-10 shadow-lg shadow-sky-100/70">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                Cotización 
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Envíanos tus requerimientos
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Al enviar el formulario, te conectará directamente con nuestro asesor técnico por WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800">
                    Nombre completo o Empresa *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formulario.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez / Constructora"
                    className="mt-1.5 w-full rounded-xl border border-sky-200 bg-white px-4 py-3.5 text-base text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-xs"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-bold text-slate-800">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={formulario.telefono}
                      onChange={handleChange}
                      placeholder="+591 ..."
                      className="mt-1.5 w-full rounded-xl border border-sky-200 bg-white px-4 py-3.5 text-base text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-800">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="correo"
                      value={formulario.correo}
                      onChange={handleChange}
                      placeholder="nombre@correo.com"
                      className="mt-1.5 w-full rounded-xl border border-sky-200 bg-white px-4 py-3.5 text-base text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-800">
                    Producto o Servicio de interés
                  </label>
                  <select
                    name="producto"
                    value={formulario.producto}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-sky-200 bg-white px-4 py-3.5 text-base font-medium text-slate-800 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-xs"
                  >
                    <option value="Juegos Acuáticos y Toboganes">Juegos Acuáticos y Toboganes</option>
                    <option value="Baños Portátiles Ecológicos">Baños Portátiles Ecológicos</option>
                    <option value="Embarcaciones e Hidropedales">Embarcaciones e Hidropedales</option>
                    <option value="Juegos de Gimnasio Urbano">Juegos de Gimnasio Urbano</option>
                    <option value="Monumentos y Esculturas">Monumentos y Esculturas</option>
                    <option value="Tanques Acuáticos e Industriales">Tanques Acuáticos e Industriales</option>
                    <option value="Parques de Interior (Playgrounds)">Parques de Interior (Playgrounds)</option>
                    <option value="Fabricación personalizada a medida">Fabricación personalizada a medida</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-800">
                    Mensaje o detalles de tu proyecto *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows="3"
                    value={formulario.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos medidas, lugar de instalación, tiempos de entrega requeridos..."
                    className="mt-1.5 w-full rounded-xl border border-sky-200 bg-white px-4 py-3.5 text-base text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-sky-500 to-cyan-600 py-4 text-base font-bold text-white shadow-md shadow-sky-500/25 transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  Enviar Consulta
                </button>

                {enviado && (
                  <p className="text-center text-sm font-semibold text-emerald-600 mt-2">
                    ¡Gracias! Te estamos redirigiendo a WhatsApp para iniciar tu atención.
                  </p>
                )}
              </form>
            </div>

            {/* REDES SOCIALES Y HORARIOS */}
            <div className="space-y-8">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                  Comunidad y Novedades
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  Síguenos en Redes Sociales
                </h3>
                <p className="mt-2 text-base text-slate-600">
                  Publicamos fotos semanales de nuestros avances de fábrica, pruebas de carga y entregas en toda Bolivia y países vecinos.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {redesSociales.map((red) => (
                    <a
                      key={red.nombre}
                      href={red.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-sky-200/80 bg-white p-4.5 transition-all hover:border-sky-300 hover:shadow-md group shadow-xs"
                    >
                      <div className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${red.color}`}>
                        <Icon name={red.icono} className="h-6 w-6" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="block text-base font-bold text-slate-900 group-hover:text-sky-600 transition">
                          {red.nombre}
                        </span>
                        <span className="block text-sm font-medium text-slate-500 truncate">
                          {red.usuario}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* HORARIOS */}
              <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="h-6 w-6 text-sky-600" />
                  <h4 className="text-lg font-bold text-slate-900">Horarios de Atención</h4>
                </div>
                <div className="mt-4 space-y-2.5 text-sm text-slate-700">
                  <div className="flex justify-between border-b border-sky-200/80 pb-2">
                    <span>Lunes a Viernes</span>
                    <span className="font-bold text-slate-900">08:00 - 18:30</span>
                  </div>
                  <div className="flex justify-between border-b border-sky-200/80 pb-2">
                    <span>Sábados</span>
                    <span className="font-bold text-slate-900">08:30 - 13:00</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Contactos;
