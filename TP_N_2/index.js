import fetch from "node-fetch";
import fs from "fs";

const url_base = "https://fakestoreapi.com/products";
const archivo = "./productos.json";

// Recuperar todos los productos
async function obtenerTodosLosProductos() {
  const res = await fetch(url_base);
  const data = await res.json();
  console.log("Todos los productos recuperados");
  return data;
}

// Recuperar cantidad de productos
async function obtenerProductosLimitados(limite = 5) {
  const res = await fetch(`${url_base}?limit=${limite}`);
  const data = await res.json();
  console.log(`${limite} productos recuperados`);
  return data;
}

// Guardar en archivo JSON
function guardarEnArchivo(data) {
  fs.writeFileSync(archivo, JSON.stringify(data, null, 2));
  console.log("Productos guardados en productos.json");
}

// Agregar un nuevo producto
async function agregarProducto(producto) {
  const res = await fetch(url_base, {
    method: "POST",
    body: JSON.stringify(producto),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log("Producto agregado:", data);
  return data;
}

// Buscar un producto por ID
async function obtenerProductoPorId(id) {
  const res = await fetch(`${url_base}/${id}`);
  const data = await res.json();
  console.log(`Producto con ID ${id}:`, data);
  return data;
}

// Eliminar producto por ID
async function eliminarProducto(id) {
  const res = await fetch(`${url_base}/${id}`, { method: "DELETE" });
  const data = await res.json();
  console.log(`Producto con ID ${id} eliminado:`, data);
  return data;
}

// Modificar datos de un producto
async function actualizarProducto(id, nuevosDatos) {
  const res = await fetch(`${url_base}/${id}`, {
    method: "PUT",
    body: JSON.stringify(nuevosDatos),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log(`Producto con ID ${id} actualizado:`, data);
  return data;
}

//Probar funciones
async function main() {
  const todos = await obtenerTodosLosProductos();
  guardarEnArchivo(todos);

  await obtenerProductosLimitados(3);

  await agregarProducto({
    title: "Nuevo producto",
    price: 199.99,
    description: "Un producto agregado desde Node.js",
    image: "https://i.pravatar.cc",
    category: "electronics",
  });

  await obtenerProductoPorId(1);
  await actualizarProducto(1, { title: "Producto actualizado", price: 555 });
  await eliminarProducto(1);
}

main();
