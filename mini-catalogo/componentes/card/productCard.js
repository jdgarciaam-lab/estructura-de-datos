class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const nombre = this.getAttribute('nombre') || 'Sin nombre';
        const precio = Number(this.getAttribute('precio')) || 0;
        const descripcion = this.getAttribute('descripcion') || '';

        const formatter = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP'
        });

        const precioFormateado = formatter.format(precio);

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="css/style.css">
            <div class="card">
                <h2>${nombre}</h2>
                <p>${descripcion}</p>
                <p class="precio">${precioFormateado}</p>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);