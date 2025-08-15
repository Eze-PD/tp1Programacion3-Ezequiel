// TP 1 - Programación III - Arrays en JavaScript (Node.js)
// Simulación de base de datos de producto usando Arrays y Node.js

// Grupo BB - Integrantes:
// Sanche, David
// Ovejero, Yamila Mailen
// Conte Garcia, Emanuel
// Medina, Ricardo Daniel
// Pereyra Diaz, Ezequiel
// Villalba Olmedo, Delcy Adalis

// 1. Configuración Inicial
let productos = [
  { id: 1, nombre: "Mouse inalámbrico", precio: 5500, stock: 10 },
  { id: 2, nombre: "Teclado mecánico", precio: 22000, stock: 5 },
  { id: 3, nombre: "Monitor 24 pulgadas", precio: 75000, stock: 3 },
  { id: 4, nombre: "Auriculares gamer", precio: 12000, stock: 0 },
  { id: 5, nombre: "Webcam HD", precio: 8000, stock: 7 },
];

// 2. Operaciones Básicas y Acceso
console.log("1) Cantidad total de productos:", productos.length);
console.log("2) Segundo producto:", productos[1].nombre);
console.log("3) Cuarto producto:", productos[3].nombre);

// 3. Recorrido del Array
console.log("\n4) Recorrido con for...of:");
for (let producto of productos) {
  console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
}

console.log("\n5) Recorrido con forEach:");
productos.forEach((p) => {
  console.log(`Producto: ${p.nombre}, Precio: $${p.precio}`);
});

// 4. Manipulación de Arrays
console.log("\n6) Agregar dos productos al final (push):");
productos.push(
  { id: 6, nombre: "Parlantes Bluetooth", precio: 15000, stock: 4 },
  { id: 7, nombre: "Silla ergonómica", precio: 95000, stock: 2 }
);
console.table(productos);

console.log("\n7) Eliminar último producto (pop):");
productos.pop();
console.table(productos);

console.log("\n8) Agregar producto al inicio (unshift):");
productos.unshift({ id: 8, nombre: "Lámpara LED", precio: 3000, stock: 12 });
console.table(productos);

console.log("\n9) Eliminar primer producto (shift):");
productos.shift();
console.table(productos);

console.log("\n10) Filtrar productos con stock > 0 (filter):");
let productosConStock = productos.filter((p) => p.stock > 0);
console.table(productosConStock);

console.log("\n11) Obtener solo nombres de productos (map):");
let nombresProductos = productos.map((p) => p.nombre);
console.log(nombresProductos);

console.log("\n12) Buscar producto con id = 3 (find):");
let productoEncontrado = productos.find((p) => p.id === 3);
if (productoEncontrado) {
  console.table([productoEncontrado]);
} else {
  console.log("No existe un producto con ese ID.");
}

console.log("\n13) Ordenar productos por precio descendente (sort):");
let productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
console.table(productosOrdenados);
