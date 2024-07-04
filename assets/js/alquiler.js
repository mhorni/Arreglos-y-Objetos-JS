// Proeidades Alquiler


const propiedades_alquiler = [
    {
    nombre: 'Departamento Lago Ranco ',
    
    src: 'https://blog.wasi.co/wp-content/uploads/2019/07/claves-fotografia-inmobiliaria-destacar-software-inmobiliario-wasi.jpg',
    descripcion: 'En el mejor barrio de Santiago con alta plusvalia',
    ubicacion: 'Las Condes',
    habitaciones: 4,
    banos: 3,
    costo: '190.000.000',
    smoke: true,
    pets: false
    },
    {
    nombre: 'Departamento Bariloche',
    src: 'https://img-c.udemycdn.com/course/480x270/4303325_8604.jpg',
    descripcion: 'Ubicado en bariloche .',
    ubicacion: 'Argentina',
    habitaciones: 4,
    banos: 2,
    costo: '230.000.000',
    smoke: false,
    pets: false
    },
    {
    nombre: 'Casa San Martin de los Andes ',
    src: 'https://img.etimg.com/thumb/msid-107023656,width-650,height-488,imgsize-43988,resizemode-75/real-estate.jpg',
    descripcion: 'Ubicado en san Martin de los Andes',
    ubicacion: 'Argentina',
    habitaciones: 6,
    banos: 3,
    costo: '280.000.000',
    smoke: true,
    pets: true
    }
]

const prop_alquiler = document.querySelector('#prop_alquiler');

let htmlalquiler = ''

for(let dpto of propiedades_alquiler) {
    
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

    htmlalquiler+= `
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

prop_alquiler.innerHTML = htmlalquiler



