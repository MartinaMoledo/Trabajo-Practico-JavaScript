let comidas = [
  { id: 1, nombre: "Lasaña", precio: 7000, stock: 5 },
  { id: 2, nombre: "Panchos", precio: 2500, stock: 5 },
  { id: 3, nombre: "Hamburquesas", precio: 8000, stock: 1 },
  { id: 4, nombre: "Empanadas", precio: 1200, stock: 20 },
  { id: 5, nombre: "Pizza", precio: 9000, stock: 6},
];

// Operaciones basicas y acceso:
console.log("Cantidad total de comidas:", comidas.length);
console.log("Lista de comidas:");
comidas.forEach(c => console.log(`- ${c.nombre}`));

// nombre del segundo y cuarto elemento
console.log("Segunda comida:", comidas[1].nombre);
console.log("Cuarta comida:", comidas[3].nombre);

// recorrido del array
console.log("\nRecorrido con for...of:");
for (const comida of comidas) {
  console.log(` ${comida.nombre} ${comida.precio}`);
}

//recorrido con forEach()
console.log("\nRecorrido con forEach:");
comidas.forEach((comida) => {
  console.log(`Producto: ${comida.nombre}, Precio: $${comida.precio}`);
});

// manipulacion de arrays:
// agregar dos elementos al final con push()
comidas.push(
  { id: 6, nombre: "Ensalada", precio: 3000, stock: 8 },
  { id: 7, nombre: "Tortilla de papa", precio: 5000, stock: 15 }
);
console.log("\nAgregar dos elementos al final:", comidas);

// eliminar el último elemento con pop()
const eliminarultimo = comidas.pop();
console.log("\nElemento eliminado con pop():", eliminarultimo);
console.log("Array después de pop():", comidas);

// agregar un elemento al inicio con unshift()
comidas.unshift({ id: 8, nombre: "Ravioles con salsa ", precio: 9000, stock: 8 });
console.log("\nAgregar elemento al inicio:", comidas);

// eliminar el primer elemento con shift()
const eliminarprimer = comidas.shift();
console.log("\nElemento eliminado con shift():", eliminarprimer);
console.log("Array después de shift():", comidas);

// utilizar filter()
const comidasenStock = comidas.filter(p => p.stock > 0);
console.log("\nComidas en stock > 0:", comidasenStock);

// utilizar map()
const nombrescomidas = comidas.map(p => p.nombre);
console.log("\nNombres de todos los productos:", nombrescomidas);

// utilizar find()
const comidaId3 = comidas.find(p => p.id === 3);
if (comidaId3) {
  console.log("\nComida con ID 3 encontrado:", comidaId3);
} else {
  console.log("\nComida con ID 3 inexistente.");
}

// utilizar sort()
const comidasenOrden = [...comidas].sort((a, b) => b.precio - a.precio);
console.log("\nComidas ordenadas por precio en orden decreciente:", comidasenOrden);
