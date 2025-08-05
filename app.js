// == Datos de productos con stock, imágenes múltiples y características ==
const productos = [
  {
    id: 1,
    nombre: "Silla Moderna",
    categoria: "Sillas",
    precio: 45000,
    stock: 5,
    imagen: "https://via.placeholder.com/300",
    imagenes: [
      "https://via.placeholder.com/300?text=Silla+1",
      "https://via.placeholder.com/300?text=Silla+2"
    ],
    caracteristicas: ["Estructura metálica", "Diseño ergonómico", "Color gris"]
  },
  {
    id: 2,
    nombre: "Mesa Minimalista",
    categoria: "Mesas",
    precio: 60000,
    stock: 3,
    imagen: "https://via.placeholder.com/300",
    imagenes: [
      "https://via.placeholder.com/300?text=Mesa+1",
      "https://via.placeholder.com/300?text=Mesa+2"
    ],
    caracteristicas: ["Madera de pino", "120x60 cm", "Acabado mate"]
  }
];

// == Variables ==
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let imagenActual = 0;
let imagenesProducto = [];

// == Renderizar productos ==
function renderProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  const search = document.getElementById("search").value.toLowerCase();
  const categoria = document.getElementById("filter-category").value;
  const precioFiltro = document.getElementById("filter-price").value;

  const filtrados = productos.filter(p =>
    (!search || p.nombre.toLowerCase().includes(search)) &&
    (!categoria || p.categoria === categoria) &&
    (!precioFiltro || (precioFiltro === "low" ? p.precio < 50000 : p.precio >= 50000))
  );

  if (filtrados.length === 0) {
    contenedor.innerHTML = '<p class="text-center col-span-full text-gray-500">No se encontraron productos.</p>';
    return;
  }

  filtrados.forEach(p => {
    const card = document.createElement("div");
    card.className = "group flex flex-col items-center text-center gap-1 p-2 transition-transform duration-200 hover:scale-105";

    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-48 object-contain mb-2 cursor-pointer" onclick="abrirModalDetalle(${p.id})" />
      <h3 class="text-sm font-normal text-gray-800 cursor-pointer" onclick="abrirModalDetalle(${p.id})">${p.nombre}</h3>
      <p class="text-base font-semibold text-black">$${p.precio.toLocaleString()}</p>
      <button onclick="agregarAlCarrito(${p.id})" class="text-xs text-white bg-black px-3 py-1 rounded hover:bg-gray-700 transition" ${p.stock === 0 ? 'disabled class="opacity-50 cursor-not-allowed"' : ''}>Agregar al carrito</button>
    `;

    contenedor.appendChild(card);
  });
}

// == Modal Detalle de Producto ==
function abrirModalDetalle(id) {
  const producto = productos.find(p => p.id === id);
  imagenesProducto = producto.imagenes || [producto.imagen];
  imagenActual = 0;

  document.getElementById("slider-imagen").src = imagenesProducto[imagenActual];
  document.getElementById("detalle-nombre").textContent = producto.nombre;
  document.getElementById("detalle-precio").textContent = `$${producto.precio.toLocaleString()}`;
  document.getElementById("detalle-descripcion").textContent = "Este es un producto de excelente calidad.";

  const lista = document.getElementById("detalle-caracteristicas");
  lista.innerHTML = "";
  (producto.caracteristicas || []).forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });

  document.getElementById("detalle-boton").onclick = () => {
    agregarAlCarrito(id);
    cerrarModalDetalle();
  };

  document.getElementById("modal-detalle").classList.remove("hidden");
}

function cerrarModalDetalle() {
  document.getElementById("modal-detalle").classList.add("hidden");
}

function cambiarImagen(dir) {
  if (!imagenesProducto.length) return;
  imagenActual = (imagenActual + dir + imagenesProducto.length) % imagenesProducto.length;
  document.getElementById("slider-imagen").src = imagenesProducto[imagenActual];
}

// == Carrito ==
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  const existente = carrito.find(item => item.id === id);

  if (existente) {
    if (existente.cantidad < producto.stock) {
      existente.cantidad++;
    }
  } else {
    carrito.push({ id, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

function toggleCarrito() {
  document.getElementById("modal-carrito").classList.toggle("hidden");
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const cartCount = document.getElementById("cart-count");
  lista.innerHTML = "";
  let totalItems = 0;

  carrito.forEach((item, index) => {
    const p = productos.find(prod => prod.id === item.id);
    totalItems += item.cantidad;
    const li = document.createElement("li");
    li.className = "flex justify-between items-center";
    li.innerHTML = `
      <span>${p.nombre} x${item.cantidad} - $${(p.precio * item.cantidad).toLocaleString()}</span>
      <button class="text-red-500" onclick="eliminarProducto(${index})">Eliminar</button>
    `;
    lista.appendChild(li);
  });

  cartCount.textContent = totalItems;
}

function finalizarCompra() {
  let mensaje = "Hola! Quiero realizar esta compra:%0A";
  carrito.forEach(item => {
    const producto = productos.find(p => p.id === item.id);
    mensaje += `- ${producto.nombre} x${item.cantidad}%0A`;
  });

  window.open(`https://wa.me/5492615524525?text=${mensaje}`, "_blank");

  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  toggleCarrito();
  actualizarCarrito();
}

// == Eventos ==
document.getElementById("search").addEventListener("input", renderProductos);
document.getElementById("filter-category").addEventListener("change", renderProductos);
document.getElementById("filter-price").addEventListener("change", renderProductos);

// Inicializar
renderProductos();
actualizarCarrito();
