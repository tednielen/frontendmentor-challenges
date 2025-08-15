
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Failed to fetch product data');
        const products = await response.json();
        console.log('Fetched products:', products);
        renderProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});



const productList = document.getElementById('product-list');
const cartTextNumber = document.getElementById("cart-text-number");


// ==== PRODUCT CARD ====
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productName = product.name;

    card.innerHTML = `
          <img src="${product.image?.desktop || ''}" alt="${product.name}" class="product-image" >
          <span class="product-category">${product.category}</span>
          <h4 class="product-name">${product.name}</h4>
          <p class="product-price">$${product.price.toFixed(2)}</p>
     `;

    return card;
}

function renderProducts(products) {
    if (!productList) return console.error('No #product-list element found.');
    products.forEach(product => productList.appendChild(createProductCard(product)));
}

