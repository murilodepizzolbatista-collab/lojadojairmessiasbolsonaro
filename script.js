const products = [
	{ id: 1, name: 'Charizard — Base Set', category: 'cartas', type: 'Holográfica • Base Set #4', price: 289.9, image: 'https://images.pokemontcg.io/base1/4.png', art: 'yellow', tag: 'DESTAQUE' },
	{ id: 2, name: 'Blastoise — Base Set', category: 'cartas', type: 'Holográfica • Base Set #2', price: 219.9, image: 'https://images.pokemontcg.io/base1/2.png', art: 'blue', tag: 'CLÁSSICA' },
	{ id: 3, name: 'Venusaur — Base Set', category: 'cartas', type: 'Holográfica • Base Set #15', price: 199.9, image: 'https://images.pokemontcg.io/base1/15.png', art: 'green', tag: 'RARIDADE' },
	{ id: 4, name: 'Pikachu — Base Set', category: 'cartas', type: 'Comum • Base Set #58', price: 39.9, image: 'https://images.pokemontcg.io/base1/58.png', art: 'yellow', tag: '' },
	{ id: 5, name: 'Mewtwo — Base Set', category: 'cartas', type: 'Raro • Base Set #10', price: 109.9, image: 'https://images.pokemontcg.io/base1/10.png', art: 'lilac', tag: 'ÚLTIMAS' },
	{ id: 6, name: 'Alakazam — Base Set', category: 'cartas', type: 'Holográfica • Base Set #1', price: 179.9, image: 'https://images.pokemontcg.io/base1/1.png', art: 'lilac', tag: '' },
	{ id: 7, name: 'Charizard ex — 151', category: 'cartas', type: 'Ultra rara • 151 #199', price: 399.9, image: 'https://images.pokemontcg.io/sv3pt5/199.png', art: 'pink', tag: 'RECENTE' },
	{ id: 8, name: 'Blastoise ex — 151', category: 'cartas', type: 'Ultra rara • 151 #200', price: 249.9, image: 'https://images.pokemontcg.io/sv3pt5/200.png', art: 'blue', tag: 'RECENTE' },
	{ id: 9, name: 'Mew ex — 151', category: 'cartas', type: 'Ilustração especial • 151 #205', price: 279.9, image: 'https://images.pokemontcg.io/sv3pt5/205.png', art: 'lilac', tag: 'RECENTE' },
	{ id: 10, name: 'Aegislash V — Full Art', category: 'cartas', type: 'Ultra rara • Vivid Voltage #177', price: 159.9, image: 'https://images.pokemontcg.io/swsh4/177.png', art: 'dark', tag: 'FULL ART' },
	{ id: 11, name: 'Shuckle — Lost Thunder', category: 'cartas', type: 'Raro • Lost Thunder #16', price: 49.9, image: 'https://images.pokemontcg.io/sm8/16.png', art: 'green', tag: 'COLEÇÃO' },
	{ id: 12, name: 'Gardevoir ex — Scarlet & Violet', category: 'cartas', type: 'Ilustração especial • Base #245', price: 189.9, image: 'https://images.pokemontcg.io/sv1/245.png', art: 'lilac', tag: 'RECENTE' },
	{ id: 13, name: 'Aegislash ex — Paradox Rift', category: 'cartas', type: 'Ultra rara • Paradox Rift #230', price: 119.9, image: 'https://images.pokemontcg.io/sv4/230.png', art: 'blue', tag: 'RECENTE' },
	{ id: 14, name: 'Aegislash — Paradox Rift', category: 'cartas', type: 'Ilustração rara • Paradox Rift #210', price: 79.9, image: 'https://images.pokemontcg.io/sv4/210.png', art: 'yellow', tag: 'ILUSTRAÇÃO' },
	{ id: 15, name: 'Pikachu V — Vivid Voltage', category: 'cartas', type: 'Full Art • Vivid Voltage #170', price: 169.9, image: 'https://images.pokemontcg.io/swsh4/170.png', art: 'yellow', tag: 'FULL ART' },
	{ id: 16, name: 'Pikachu VMAX — Vivid Voltage', category: 'cartas', type: 'Ultra rara • Vivid Voltage #188', price: 229.9, image: 'https://images.pokemontcg.io/swsh4/188.png', art: 'yellow', tag: 'VMAX' },
	{ id: 17, name: 'Umbreon VMAX — Evolving Skies', category: 'cartas', type: 'Alternate Art • Evolving Skies #215', price: 649.9, image: 'https://images.pokemontcg.io/swsh7/215.png', art: 'dark', tag: 'VMAX' },
	{ id: 18, name: 'Rayquaza VMAX — Evolving Skies', category: 'cartas', type: 'Alternate Art • Evolving Skies #218', price: 589.9, image: 'https://images.pokemontcg.io/swsh7/218.png', art: 'green', tag: 'VMAX' },
	{ id: 19, name: 'Mew VMAX — Fusion Strike', category: 'cartas', type: 'Ultra rara • Fusion Strike #268', price: 249.9, image: 'https://images.pokemontcg.io/swsh8/268.png', art: 'pink', tag: 'VMAX' },
	{ id: 20, name: 'Gengar VMAX — Fusion Strike', category: 'cartas', type: 'Alternate Art • Fusion Strike #271', price: 529.9, image: 'https://images.pokemontcg.io/swsh8/271.png', art: 'dark', tag: 'VMAX' },
	{ id: 21, name: 'Lugia V — Silver Tempest', category: 'cartas', type: 'Alternate Art • Silver Tempest #186', price: 479.9, image: 'https://images.pokemontcg.io/swsh12/186.png', art: 'blue', tag: 'FULL ART' },
	{ id: 22, name: 'Miraidon ex — Scarlet & Violet', category: 'cartas', type: 'Ultra rara • Base #227', price: 139.9, image: 'https://images.pokemontcg.io/sv1/227.png', art: 'yellow', tag: 'EX' },
	{ id: 23, name: 'Iron Valiant ex — Paradox Rift', category: 'cartas', type: 'Ultra rara • Paradox Rift #249', price: 149.9, image: 'https://images.pokemontcg.io/sv4/249.png', art: 'blue', tag: 'EX' },
	{ id: 24, name: 'Roaring Moon ex — Paradox Rift', category: 'cartas', type: 'Ultra rara • Paradox Rift #251', price: 179.9, image: 'https://images.pokemontcg.io/sv4/251.png', art: 'pink', tag: 'EX' }
];

