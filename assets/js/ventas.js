// propiedades en ventas

const propiedades_venta = [
    {
    nombre: 'Departamento Condominio Condes ',
    
    src: 'https://www.inmobiliariacsc.com/wp-content/uploads/2024/03/AP397-Arriendo-apartamento-amoblado-en-el-poblado-6-1.jpg',
    descripcion: 'En el mejor barrio de Santiago con alta plusvalia',
    ubicacion: 'las Condes Chile ',
    habitaciones: 4,
    banos: 3,
    costo: '240.000.000',
    smoke: true,
    pets: true
    },
    {
    nombre: 'Departamento Altavista',
    src: 'https://www.inmobiliariacsc.com/wp-content/uploads/2024/04/419AP-Alquiler-de-lotf-en-Medellin-sector-El-Poblado-barrio-oviedo-AMOBLADO-.-8.jpeg',
    descripcion: 'Ubicado en el barrio alto de la Capital.',
    ubicacion: 'Lo Barnechea',
    habitaciones: 3,
    banos: 2,
    costo: '200.000.000',
    smoke: false,
    pets: true
    },
    {
    nombre: 'Casa en parcela ',
    src: 'https://blog.wasi.co/wp-content/uploads/2019/07/claves-fotografia-inmobiliaria-exterior-casa-software-inmobiliario-wasi.jpg',
    descripcion: 'Ubicado en parcelacion sangre de toro de  Melipilla',
    ubicacion: 'Melipilla',
    habitaciones: 4,
    banos: 3,
    costo: '320.000.000',
    smoke: true,
    pets: false
    }
]

const prop_venta = document.querySelector('#prop_venta');

let htmlVentas = ''

for(let dpto of propiedades_venta) {
    
    let fumar = ''
    let mascotas = ''

    if (dpto.smoke === true) {
        fumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
    } else {
        fumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
    };
    
    if (dpto.pets === true) {
        mascotas = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    } else {
        mascotas = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';
    }

    htmlVentas+= `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${dpto.src}" class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${dpto.nombre}</h5>
                <p class="card-text">${dpto.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${dpto.ubicacion}</p>
                <p>
                <i class="fas fa-bed"></i> ${dpto.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${dpto.banos} Baños </p>
                <p><i class="fas fa-dollar-sign"></i> ${dpto.costo}</p>
                ${fumar}
                ${mascotas}
            </div>
            </div>
        </div>
    `
}

prop_venta.innerHTML = htmlVentas


