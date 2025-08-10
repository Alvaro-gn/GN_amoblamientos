// ========= DATOS =========
const productos = [
  // cada producto ahora incluye "descripcion"

  { id: 1,  nombre: "SILLA MODERNA",         categoria: "Sillas",       precio: 45000, oldPrecio: 52000, cuotas: "3x $15.000",    imagen: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900","https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=900","https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=900"], descripcion: "Silla de líneas limpias y respaldo ergonómico, ideal para comedor moderno." },
  { id: 2,  nombre: "MESA MINIMALISTA",      categoria: "Mesas",        precio: 60000, oldPrecio: 0,     cuotas: "6x $10.000",   imagen: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=900","https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900","https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&v=2"], descripcion: "Mesa rectangular minimal con tapa resistente y patas sólidas." },
  { id: 3,  nombre: "ESCRITORIO PRO",        categoria: "Escritorios",  precio: 80000, oldPrecio: 91000, cuotas: "6x $13.333",   imagen: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=900","https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=900","https://images.unsplash.com/photo-1529386317747-0a6b1a9f7b3d?q=80&w=900"], descripcion: "Escritorio amplio con espacio para monitor y accesorios." },
  { id: 4,  nombre: "SILLA CLÁSICA",         categoria: "Sillas",       precio: 30000, oldPrecio: 0,     cuotas: "3x $10.000",   imagen: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900","https://images.unsplash.com/photo-1519710394074-0f039a7d2b5d?q=80&w=900","https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=900"], descripcion: "Silla de líneas limpias y respaldo ergonómico, ideal para comedor moderno." },
  { id: 5,  nombre: "MESA DE COMEDOR",       categoria: "Mesas",        precio: 70000, oldPrecio: 77000, cuotas: "6x $11.666",   imagen: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900","https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900","https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=900"], descripcion: "Mesa de comedor para 6 personas con acabado satinado." },
  { id: 6,  nombre: "ESCRITORIO COMPACTO",   categoria: "Escritorios",  precio: 40000, oldPrecio: 0,     cuotas: "3x $13.333",   imagen: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=900","https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=900","https://images.unsplash.com/photo-1529386317747-0a6b1a9f7b3d?q=80&w=900"], descripcion: "Escritorio amplio con espacio para monitor y accesorios." },
  { id: 7,  nombre: "SILLA EJECUTIVA",       categoria: "Sillas",       precio: 55000, oldPrecio: 62000, cuotas: "6x $9.166",    imagen: "https://images.unsplash.com/photo-1582582429416-0a0e4e3d11f6?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1582582429416-0a0e4e3d11f6?q=80&w=900","https://images.unsplash.com/photo-1582582454690-1e56097d69a3?q=80&w=900","https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=900"], descripcion: "Silla ejecutiva con soporte lumbar, pensada para oficina." },
  { id: 8,  nombre: "MESA RATONA",           categoria: "Mesas",        precio: 35000, oldPrecio: 0,     cuotas: "3x $11.666",   imagen: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900","https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900","https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=900"], descripcion: "Mesa de comedor para 6 personas con acabado satinado." },
  { id: 9,  nombre: "BIBLIOTECA NORDIC",     categoria: "Bibliotecas",  precio: 92000, oldPrecio: 0,     cuotas: "6x $15.333",   imagen: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=900","https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900","https://images.unsplash.com/photo-1513679400723-0d9f8b3a94ee?q=80&w=900"], descripcion: "Biblioteca estilo nórdico de 5 estantes." },
  { id:10,  nombre: "RACK TV 60”",           categoria: "Racks",        precio: 68000, oldPrecio: 73000, cuotas: "6x $11.333",   imagen: "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?q=80&w=900", galeria: ["https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?q=80&w=900","https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=900","https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?q=80&w=900"], descripcion: "Rack para TV hasta 60 pulgadas con almacenamiento." },

  ,{ id: 11, nombre: "LÁMPARA DE PIE NÓRDICA", categoria: "Decoración", precio: 25000, oldPrecio: 0, cuotas: "3x $8.333", imagen: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=900", descripcion: "Lámpara de pie estilo nórdico, ideal para salas modernas.", galeria: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=900","https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=900"] }
  ,{ id: 12, nombre: "ALFOMBRA TEJIDA", categoria: "Decoración", precio: 18000, oldPrecio: 0, cuotas: "3x $6.000", imagen: "https://images.unsplash.com/photo-1582582429416-0a0e4e3d11f6?q=80&w=900", descripcion: "Alfombra artesanal tejida a mano en tonos neutros.", galeria: ["https://images.unsplash.com/photo-1582582429416-0a0e4e3d11f6?q=80&w=900"] }
  ,{ id: 13, nombre: "SILLÓN INDIVIDUAL", categoria: "Sillones", precio: 65000, oldPrecio: 0, cuotas: "6x $10.833", imagen: "https://images.unsplash.com/photo-1616627985125-bf3e5eac2ffb?q=80&w=900", descripcion: "Sillón individual tapizado en lino, estructura de madera maciza.", galeria: ["https://images.unsplash.com/photo-1616627985125-bf3e5eac2ffb?q=80&w=900"] }
  ,{ id: 14, nombre: "SILLÓN DOBLE", categoria: "Sillones", precio: 95000, oldPrecio: 0, cuotas: "6x $15.833", imagen: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c7?q=80&w=900", descripcion: "Sillón de dos plazas con almohadones desmontables.", galeria: ["https://images.unsplash.com/photo-1622560480605-d83c853bc5c7?q=80&w=900"] }
  ,{ id: 15, nombre: "CAMA KING", categoria: "Dormitorio", precio: 120000, oldPrecio: 0, cuotas: "6x $20.000", imagen: "https://images.unsplash.com/photo-1601979031896-3cc86e6a06b4?q=80&w=900", descripcion: "Cama tamaño king con respaldo acolchado y base de madera.", galeria: ["https://images.unsplash.com/photo-1601979031896-3cc86e6a06b4?q=80&w=900"] }
  ,{ id: 16, nombre: "MESA AUXILIAR", categoria: "Mesas", precio: 22000, oldPrecio: 0, cuotas: "3x $7.333", imagen: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=900", descripcion: "Mesa auxiliar redonda de madera y metal.", galeria: ["https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=900"] }
  ,{ id: 17, nombre: "VELADOR MODERNO", categoria: "Decoración", precio: 12000, oldPrecio: 0, cuotas: "3x $4.000", imagen: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=900", descripcion: "Velador moderno con base de cerámica y pantalla textil.", galeria: ["https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=900"] }
  ,{ id: 18, nombre: "REPISA FLOTANTE", categoria: "Decoración", precio: 8000, oldPrecio: 0, cuotas: "3x $2.666", imagen: "https://images.unsplash.com/photo-1529386317747-0a0e4e3d11f6?q=80&w=900", descripcion: "Repisa flotante de madera maciza con soportes invisibles.", galeria: ["https://images.unsplash.com/photo-1529386317747-0a0e4e3d11f6?q=80&w=900"] }
  ,{ id: 19, nombre: "ESPEJO DE PARED", categoria: "Decoración", precio: 30000, oldPrecio: 0, cuotas: "3x $10.000", imagen: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=900", descripcion: "Espejo rectangular de gran tamaño con marco de madera.", galeria: ["https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=900"] }
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
          <a href="product.html?id=${p.id}" class="underline underline-offset-4 decoration-1 hover:opacity-80">${p.nombre}</a>
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
if (document.getElementById("search")) {
  document.getElementById("search").addEventListener("input", renderProductos);
}
if (document.getElementById("filter-category")) {
  document.getElementById("filter-category").addEventListener("change", renderProductos);
}
if (document.getElementById("filter-price")) {
  document.getElementById("filter-price").addEventListener("change", renderProductos);
}
if (document.getElementById("focus-search")) {
  document.getElementById("focus-search").addEventListener("click", ()=> {
    const s = document.getElementById("search"); if (s) s.focus();
  });
}

// ========= INIT =========
if (document.getElementById("productos")) { renderProductos(); }
saveCart(); // actualiza contadores

// ========= EXPORT HELPERS FOR PRODUCT PAGE =========
window.__GN__ = {
  productos,
  agregarAlCarrito,
  fmt
};


/** Retorna hasta N productos de la misma categoría, excluyendo el id actual */
function getRelated(categoria, excludeId, n=4){
  return productos.filter(p => p.categoria === categoria && p.id !== excludeId).slice(0, n);
}

// Export helpers (sumamos getRelated)
if (window.__GN__) {
  window.__GN__.getRelated = getRelated;
} else {
  window.__GN__ = { productos, agregarAlCarrito, fmt, getRelated };
}