const state = { filter: 'todos', query: '', cart: JSON.parse(localStorage.getItem('nexo-cart') || '[]').filter((item) => item.category === 'cartas'), user: JSON.parse(localStorage.getItem('nexo-user') || 'null') };
const $ = (selector) => document.querySelector(selector);
const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function renderProducts() {
	const grid = $('#productGrid');
	const visible = products.filter((product) => (state.filter === 'todos' || product.category === state.filter) && `${product.name} ${product.type}`.toLowerCase().includes(state.query.toLowerCase()));
	$('#productTotal').textContent = `${visible.length} ${visible.length === 1 ? 'item' : 'itens'}`;
	$('#emptyState').hidden = visible.length > 0;
	grid.innerHTML = visible.map((product) => `<article class="product-card" data-product="${product.id}" tabindex="0"><div class="product-art ${product.art}">${product.image ? `<img class="product-image" src="${product.image}" alt="${product.category === 'cartas' ? 'Carta Pokémon' : 'Produto Pokémon'} ${product.name}" loading="lazy">` : `<span class="product-symbol">${product.symbol}</span>`}${product.tag ? `<span class="tag">${product.tag}</span>` : ''}<button class="heart" type="button" aria-label="Favoritar ${product.name}">♡</button></div><div class="product-info"><div><h3>${product.name}</h3><p>${product.type}</p></div><strong class="product-price">${money(product.price)}</strong></div><button class="add-button" data-add="${product.id}" type="button">Adicionar ao carrinho <span>+</span></button></article>`).join('');
}

function renderCart() {
	const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
	const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	$('#cartCount').textContent = count;
	$('#drawerCount').textContent = `(${count})`;
	$('#cartTotal').textContent = money(total);
	$('#cartItems').innerHTML = state.cart.length ? state.cart.map((item) => `<div class="cart-item"><div class="mini-art ${item.art}">${item.image ? `<img src="${item.image}" alt="${item.name}" loading="lazy">` : `<span>${item.symbol}</span>`}</div><div><h4>${item.name}</h4><p>${money(item.price)}</p><div class="qty-control"><button type="button" data-qty="${item.id}" data-change="-1">−</button><span>${item.quantity}</span><button type="button" data-qty="${item.id}" data-change="1">+</button></div><button class="remove-item" type="button" data-remove="${item.id}">Remover</button></div><strong>${money(item.price * item.quantity)}</strong></div>`).join('') : '<div class="cart-empty"><span>✦</span><p>Seu carrinho está vazio.</p><small>As melhores cartas ainda estão esperando.</small></div>';
	localStorage.setItem('nexo-cart', JSON.stringify(state.cart));
}

function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2500); }
function openCart() { $('#cartDrawer').classList.add('open'); $('#cartDrawer').setAttribute('aria-hidden', 'false'); $('#overlay').hidden = false; }
function closeCart() { $('#cartDrawer').classList.remove('open'); $('#cartDrawer').setAttribute('aria-hidden', 'true'); if ($('#accountModal').hidden) $('#overlay').hidden = true; }
function openAccount() { $('#accountModal').hidden = false; $('#overlay').hidden = false; $('#emailInput').focus(); }
function closeAccount() { $('#accountModal').hidden = true; if (!$('#cartDrawer').classList.contains('open')) $('#overlay').hidden = true; }
function openProduct(product) {
	$('#detailTitle').textContent = product.name;
	$('#detailType').textContent = product.type;
	$('#detailPrice').textContent = money(product.price);
	$('#detailDescription').textContent = 'Carta original para sua coleção, com imagem em alta resolução e acabamento clássico de colecionador.';
	$('#detailVisual').className = `detail-visual ${product.art}`;
	$('#detailVisual').innerHTML = product.image ? `<img src="${product.image}" alt="Carta Pokémon ${product.name}">` : `<span>${product.symbol}</span>`;
	$('#detailAdd').dataset.detailAdd = product.id;
	$('#productModal').hidden = false;
	$('#overlay').hidden = false;
}
function closeProduct() { $('#productModal').hidden = true; if ($('#accountModal').hidden && !$('#cartDrawer').classList.contains('open')) $('#overlay').hidden = true; }

