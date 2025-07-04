document.addEventListener('DOMContentLoaded', () => {

    if (!document.getElementById('product-cards-container')) {
        return;
    }

    const allProducts = [
        { id: 1, category: 'software', title: 'LANDING PAGE CAFETERÍA', author: 'Regina Perez', price: 220, popularity: 5, image: './img/works/landing-cafe.jpg' },
        { id: 2, category: 'software', title: 'APP MÓVIL PARA TIENDA', author: 'Lucia Ramos', price: 480, popularity: 4, image: './img/works/app-tienda.jpg' },
        { id: 3, category: 'software', title: 'PORTAL WEB PARA COLEGIO', author: 'José Ramirez', price: 520, popularity: 5, image: './img/works/web-colegio.jpg' },
        { id: 4, category: 'software', title: 'UI PARA APP DE DELIVERY', author: 'Javier Peña', price: 400, popularity: 4, image: './img/works/app-delivery.jpg' },
        { id: 5, category: 'software', title: 'SITIO WEB PARA CONSULTORA DE TI', author: 'Hugo Medina', price: 590, popularity: 5, image: './img/works/web-consultoria.jpg' },
        { id: 6, category: 'software', title: 'PORTAL WEB PARA SERVICIOS LEGALES', author: 'César Acuña', price: 480, popularity: 4, image: './img/works/web-legal.jpg' },
        { id: 7, category: 'software', title: 'APP WEB SEGUIMIENTO DE PROYECTOS', author: 'José Ramirez', price: 580, popularity: 5, image: './img/works/app-seguimiento.jpg' },
        { id: 8, category: 'software', title: 'DISEÑO APP RECETAS SALUDABLES', author: 'Javier Peña', price: 400, popularity: 4, image: './img/works/app-recetas.jpg' },
        { id: 9, category: 'cursos', title: 'DISEÑO UX PARA PRINCIPIANTES', author: 'Elena Rivas', price: 150, popularity: 5, image: './img/works/diseño-principiantes.jpg' },
        { id: 10, category: 'musica', title: 'COMPOSICIÓN INSTRUMENTAL JAZZ', author: 'Regina Perez', price: 75, popularity: 4, image: './img/works/jazz.jpg' },
        { id: 11, category: 'cursos', title: 'INTRODUCCIÓN ANIMACIÓN 2D', author: 'Lucía Ramos ', price: 280, popularity: 5, image: './img/works/animacion-2d.jpg' },
        { id: 12, category: 'ilustraciones', title: 'RETRARO DIGITAL INFANTIL', author: 'Regina Perez', price: 60, popularity: 3, image: './img/works/retrato-infantil.jpg' },
        { id: 13, category: 'musica', 'title': 'EFECTO DE SONIDO VIDEOJUEGO', 'author': 'Lucía Ramos ', 'price': 300, 'popularity': 5, 'image': './img/works/juego.jpg' },
        { id: 14, category: 'musica', title: 'MÚSICA AMBIENTAL PARA CAFETERÍA', author: 'Enrique Peñanieto', price: 120, popularity: 4, image: './img/works/musica-cafe.jpg' },
        { id: 15, category: 'musica', title: 'CANCIÓN PARA REGALAR', author: 'Javier Peña', price: 350, popularity: 5, image: './img/works/music-regalo.jpg' },
        { id: 16, category: 'ilustraciones', title: 'ILUSTRACIÓN PORTADA ESTILO YAKUZA', author: 'Lucía Ramos ', price: 170, popularity: 4, image: './img/works/ilustracion-portada.jpg' },
        { id: 17, category: 'ilustraciones', title: 'LOGO FRUTAL', author: 'Enrique Peñanieto', price: 180, popularity: 4, image: './img/works/logo-frutal.jpg' },
        { id: 18, category: 'cursos', title: 'MARKETING DIGITAL DESDE CERO', author: 'Enrique Peñanieto', price: 250, popularity: 5, image: './img/works/mrkt-digital.jpg' },
        { id: 19, category: 'cursos', title: 'INTRODUCCIÓN A PHOTOSHOP', author: 'Javier Peña', price: 80, popularity: 3, image: './img/works/introduccion-photo.jpg' },
        { id: 20, category: 'ilustraciones', title: 'MUNDO ANIMAL', author: 'José Ramirez', price: 110, popularity: 4, image: './img/works/mundo-animal.jpg' },
    ];
    const categoryInfo = {
        'todos': { title: 'Todos los Productos', description: 'Explora todas nuestras soluciones digitales disponibles.', bannerImage: './img/works/banner-todos.jpg' },
        'cursos': { title: 'Cursos', description: 'Aprende y domina nuevas habilidades con nuestros cursos especializados.', bannerImage: './img/works/banner-cursos.jpg' },
        'ilustraciones': { title: 'Ilustraciones Digitales', description: 'Descubre arte digital único y personalizable para tus proyectos.', bannerImage: './img/works/banner-ilustraciones.jpg' },
        'musica': { title: 'Música y Audio', description: 'Encuentra pistas, efectos y recursos de audio para tus creaciones.', bannerImage: './img/works/banner-music.jpg' },
        'software': { title: 'Software', description: 'Soluciones digitales que transforman tu mundo, hechas a tu medida.', bannerImage: './img/works/banner-software.jpg' },
    };

    localStorage.setItem('allProductsData', JSON.stringify(allProducts));

    let currentFilters = { category: 'todos', price: 'all', popularity: 'all' };
    let currentPage = 1;
    const itemsPerPage = 8;

    const productCardsContainer = document.getElementById('product-cards-container');
    const paginationContainer = document.getElementById('pagination-container');
    const categoryFilters = document.getElementById('category-filters');
    const priceFilters = document.getElementById('price-filters');
    const popularityFilters = document.getElementById('popularity-filters');
    const applyFiltersButton = document.getElementById('apply-filters');
    const clearFiltersButton = document.getElementById('clear-filters');
    const dynamicBanner = document.getElementById('dynamic-banner');
    const bannerTitle = document.getElementById('banner-title');
    const bannerDescription = document.getElementById('banner-description');


    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];


    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartFooter = document.getElementById('cart-footer');
    const cartTotalElement = document.getElementById('cart-total');
    const cartIconBadge = document.getElementById('cart-icon-badge');

    function saveCartToLocalStorage() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    function addToCart(productId) {
        if (cart.some(item => item.id == productId)) {
            alert("Este producto ya se encuentra en el carrito.");
            return;
        }
        const product = allProducts.find(p => p.id == productId);
        if (product) {
            cart.push(product);
            saveCartToLocalStorage();
            renderCart();
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id != productId);
        saveCartToLocalStorage();
        renderCart();
    }

    function renderCart() {
        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<div class="text-center py-10 text-gray-500">Tu carrito está vacío.</div>`;
            cartFooter.classList.add('hidden');
        } else {
            cart.forEach(product => {
                cartItemsContainer.innerHTML += `
                    <div class="flex justify-between items-center p-2">
                        <div>
                            <p class="font-medium text-sm">${product.title}</p>
                            <p class="text-gray-500 text-sm">S/ ${product.price.toFixed(2)}</p>
                        </div>
                        <button class="remove-from-cart-btn text-sm text-[#F24968] hover:underline" data-id="${product.id}">Eliminar</button>
                    </div>`;
            });
            cartFooter.classList.remove('hidden');
        }

        const total = cart.reduce((sum, product) => sum + product.price, 0);
        cartTotalElement.textContent = `S/ ${total.toFixed(2)}`;

        if (cartIconBadge) {
            if (cart.length > 0) {
                cartIconBadge.textContent = cart.length;
                cartIconBadge.classList.remove('hidden');
            } else {
                cartIconBadge.classList.add('hidden');
            }
        }
    }


    productCardsContainer.addEventListener('click', function(event) {
        const button = event.target.closest('.add-to-cart-btn');
        if (button) {
            const productId = button.dataset.id;
            addToCart(productId);
        }
    });

    cartItemsContainer.addEventListener('click', function(event) {
        const button = event.target.closest('.remove-from-cart-btn');
        if (button) {
            const productId = button.dataset.id;
            removeFromCart(productId);
        }
    });



    function createProductCard(product) {
        const starsHtml = Array(5).fill().map((_, i) =>
            `<i class="fas fa-star ${i < product.popularity ? 'text-gray-900' : 'text-gray-300'}"></i>`
        ).join('');

        const detailUrl = `./work-details.html?id=${product.id}`;

        return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <a href="${detailUrl}">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover">
                </a>
                <div class="p-4">
                    <p class="text-sm text-gray-500 mb-2">${product.author}</p>
                    <a href="${detailUrl}" class="text-lg font-semibold text-gray-800 mb-1 hover:text-[#00205b]">${product.title}</a>
                    <div class="flex items-center mb-3">${starsHtml}</div>
                    <div class="flex justify-between items-center mt-4">
                        <span class="text-xl font-bold text-gray-900">S/${product.price.toFixed(2)}</span>
                        <button class="add-to-cart-btn bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 text-sm" data-id="${product.id}">Agregar</button>
                    </div>
                </div>
            </div>
        `;
    }


    function applyFilters(products, filters) {
        return products.filter(product => {
            if (filters.category !== 'todos' && product.category !== filters.category) return false;
            if (filters.price !== 'all') {
                const [minStr, maxStr] = filters.price.split('-');
                const min = parseInt(minStr);
                const max = maxStr === 'plus' ? Infinity : parseInt(maxStr);
                if (product.price < min || product.price > max) return false;
            }
            if (filters.popularity !== 'all') {
                const minPopularity = parseInt(filters.popularity);
                if (isNaN(minPopularity) || product.popularity < minPopularity) return false;
            }
            return true;
        });
    }

    function renderProductCards(productsToDisplay) {
        productCardsContainer.innerHTML = productsToDisplay.length === 0
            ? '<p class="text-center text-gray-600 col-span-full">No se encontraron productos con los filtros seleccionados.</p>'
            : productsToDisplay.map(createProductCard).join('');
    }

    function renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        paginationContainer.innerHTML = '';
        if (totalPages <= 1 && totalItems <= itemsPerPage) return;
        const prevButton = document.createElement('button');
        prevButton.innerHTML = `<i class="fas fa-chevron-left"></i>`;
        prevButton.className = `px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-blue-600 hover:bg-gray-200 border'}`;
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => { if (currentPage > 1) { currentPage--; updateDisplay(); } });
        paginationContainer.appendChild(prevButton);
        const maxPagesToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        if (endPage - startPage + 1 < maxPagesToShow && totalPages >= maxPagesToShow) {
            startPage = Math.max(1, totalPages - maxPagesToShow + 1);
            endPage = totalPages;
        }
        if (startPage > 1) {
            const firstPageButton = document.createElement('button');
            firstPageButton.textContent = '1';
            firstPageButton.className = `px-3 py-1 rounded-md bg-white text-blue-600 hover:bg-gray-200 border`;
            firstPageButton.addEventListener('click', () => { currentPage = 1; updateDisplay(); });
            paginationContainer.appendChild(firstPageButton);
            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                ellipsis.className = 'px-3 py-1 text-gray-500';
                paginationContainer.appendChild(ellipsis);
            }
        }
        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = `px-3 py-1 rounded-md ${i === currentPage ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-gray-200 border'}`;
            pageButton.addEventListener('click', () => { currentPage = i; updateDisplay(); });
            paginationContainer.appendChild(pageButton);
        }
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                ellipsis.className = 'px-3 py-1 text-gray-500';
                paginationContainer.appendChild(ellipsis);
            }
            const lastPageButton = document.createElement('button');
            lastPageButton.textContent = totalPages;
            lastPageButton.className = `px-3 py-1 rounded-md bg-white text-blue-600 hover:bg-gray-200 border`;
            lastPageButton.addEventListener('click', () => { currentPage = totalPages; updateDisplay(); });
            paginationContainer.appendChild(lastPageButton);
        }
        const nextButton = document.createElement('button');
        nextButton.innerHTML = `<i class="fas fa-chevron-right"></i>`;
        nextButton.className = `px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-blue-600 hover:bg-gray-200 border'}`;
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => { if (currentPage < totalPages) { currentPage++; updateDisplay(); } });
        paginationContainer.appendChild(nextButton);
    }

    function updateBanner(category) {
        const info = categoryInfo[category];
        if (info) {
            bannerTitle.textContent = info.title;
            bannerDescription.textContent = info.description;
            dynamicBanner.style.backgroundImage = `url(${info.bannerImage})`;
        }
    }

    function getSelectedFilters() {
        return {
            category: document.querySelector('input[name="category"]:checked')?.value || 'todos',
            price: document.querySelector('input[name="price"]:checked')?.value || 'all',
            popularity: document.querySelector('input[name="popularity"]:checked')?.value || 'all',
        };
    }

    function updateDisplay() {
        const filteredProducts = applyFilters(allProducts, currentFilters);
        const maxPossiblePage = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
        if (currentPage > maxPossiblePage) { currentPage = maxPossiblePage > 0 ? maxPossiblePage : 1; }
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
        renderProductCards(productsToDisplay);
        renderPagination(filteredProducts.length);
        updateBanner(currentFilters.category);
    }

    // Tus event listeners originales...
    categoryFilters.addEventListener('change', (event) => {
        if (event.target.name === 'category') {
            currentFilters.category = event.target.value;
            currentPage = 1;
            updateDisplay();
        }
    });
    priceFilters.addEventListener('change', (event) => {
        if (event.target.name === 'price') {
            currentFilters.price = event.target.value;
            currentPage = 1;
            updateDisplay();
        }
    });
    popularityFilters.addEventListener('change', (event) => {
        if (event.target.name === 'popularity') {
            currentFilters.popularity = event.target.value;
            currentPage = 1;
            updateDisplay();
        }
    });
    applyFiltersButton.addEventListener('click', () => {
        currentFilters = getSelectedFilters();
        currentPage = 1;
        updateDisplay();
    });
    clearFiltersButton.addEventListener('click', () => {
        document.querySelector('input[name="category"][value="todos"]').checked = true;
        document.querySelector('input[name="price"][value="all"]').checked = true;
        document.querySelector('input[name="popularity"][value="all"]').checked = true;
        currentFilters = { category: 'todos', price: 'all', popularity: 'all' };
        currentPage = 1;
        updateDisplay();
    });


    renderCart();
    updateDisplay();
});
