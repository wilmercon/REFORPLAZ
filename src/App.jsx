import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Icon from "./components/Icons";

import Inicio from "./Pages/Inicio/Inicio.jsx";
import Productos from "./Pages/ProductosTem/Productos.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import Contactos from "./Pages/Contactos/Contactos.jsx";
import Nosotros from "./Pages/Nosotros/Nosotros.jsx";

function App() {
  const [paginaActual, setPaginaActual] = useState("inicio");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  const cambiarPagina = (pagina) => {
    // Normalizar a minúsculas
    const pag = (pagina || "inicio").toLowerCase();
    setPaginaActual(pag);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const seleccionarCategoria = (categoriaId) => {
    setCategoriaSeleccionada(categoriaId);
    setPaginaActual("productos");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-sky-50/50 font-sans text-slate-800 antialiased">
      
      {/* ENCABEZADO FIJO / HEADER DINÁMICO */}
      <Header
        paginaActual={paginaActual}
        cambiarPagina={cambiarPagina}
        onSeleccionarCategoria={seleccionarCategoria}
      />

      {/* CUERPO PRINCIPAL DINÁMICO SEGÚN PÁGINA */}
      <div className="flex-1">
        {paginaActual === "inicio" && (
          <Inicio
            cambiarPagina={cambiarPagina}
            onSeleccionarCategoria={seleccionarCategoria}
          />
        )}

        {paginaActual === "productos" && (
          <Productos
            key={categoriaSeleccionada}
            categoriaInicial={categoriaSeleccionada}
            cambiarPagina={cambiarPagina}
          />
        )}

        {paginaActual === "blog" && (
          <Blog cambiarPagina={cambiarPagina} />
        )}

        {paginaActual === "contactos" && (
          <Contactos />
        )}

        {paginaActual === "nosotros" && (
          <Nosotros cambiarPagina={cambiarPagina} />
        )}
      </div>

      {/* PIE DE PÁGINA (SOLO EN INICIO) */}
      {paginaActual === "inicio" && (
        <Footer cambiarPagina={cambiarPagina} />
      )}

      {/* BOTÓN FLOTANTE RÁPIDO DE WHATSAPP */}
      <a
        href="https://wa.me/59167006297?text=Hola%20REFORPLAZ,%20quisiera%20hacer%20una%20consulta%20por%20favor"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-400 active:scale-95"
      >
        <Icon name="WhatsApp" className="h-7 w-7" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </a>

    </div>
  );
}

export default App;
