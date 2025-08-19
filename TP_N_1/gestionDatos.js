//1-Declaración del array

let comidas = [
  { id: 1, nombre: "Lasaña", precio: 7000, stock: 5 },
  { id: 2, nombre: "Panchos", precio: 2500, stock: 5 },
  { id: 3, nombre: "Hamburquesas", precio: 8000, stock: 1 },
  { id: 4, nombre: "Empanadas", precio: 1200, stock: 20 },
  { id: 5, nombre: "Pizza", precio: 9000, stock: 6},
];

//2-Operaciones basicas y acceso:

// Imprimir la longitud total del array
console.log("Cantidad total de comidas:", comidas.length);
console.log("Lista de comidas:");
comidas.forEach(c => console.log(`- ${c.nombre}`));

// nombre del segundo y cuarto elemento
console.log("Segunda comida:", comidas[1].nombre);
console.log("Cuarta comida:", comidas[3].nombre);

//3-Recorrido del array
//Recorrido con for...of
console.log("\nRecorrido con for...of:");
for (const comida of comidas) {
  console.log(` ${comida.nombre} ${comida.precio}`);
}

//Recorrido con forEach()
console.log("\nRecorrido con forEach:");
comidas.forEach((comida) => {
  console.log(`Producto: ${comida.nombre}, Precio: $${comida.precio}`);
});

//4-Manipulacion de arrays:
//Agrega dos elementos al final
comidas.push(
  { id: 6, nombre: "Ensalada", precio: 3000, stock: 8 },
  { id: 7, nombre: "Tortilla de papa", precio: 5000, stock: 15 }
);
console.log("\nAgregar dos elementos al final:", comidas);

//Eliminar el último elemento
const eliminarultimo = comidas.pop();
console.log("\nElemento eliminado con pop():", eliminarultimo);
console.log("Array después de pop():", comidas);

//Agregar un elemento al inicio
comidas.unshift({ id: 8, nombre: "Ravioles con salsa ", precio: 9000, stock: 8 });
console.log("\nAgregar elemento al inicio:", comidas);

//Eliminar el primer elemento
const eliminarprimer = comidas.shift();
console.log("\nElemento eliminado con shift():", eliminarprimer);
console.log("Array después de shift():", comidas);

//Crear un nuevo array con stock
const comidasenStock = comidas.filter(p => p.stock > 0);
console.log("\nComidas en stock > 0:", comidasenStock);

//Crear un nuevo array con nombres
const nombrescomidas = comidas.map(p => p.nombre);
console.log("\nNombres de todos los productos:", nombrescomidas);

//Buscar productos por id con find()
const comidaId3 = comidas.find(p => p.id === 3);
if (comidaId3) {
  console.log("\nComida con ID 3 encontrado:", comidaId3);
} else {
  console.log("\nComida con ID 3 inexistente.");
}

//Ordenar productos por precio en orden decreciente
const comidasenOrden = [...comidas].sort((a, b) => b.precio - a.precio);
console.log("\nComidas ordenadas por precio en orden decreciente:", comidasenOrden);
