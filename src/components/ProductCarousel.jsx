import { useState, useEffect, useCallback } from "react";
import Icon from "./Icons";

function ProductCarousel({ producto }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const [lightboxAbierto, setLightboxAbierto] = useState(false);
  const [imagenesFallidas, setImagenesFallidas] = useState({});

  const imagenes = producto.imagenes && producto.imagenes.length > 0
    ? producto.imagenes
    : [];

  const siguienteImagen = useCallback(() => {
    if (imagenes.length === 0) return;
    setIndiceActual((prev) => (prev + 1) % imagenes.length);
  }, [imagenes.length]);

  const anteriorImagen = useCallback(() => {
    if (imagenes.length === 0) return;
    setIndiceActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  }, [imagenes.length]);

  const handleImageError = (index) => {
    setImagenesFallidas((prev) => ({ ...prev, [index]: true }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxAbierto) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") siguienteImagen();
      if (e.key === "ArrowLeft") anteriorImagen();
      if (e.key === "Escape") setLightboxAbierto(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxAbierto, siguienteImagen, anteriorImagen]);

  const currentImgUrl = imagenes[indiceActual];
  const isCurrentFailed = imagenesFallidas[indiceActual];
  const numeroFoto = indiceActual + 1;
  const totalFotos = imagenes.length;
  const mensajeWhatsApp = `Hola REFORPLAZ, deseo cotizar la Foto ${numeroFoto} del producto: ${producto.nombre}`;
  const urlWhatsApp = `https://wa.me/59167006297?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <div className="relative flex flex-col rounded-3xl border border-sky-200/80 bg-white p-5 shadow-lg shadow-sky-100/80 transition-all duration-300 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-200/50">
      
      {/* CABECERA DE LA TARJETA */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700 border border-sky-200">
            <Icon name={producto.icono || "Layers"} className="h-6 w-6" />
          </div>
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
              {producto.subtitulo || "REFORPLAZ"}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {producto.nombre}
            </h3>
          </div>
        </div>

        {/* CONTADOR DE FOTOS */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-sm font-semibold text-sky-800">
          <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
          Foto {indiceActual + 1} de {imagenes.length}
        </span>
      </div>

      {/* CONTENEDOR PRINCIPAL DEL CARRUSEL */}
      <div className="group relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl bg-slate-100 border border-sky-100 shadow-inner">
        
        {/* IMAGEN PRINCIPAL (TAMAÑO UNIFORME) O PLACEHOLDER ELEGANTE */}
        {!isCurrentFailed && currentImgUrl ? (
          <img
            key={currentImgUrl}
            src={currentImgUrl}
            alt={`${producto.nombre} - vista ${indiceActual + 1}`}
            onError={() => handleImageError(indiceActual)}
            onClick={() => setLightboxAbierto(true)}
            className="h-full w-full cursor-zoom-in object-cover object-center"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100 p-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 border border-sky-300 text-sky-700">
              <Icon name={producto.icono || "Layers"} className="h-8 w-8" />
            </div>
            <p className="text-lg font-bold text-slate-800">{producto.nombre}</p>
            <p className="mt-1 text-xs text-slate-500 max-w-xs">
              Muestra fotográfica de catálogo industrial en fibra de vidrio.
            </p>
          </div>
        )}

        {/* OVERLAY SUTIL INFERIOR */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-sky-950/25 to-transparent"></div>

        {/* BOTÓN ANTERIOR */}
        <button
          type="button"
          onClick={anteriorImagen}
          aria-label="Imagen anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-800 backdrop-blur-md border border-sky-200 shadow-md transition-all duration-200 hover:bg-sky-500 hover:text-white hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
        >
          <Icon name="ChevronLeft" className="h-6 w-6" />
        </button>

        {/* BOTÓN SIGUIENTE */}
        <button
          type="button"
          onClick={siguienteImagen}
          aria-label="Siguiente imagen"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-800 backdrop-blur-md border border-sky-200 shadow-md transition-all duration-200 hover:bg-sky-500 hover:text-white hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
        >
          <Icon name="ChevronRight" className="h-6 w-6" />
        </button>

        {/* BOTÓN EXPANDIR / PANTALLA COMPLETA */}
        <button
          type="button"
          onClick={() => setLightboxAbierto(true)}
          title="Ver en pantalla completa"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-slate-700 backdrop-blur-md border border-sky-200 shadow-sm transition-all hover:bg-sky-500 hover:text-white cursor-pointer"
        >
          <Icon name="Expand" className="h-4 w-4" />
        </button>
      </div>

      {/* TIRA DE MINIATURAS (THUMBNAILS) */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-sky-200">
        {imagenes.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setIndiceActual(idx)}
            className={`relative h-14 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
              idx === indiceActual
                ? "border-sky-500 ring-2 ring-sky-400/30 scale-105"
                : "border-sky-100 opacity-60 hover:opacity-100 hover:border-sky-300"
            }`}
          >
            <img
              src={img}
              alt={`Miniatura ${idx + 1}`}
              className="h-full w-full object-cover"
              onError={() => handleImageError(idx)}
            />
          </button>
        ))}
      </div>

      {/* DESCRIPCIÓN Y BENEFICIOS */}
      <div className="mt-4 border-t border-sky-100 pt-4">
        <p className="text-base leading-relaxed text-slate-700">
          {producto.descripcion}
        </p>

        {producto.beneficios && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {producto.beneficios.map((beneficio, bIdx) => (
              <div
                key={bIdx}
                className="flex items-center gap-2.5 rounded-xl bg-sky-50/70 px-3.5 py-2.5 border border-sky-200/70 text-sm font-semibold text-slate-800"
              >
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-200 text-sky-800">
                  <Icon name="Check" className="h-3.5 w-3.5" />
                </div>
                <span>{beneficio}</span>
              </div>
            ))}
          </div>
        )}

        {/* ACCIONES: COTIZAR POR WHATSAPP CON FOTO SELECCIONADA */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-sky-100">
          <div className="text-sm font-semibold text-slate-600">
            ¿Necesitas medidas personalizadas?
          </div>
          <a
            href={urlWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-105 hover:from-emerald-700 hover:to-teal-700 active:scale-95 cursor-pointer"
          >
            <Icon name="WhatsApp" className="h-4.5 w-4.5" />
            Cotizar
          </a>
        </div>
      </div>

      {/* MODAL LIGHTBOX / PANTALLA COMPLETA */}
      {lightboxAbierto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setLightboxAbierto(false)}
            aria-label="Cerrar modal"
            className="absolute right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-red-500 transition cursor-pointer"
          >
            <Icon name="Close" className="h-6 w-6" />
          </button>

          <div className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
            <img
              src={currentImgUrl}
              alt={producto.nombre}
              className="max-h-[75vh] w-auto object-contain mx-auto"
            />
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 bg-slate-950/90 px-6 py-4">
              <div>
                <h4 className="text-xl font-bold text-white">{producto.nombre}</h4>
                <p className="text-sm text-slate-300">
                  Foto {numeroFoto} de {totalFotos}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={urlWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700"
                >
                  <Icon name="WhatsApp" className="h-4 w-4" />
                  Cotizar
                </a>
                <button
                  type="button"
                  onClick={anteriorImagen}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-sky-500 transition cursor-pointer"
                >
                  <Icon name="ChevronLeft" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={siguienteImagen}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-sky-500 transition cursor-pointer"
                >
                  <Icon name="ChevronRight" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCarousel;
