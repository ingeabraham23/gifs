import { useState } from "react";
import "./Gifs.css";

const BASE_URL = "https://ingeabraham23.github.io/gifs/gifs/";

const categorias = [

    {
        nombre: "URBANOS ROJOS",
        gifs: [
            "ur_sani_gr.gif",
            "ur_cali_gr.gif",
            "ur_sosa_gr.gif",
            "ur_tezo_gr.gif",
            "ur_talzin_gr.gif",
            "ur_taco_gr.gif",


            "ur_centro.gif",
            "ur_centro_lib.gif",


            "ur_sani.gif",
            "ur_cali.gif",
            "ur_sosa.gif",
            "ur_tezo.gif",
            "ur_talzin.gif",
            "ur_taco.gif",
        ],
    },

    {
        nombre: "RUTA 03",
        gifs: [
            "r3_sani.gif",
            "r3_francia.gif",
            "r3_coyotzingo.gif",
            "r3_tecolote_16.gif",
            "r3_tecolote_18.gif",

        ],
    },

    {
        nombre: "RUTA 01",
        gifs: [
            "r1_infonavit.gif",
            "r1_loma.gif",

        ],
    },
    {
        nombre: "FESTIVIDADES",
        gifs: [
            
        ],
    },

    {
        nombre: "NEGROS",
        gifs: [
            "n_64.gif",
            "n_80.gif",
            "n_128.gif",
        ],
    },

    {
        nombre: "CHARACTERS",
        gifs: [
            "ch_pio.gif",
            "ch_pio_largo.gif",
            "ch_mapache_t.gif",

        ],
    },

    {
        nombre: "CALCOMANIAS",
        gifs: [
            "calc_wey.gif",
            "calc_wey_6432.gif",
        ],
    },

    {
        nombre: "ICONOS Y LOGOS",
        gifs: [
            "ico_imss.gif",
        ],
    },

    {
        nombre: "OTROS",
        gifs: [
            "otro_paleta.gif",
        ],
    },

    {
        nombre: "URBANOS VERDES",
        gifs: [
            "uv_acatenobuap.gif",
            "uv_tepetitan.gif",
            "uv_secc23lagarita.gif",
            "uv_seccion1.gif",
            "uv_balto.gif",
            "uv_centro.gif",
            "uv_besos.gif",
            "uv_acatenobuap2.gif",
        ],
    },

    {
        nombre: "RUTA 02",
        gifs: [
            "r2_acateno.gif",
            "r2_invernadero.gif",
            "r2_tepetitan.gif",
            "r2_amila.gif",
            "r2_brisas.gif",
            "r2_tec.gif",
            "r2_3cruces.gif",
            "r2_tecnica.gif",
            "r2_esfaa.gif",
        ],
    },
];

const formatearNombre = (nombre) => {
    return nombre
        .replace(/\.gif$/i, "")
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
};

function Gifs() {
    const [copiadoIndex, setCopiadoIndex] = useState(null);
    const [sizes, setSizes] = useState({});

    const copiarLink = async (gifUrl, index) => {
        try {
            await navigator.clipboard.writeText(gifUrl);

            setCopiadoIndex(index);

            setTimeout(() => {
                setCopiadoIndex(null);
            }, 1500);
        } catch (error) {
            console.error("Error al copiar:", error);
            alert("No se pudo copiar el enlace 😞");
        }
    };

    const handleImageLoad = (e, key) => {
        const { naturalWidth, naturalHeight } = e.target;

        setSizes((prev) => ({
            ...prev,
            [key]: `${naturalWidth}x${naturalHeight}`,
        }));
    };

    return (
        <div className="galeria-container">

            {categorias.map((categoria, catIndex) => (
                <div key={catIndex} className="categoria">

                    <h2 className="categoria-titulo">
                        {categoria.nombre}
                    </h2>

                    <div className="categoria-scroll">

                        {categoria.gifs.map((gif, index) => {

                            const gifUrl = `${BASE_URL}${gif}`;
                            const key = `${catIndex}-${index}`;

                            return (
                                <div key={key} className="gif-card">

                                    <img
                                        src={gifUrl}
                                        alt={gif}
                                        className="gif-img"
                                        onLoad={(e) => handleImageLoad(e, key)}
                                    />

                                    <p className="gif-nombre">
                                        {formatearNombre(gif)}
                                    </p>

                                    <p className="gif-size">
                                        {sizes[key]}
                                    </p>

                                    <div className="botones">

                                        <a
                                            href={gifUrl}
                                            download
                                            className="btn-descargar"
                                        >
                                            Descargar
                                        </a>

                                        <button
                                            className="btn-copiar"
                                            onClick={() => copiarLink(gifUrl, key)}
                                        >
                                            {copiadoIndex === key
                                                ? "¡Copiado!"
                                                : "Link"}
                                        </button>

                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </div>
            ))}

        </div>
    );
}

export default Gifs;