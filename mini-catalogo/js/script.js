// Cargar header y footer dinámicamente
fetch('components/header/header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data)
    .catch(err => console.error(err));

fetch('components/footer/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data)
    .catch(err => console.error(err));

// Array de productos
const productos = [
    { nombre: "Producto Increíble 1", precio: 150000, descripcion: "Fantástico producto con características únicas." },
    { nombre: "Gadget Útil 2", precio: 75500, descripcion: "Gadget práctico para simplificar tu vida diaria." },
    { nombre: "Accesorio Moderno 3", precio: 210000, descripcion: "Accesorio de moda que complementa tu estilo." }
];

// Renderizar productos
const catalogo = document.getElementById('catalogo');
productos.forEach(p => {
    const card = document.createElement('product-card');
    card.setAttribute('nombre', p.nombre);
    card.setAttribute('precio', p.precio);
    card.setAttribute('descripcion', p.descripcion);
    catalogo.appendChild(card);
});