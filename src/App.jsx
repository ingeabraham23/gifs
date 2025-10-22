import { useState } from "react";
import "./App.css";

const gifList = [
  "adp.gif",
  "araña.gif",
  "araña_joyboy.gif",
  "bandera.gif",
  "bruja.gif",
  "calabazas.gif",
  "calabaza.gif",
  "central_de_abastos.gif",
  "corazon.gif",
  "cranky_01.gif",
  "cranky_02.gif",
  "dia_de_muertos.gif",
  "diablin.gif",
  "donkey.gif",
  "feliz_navidad.gif",
  "feria.gif",
  "feria_1.gif",
  "feria_1_ultrahd.gif",
  "feria_2.gif",
  "feria_2_ultrahd.gif",
  "ghost_pacman.gif",
  "honda.gif",
  "halloween.gif",
  "halloween_02.gif",
  "halloween_03.gif",
  "halloween_04.gif",
  "halloween_full.gif",
  "imss.gif",
  "imss_2.gif",
  "ken.gif",
  "kong_music.gif",
  "logo.gif",
  "mario_bros.gif",
  "mario_chiquito.gif",
  "mario_long.gif",
  "mario_turtle.gif",
  "marios.gif",
  "matrix_codigo.gif",
  "matrix_joyboy.gif",
  "matrix_reloaded.gif",
  "matrix_reloaded_ultra.gif",
  "navidad.gif",
  "negro64x16.gif",
  "negro80x20.gif",
  "negro128x32.gif",
  "onda_cabeza.gif",
  "pacman.gif",
  "pacman_2.gif",
  "pacman_neon.gif",
  "por_que_me_gustas_wey.gif",
  "por_que_me_gustas_wey_64_x_32.gif",
  "predator_01.gif",
  "predator_02.gif",
  "ryu.gif",
  "ryu_cammy.gif",
  "sonic.gif",
  "spider_joyboy.gif",
  "status.gif",
  "status_b.gif",
  "viva_mexico.gif",
  "viva_mexico_2.gif",
  "viva_mexico_3.gif",
  "viva_mexico_4.gif",
  "viva_mexico_5.gif",
  "viva_mexico_6.gif",
  "viva_mexico_5_ultra.gif",
  "yoshi.gif",
  "you_onda.gif",
];

const formatearNombre = (nombre) => {
  return nombre
    .replace(/\.gif$/i, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

const GifGallery = () => {
  const [copiadoIndex, setCopiadoIndex] = useState(null);

  // ✅ BASE_URL absoluto correcto para tu sitio GitHub Pages
  const BASE_URL = "https://ingeabraham23.github.io/gifs/gifs/";

  const copiarLink = async (gifUrl, index) => {
    try {
      await navigator.clipboard.writeText(gifUrl);
      setCopiadoIndex(index);
      setTimeout(() => setCopiadoIndex(null), 1500);
    } catch (error) {
      console.error("Error al copiar:", error);
      alert("No se pudo copiar el enlace 😞");
    }
  };

  return (
    <div className="galeria-container">
      <div className="galeria-grid">
        {gifList.map((gif, index) => {
          const gifUrl = `${BASE_URL}${gif}`;

          return (
            <div key={index} className="gif-card">
              <img
                src={gifUrl}
                alt={`GIF ${index}`}
                className="gif-imagen"
              />
              <p className="gif-nombre">{formatearNombre(gif)}</p>

              <div className="botones-acciones">
                <a href={gifUrl} download className="boton-descargar">
                  Descargar
                </a>
                <button
                  type="button"
                  onClick={() => copiarLink(gifUrl, index)}
                  className="boton-copiar"
                >
                  {copiadoIndex === index ? "¡Copiado!" : "Copiar enlace"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GifGallery;
