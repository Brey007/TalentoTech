const productos = [
    { 
        imagen: "Imagenes/Cafe1.jpeg", 
        descripcion: "Café Expreso - Intenso y aromático.",
        enlace: "detalles/expreso.html" 
    },
    { 
        imagen: "Imagenes/Prensa fransesa.jpg", 
        descripcion: "Prensa Francesa - Cuerpo y sabor completo.",
        enlace: "detalles/prensa-francesa.html" 
    },
    { 
        imagen: "Imagenes/V60.png.webp", 
        descripcion: "V60 - Café filtrado con aroma delicado.",
        enlace: "detalles/v60.html" 
    },
    { 
        imagen: "Imagenes/Moca italia .png", 
        descripcion: "Moka Italiana - Sabor fuerte y concentrado.",
        enlace: "detalles/moka-italiana.html" 
    },
    { 
        imagen: "Imagenes/Cafe reunidos.png", 
        descripcion: "Café en reunión - Perfecto para compartir.",
        enlace: "detalles/reunion.html" 
    }        
];

const contenedor = document.getElementById("catalogo");

productos.forEach(producto => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("item");

    const link = document.createElement("a");
    link.href = producto.enlace;

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.descripcion;

    link.appendChild(img);

    const desc = document.createElement("div");
    desc.classList.add("descripcion");
    desc.textContent = producto.descripcion;

    tarjeta.appendChild(link);
    tarjeta.appendChild(desc);
    contenedor.appendChild(tarjeta);
});