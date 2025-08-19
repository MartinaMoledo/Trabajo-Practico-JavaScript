import fs from "fs";

const archivo = "./productos.json";

// Agregar producto al archivo local
function agregarProductoLocal(producto) {
  let data = JSON.parse(fs.readFileSync(archivo));
  data.push(producto);
  fs.writeFileSync(archivo, JSON.stringify(data, null, 2));
  console.log("Producto agregado al archivo local");
}

// Eliminar productos superiores a un valor determinado
function eliminarProductosCaros(limit) {
  let data = JSON.parse(fs.readFileSync(archivo));
  let filtered = data.filter(p => p.price <= limit);
  fs.writeFileSync(archivo, JSON.stringify(filtered, null, 2));
  console.log(`Productos con precio mayor a ${limit} eliminados del archivo local`);
}

// Probar funciones
function main() {
  agregarProductoLocal({
    id: 999,
    title: "Producto Local",
    price: 120,
    category: "misc",
  });

  eliminarProductosCaros(100);
}

main();

