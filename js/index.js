
function mostrarPropiedadesEnIndex() {

    const alquilerContainer = document.getElementById('propiedades-alquiler');
    const primerasPropiedadesAlquiler = propiedades_alquiler.slice(0, 3);
    primerasPropiedadesAlquiler.forEach(propiedad => {
        alquilerContainer.innerHTML += generarTemplate(propiedad);
    });


    const ventaContainer = document.getElementById('propiedades-venta');
    const primerasPropiedadesVenta = propiedades_venta.slice(0, 3);
    primerasPropiedadesVenta.forEach(propiedad => {
        ventaContainer.innerHTML += generarTemplate(propiedad);
    });
}


function generarTemplate(propiedad) {

    const iconSmoke = propiedad.smoke ? '../img/fumar-si.jpg' : '../img/prohibido-fumar.jpg';
    const messageSmoke = propiedad.smoke ? 'Fumar permitido' : 'Fumar prohibido';

    const iconPets = propiedad.pets ? '../img/mascotas-si.jpg' : '../img/prohibido-mascotas.jpg';
    const messagePets = propiedad.pets ? 'Mascotas permitidas' : 'Mascotas prohibidas';

    let template = `
        <div class="propiedad">
            <img src="${propiedad.src}" alt="${propiedad.nombre}">
            <h3>${propiedad.nombre}</h3>
            <p>${propiedad.descripcion}</p>
            <p><i class="fa-solid fa-location-dot"></i> ${propiedad.ubicacion}</p>
            <p><i class="fa-solid fa-bed"></i> ${propiedad.habitaciones} | <i class="fa-solid fa-bath"></i> ${propiedad.baños}</p>
            <p><i class="fa-solid fa-dollar-sign"></i> ${propiedad.costo}</p>
            <div class="condicionales">
                <img src="${iconSmoke}" alt="${messageSmoke}" title="${messageSmoke}">
                <img src="${iconPets}" alt="${messagePets}" title="${messagePets}">

                 </div>
        </div>
    `;
    return template;
}



function mostrarTodasPropiedades() {

    if (document.getElementById('propiedades-alquiler')) {
        const alquilerContainer = document.getElementById('propiedades-alquiler');
        propiedades_alquiler.forEach(propiedad => {
            alquilerContainer.innerHTML += generarTemplate(propiedad);
        });
    }


    if (document.getElementById('propiedades-venta')) {
        const ventaContainer = document.getElementById('propiedades-venta');
        propiedades_venta.forEach(propiedad => {
            ventaContainer.innerHTML += generarTemplate(propiedad);
        });
    }
}

if (document.title.includes('Inicio')) {
    mostrarPropiedadesEnIndex();
} else {
    mostrarTodasPropiedades();
}