document.addEventListener('click', (event) => {
	const productCard = event.target.closest('[data-product]');
	if (productCard && !event.target.closest('button')) { const product = products.find((item) => item.id === Number(productCard.dataset.product)); openProduct(product); }
	const addButton = event.target.closest('[data-add]');
	if (addButton) { const product = products.find((item) => item.id === Number(addButton.dataset.add)); const existing = state.cart.find((item) => item.id === product.id); existing ? existing.quantity++ : state.cart.push({ ...product, quantity: 1 }); renderCart(); showToast(`${product.name} foi adicionado ao carrinho.`); }
	const qtyButton = event.target.closest('[data-qty]');
	if (qtyButton) { const item = state.cart.find((product) => product.id === Number(qtyButton.dataset.qty)); item.quantity += Number(qtyButton.dataset.change); if (item.quantity <= 0) state.cart = state.cart.filter((product) => product.id !== item.id); renderCart(); }
	const removeButton = event.target.closest('[data-remove]');
	if (removeButton) { state.cart = state.cart.filter((product) => product.id !== Number(removeButton.dataset.remove)); renderCart(); }
	const heart = event.target.closest('.heart');
	if (heart) { heart.classList.toggle('saved'); heart.textContent = heart.classList.contains('saved') ? '♥' : '♡'; showToast(heart.classList.contains('saved') ? 'Carta salva nos favoritos.' : 'Carta removida dos favoritos.'); }
});

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); state.filter = button.dataset.filter; renderProducts(); }));
$('#searchInput').addEventListener('input', (event) => { state.query = event.target.value; renderProducts(); });
$('#cartButton').addEventListener('click', openCart); $('#closeCart').addEventListener('click', closeCart); $('#overlay').addEventListener('click', () => { closeCart(); closeAccount(); closeProduct(); });
	$('#closeProduct').addEventListener('click', closeProduct);
$('#accountButton').addEventListener('click', () => state.user ? (localStorage.removeItem('nexo-user'), state.user = null, $('#accountLabel').textContent = 'Entrar', showToast('Você saiu da sua conta.')) : openAccount());
$('#closeAccount').addEventListener('click', closeAccount);
$('#loginForm').addEventListener('submit', (event) => { event.preventDefault(); state.user = { email: $('#emailInput').value }; localStorage.setItem('nexo-user', JSON.stringify(state.user)); $('#accountLabel').textContent = 'Sair'; closeAccount(); showToast('Login realizado. Boas compras!'); });
$('#createAccount').addEventListener('click', () => { $('#modalEyebrow').textContent = 'COMECE SUA COLEÇÃO'; $('#loginTitle').textContent = 'Crie sua conta'; $('#createAccount').textContent = 'Já tenho uma conta'; $('#accountStatus').textContent = 'Use qualquer e-mail e uma senha fictícia para experimentar.'; });
$('#checkoutButton').addEventListener('click', () => state.cart.length ? (closeCart(), openAccount(), showToast('Entre para continuar sua compra.')) : showToast('Adicione uma carta ao carrinho primeiro.'));
	$('#detailAdd').addEventListener('click', (event) => { const product = products.find((item) => item.id === Number(event.currentTarget.dataset.detailAdd)); const existing = state.cart.find((item) => item.id === product.id); existing ? existing.quantity++ : state.cart.push({ ...product, quantity: 1 }); renderCart(); closeProduct(); showToast(`${product.name} foi adicionado ao carrinho.`); });
$('#clubButton').addEventListener('click', () => showToast('Clube Nexo: cadastro aberto em breve.'));
if (state.user) $('#accountLabel').textContent = 'Sair';
renderProducts(); renderCart();

const savedTheme = localStorage.getItem('nexo-theme') || 'light';
const applyTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
	$('#themeIcon').textContent = theme === 'dark' ? '☀' : '☾';
	$('#themeButton').setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
	localStorage.setItem('nexo-theme', theme);
};
applyTheme(savedTheme);
$('#themeButton').addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
$('#headerSearch').addEventListener('input', (event) => {
	state.query = event.target.value;
	$('#searchInput').value = state.query;
	renderProducts();
});
$('#searchInput').addEventListener('input', (event) => {
	state.query = event.target.value;
	$('#headerSearch').value = state.query;
	renderProducts();
});
