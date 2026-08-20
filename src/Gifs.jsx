import { useState } from "react";
import "./Gifs.css";

const BASE_URL = "https://ingeabraham23.github.io/gifs/gifs/";

const categorias = [

    {
        nombre: "URBANOS ROJOS",
        gifs: [
            "ur_centro.gif",

        ],
    },

    {
        nombre: "RUTA 03",
        gifs: [
            "r3_tenex_mex.gif",
            "r3_tezo_mex.gif",


        ],
    },

    {
        nombre: "RUTA 01",
        gifs: [


            "r1_ixticpan_mexico.gif",
        ],
    },
    {
        nombre: "FESTIVIDADES",
        gifs: [
            "f_feria_chico.gif",
            "f_feria_g_corto.gif",
            "f_feria_prueba.gif",
            "f_feria_7s.gif",
            "f_caballitos_8s.gif",
            "f_viva_mexico.gif",
            "f_vivamex_full.gif",
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
            "ch_takechi.gif",

        ],
    },

    {
        nombre: "CALCOMANIAS",
        gifs: [
            "calc_todas.gif",
        ],
    },

    {
        nombre: "ICONOS Y LOGOS",
        gifs: [
            "ico_imss.gif",
        ],
    },

    {
        nombre: "VARIOS",
        gifs: [
            "otro_paleta.gif",
        ],
    },

    {
        nombre: "URBANOS VERDES",
        gifs: [

            "uv_tezongo_mex.gif",
        ],
    },

    {
        nombre: "RUTA 02",
        gifs: [
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