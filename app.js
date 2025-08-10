// ========= DATOS =========
const productos = [
  { id: 1, nombre: "SILLA NÓRDICA", categoria: "Sillas", precio: 39999, cuotas: "3x $13.333", imagen: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900", descripcion: "Silla de madera y polipropileno estilo nórdico. Ideal para comedor o escritorio." },
  { id: 2, nombre: "MESA COMEDOR ROBLE", categoria: "Mesas", precio: 159999, cuotas: "6x $26.666", imagen: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900", descripcion: "Mesa rectangular en chapa roble, 160x80 cm. Terminación laqueada mate." },
  { id: 3, nombre: "ESCRITORIO MINIMAL", categoria: "Escritorios", precio: 89999, cuotas: "6x $15.000", imagen: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=900", descripcion: "Estructura metálica y tapa melamina 120x60 cm. Pasacables incluido." },
  { id: 4, nombre: "MESA RATONA LOOP", categoria: "Mesas", precio: 54999, cuotas: "3x $18.333", imagen: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=900", descripcion: "Mesa baja redonda 70 cm. Línea minimalista para livings modernos." },
  { id: 5, nombre: "RACK TV 60”", categoria: "Racks", precio: 109999, cuotas: "6x $18.333", imagen: "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?q=80&w=900", descripcion: "Rack con estantes regulables y pasacables. Para TVs hasta 60 pulgadas." },
  { id: 6, nombre: "BIBLIOTECA NORDIC", categoria: "Bibliotecas", precio: 129999, cuotas: "6x $21.666", imagen: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=900", descripcion: "Librero modular 180x80 cm. 5 estantes, terminación roble claro." },
  { id: 7, nombre: "SILLA EJECUTIVA", categoria: "Sillas", precio: 74999, cuotas: "3x $24.999", imagen: "https://images.unsplash.com/photo-1582582429416-0a0e4e3d11f6?q=80&w=900", descripcion: "Silla ergonómica con regulación de altura y respaldo reclinable." },
  { id: 8, nombre: "CAJONERA COMPACTA", categoria: "Almacenamiento", precio: 45999, cuotas: "3x $15.333", imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=900", descripcion: "Cajonera 3 cajones con correderas metálicas. 60x40x60 cm." },
  { id: 9, nombre: "ESTANTERÍA MODULAR", categoria: "Almacenamiento", precio: 99999, cuotas: "6x $16.666", imagen: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=900", descripcion: "Estantería configurable 160x80 cm. Módulos abiertos y cerrados." }
];

// ========= ESTADO =========
const CART_KEY = "carrito_v2";                // persistencia
let carrito = JSON.parse(localStorage.getItem(CART_KEY)) || []; // [{id, qty}]

// ========= UTILIDADES =========
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const fmt = (n) => n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
const pct = (oldP, p) => oldP > 0 ? Math.round((1 - (p / oldP)) * 100) : 0;

const cartCountNav = $("#cart-count");
const contenedor   = $("#productos");

function cartQtyTotal(){ return carrito.reduce((a, it) => a + it.qty, 0); }
function saveCart(){
  localStorage.setItem(CART_KEY, JSON.stringify(carrito));
  const total = cartQtyTotal();
  if (cartCountNav) cartCountNav.textContent = total;
  
}

// ========= RENDER PRODUCTOS (clon estético) =========
function productoCardHTML(p){
  const tienePromo = p.oldPrecio && p.oldPrecio > p.precio;
  const off = pct(p.oldPrecio || 0, p.precio);
  return `
    <article class="card group relative p-4 md:p-5" tabindex="0">
      <div class="relative">
        ``
        <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-56 md:h-64 object-contain mx-auto" />
      </div>

      <div class="mt-4">
        <h3 class="font-heading tracking-slight text-sm md:text-base text-gray-900">
          <a href="producto.html?id=${p.id}" class="underline underline-offset-4 decoration-1 hover:opacity-80">${p.nombre}</a>
        </h3>

        <div class="mt-1 flex items-end gap-2">
          <span class="text-xl md:text-2xl font-bold text-black">${fmt(p.precio)}</span>
          ${tienePromo ? `<span class="text-sm text-gray-400 line-through">${fmt(p.oldPrecio)}</span>` : ``}
        </div>
        <p class="text-[12px] text-gray-500 mt-1">con transf/dep. · ${p.cuotas}</p>
      </div>

      <div class="cta mt-4">
        <button class="w-full bg-black text-white text-sm py-2" data-add="${p.id}" aria-label="Agregar ${p.nombre} al carrito">Agregar al carrito</button>
      </div>
    </article>
  `;
}

function renderProductos(){
  contenedor.setAttribute("aria-busy","true");
  contenedor.innerHTML = "";

  const search    = $("#search").value.toLowerCase().trim();
  const categoria = $("#filter-category").value;
  const precioF   = $("#filter-price").value;

  const filtrados = productos.filter(p =>
    (!search || p.nombre.toLowerCase().includes(search)) &&
    (!categoria || p.categoria === categoria) &&
    (!precioF || (precioF === "low" ? p.precio < 50000 : p.precio >= 50000))
  );

  if (filtrados.length === 0){
    contenedor.innerHTML = `<p class="text-center col-span-full text-gray-500">No se encontraron productos.</p>`;
    contenedor.setAttribute("aria-busy","false");
    return;
  }

  contenedor.innerHTML = filtrados.map(productoCardHTML).join("");
  contenedor.setAttribute("aria-busy","false");

  // Delegación evento Agregar
  contenedor.querySelectorAll("[data-add]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      const id = Number(e.currentTarget.getAttribute("data-add"));
      agregarAlCarrito(id);
      e.currentTarget.textContent = "Agregado ✓";
      setTimeout(()=> e.currentTarget.textContent = "Agregar al carrito", 900);
    });
  });
}

// ========= CARRITO =========
function agregarAlCarrito(id){
  const idx = carrito.findIndex(it => it.id === id);
  if (idx >= 0) carrito[idx].qty += 1;
  else carrito.push({ id, qty: 1 });
  saveCart();
  renderCarrito();
}
function restarDelCarrito(id){
  const idx = carrito.findIndex(it => it.id === id);
  if (idx >= 0){
    carrito[idx].qty -= 1;
    if (carrito[idx].qty <= 0) carrito.splice(idx,1);
    saveCart();
    renderCarrito();
  }
}
function eliminarDelCarrito(id){
  carrito = carrito.filter(it => it.id !== id);
  saveCart(); renderCarrito();
}
function vaciarCarrito(){
  carrito = [];
  saveCart(); renderCarrito();
}
function toggleCarrito(){
  $("#modal-carrito").classList.toggle("hidden");
  renderCarrito();
}

function renderCarrito(){
  const lista = $("#lista-carrito");
  if (!lista) return;

  lista.innerHTML = "";
  let subtotal = 0;

  if (carrito.length === 0){
    lista.innerHTML = `<li class="text-gray-500">Tu carrito está vacío.</li>`;
  } else {
    carrito.forEach(item=>{
      const p = productos.find(x=>x.id===item.id);
      if (!p) return;
      const totalLinea = p.precio * item.qty;
      subtotal += totalLinea;

      const li = document.createElement("li");
      li.className = "flex items-center justify-between gap-2";
      li.innerHTML = `
        <div class="flex items-center gap-3">
          <img src="${p.imagen}" alt="${p.nombre}" class="w-14 h-14 object-cover rounded">
          <div>
            <p class="font-medium">${p.nombre}</p>
            <p class="text-sm text-gray-500">${fmt(p.precio)} c/u</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="px-2 py-1 border rounded" data-dec="${p.id}" aria-label="Restar uno">−</button>
          <span class="w-6 text-center">${item.qty}</span>
          <button class="px-2 py-1 border rounded" data-inc="${p.id}" aria-label="Sumar uno">+</button>
          <span class="w-20 text-right font-semibold">${fmt(totalLinea)}</span>
          <button class="text-red-600 ml-2" data-del="${p.id}" aria-label="Eliminar del carrito">Eliminar</button>
        </div>
      `;
      lista.appendChild(li);
    });
  }

  $("#subtotal").textContent = fmt(subtotal);

  // Listeners +/−/eliminar
  lista.querySelectorAll("[data-inc]").forEach(b=>b.addEventListener("click", e=>{
    const id = Number(e.currentTarget.getAttribute("data-inc"));
    agregarAlCarrito(id);
  }));
  lista.querySelectorAll("[data-dec]").forEach(b=>b.addEventListener("click", e=>{
    const id = Number(e.currentTarget.getAttribute("data-dec"));
    restarDelCarrito(id);
  }));
  lista.querySelectorAll("[data-del]").forEach(b=>b.addEventListener("click", e=>{
    const id = Number(e.currentTarget.getAttribute("data-del"));
    eliminarDelCarrito(id);
  }));
}

// ========= CHECKOUT WHATSAPP =========
function checkoutWhatsApp(){
  if (carrito.length === 0){ alert("Tu carrito está vacío."); return; }
  const lineas = carrito.map(it=>{
    const p = productos.find(x=>x.id===it.id);
    return `• ${p.nombre} x ${it.qty} = ${fmt(p.precio * it.qty)}`;
  }).join("%0A");
  const total = carrito.reduce((acc, it)=>{
    const p = productos.find(x=>x.id===it.id);
    return acc + (p ? p.precio*it.qty : 0);
  }, 0);

  const msg = `Hola, me interesa realizar esta compra:%0A${lineas}%0A%0ATotal: ${encodeURIComponent(fmt(total))}%0A%0ADatos de contacto:`;
  const telefono = "5492615524525";
  window.open(`https://wa.me/${telefono}?text=${msg}`, "_blank", "noopener");
}

// ========= LISTENERS =========
if ($("#search")) $("#search").addEventListener("input", renderProductos);
if ($("#filter-category")) $("#filter-category").addEventListener("change", renderProductos);
if ($("#filter-price")) $("#filter-price").addEventListener("change", renderProductos);
if ($("#focus-search")) $("#focus-search").addEventListener("click", ()=> $("#search").focus());

// ========= INIT =========
if (document.querySelector("#productos")) renderProductos();
saveCart(); // actualiza contadores


/* ========= DETALLE DE PRODUCTO ========= */
function getProductoById(id){
  return productos.find(p => String(p.id) === String(id));
}

function renderDetalleProducto(){
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const p = getProductoById(id);
  const wrap = document.querySelector("#detalle-producto");
  if (!wrap) return;
  if (!p){
    wrap.innerHTML = `<p class="text-center text-gray-500">Producto no encontrado.</p>`;
    return;
  }
  wrap.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-8 grid gap-8 lg:grid-cols-2">
      <div class="bg-white p-6">
        <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-96 object-contain" />
      </div>
      <div>
        <h1 class="font-heading text-2xl md:text-3xl">${p.nombre}</h1>
        <p class="text-gray-500 mt-1">${p.categoria}</p>
        <div class="mt-3 flex items-end gap-3">
          <span class="text-3xl font-bold">${fmt(p.precio)}</span>
        </div>
        <p class="text-sm text-gray-500 mt-1">Transferencia/depósito · ${p.cuotas}</p>
        <p class="mt-6 leading-relaxed">${p.descripcion || ""}</p>

        <div class="mt-8 flex gap-3">
          <button class="bg-black text-white px-5 py-3 rounded" onclick="agregar(${p.id});toggleCarrito()">Comprar ahora</button>
          <button class="border px-5 py-3 rounded" onclick="agregar(${p.id})">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;
}

if (document.querySelector("#detalle-producto")) {
  // Inicializa detalle si estamos en la página de producto
  saveCart();
  renderDetalleProducto();
}
