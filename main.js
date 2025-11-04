alert("Bienvenido a nuestra tienda online");

let productos = [
    { nombre: "Camisa", precio: 1000 },
    { nombre: "Pantalón", precio: 5000 },
    { nombre: "Zapatos", precio: 3000 },
    { nombre: "Chaqueta", precio: 10000 }
];

let carrito = [];

function mostrarProductos() {
    let lista = "Productos disponibles:\n\n";
    for (let i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    alert(lista);
}

let deseaComprar = prompt("¿Querés comprar algo? (si/no)").toLowerCase();

if (deseaComprar === "si") {
    mostrarProductos(); 

    let seguir = true;

    while (seguir) {
        let opcion = parseInt(prompt("Ingresá el número del producto que querés (1-4):"));

        if (opcion >= 1 && opcion <= productos.length) {
            let elegido = productos[opcion - 1];; 
            carrito.push(elegido)
            alert("Agregaste " + elegido.nombre + " al carrito");
        } else {
            alert("Opción no válida");
        }

        seguir = confirm("¿Querés seguir comprando?");
    }

    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }

    alert("El total de tu compra es $" + total + ". Gracias por tu compra!");
} else {
    alert("Gracias por visitar la tienda!");
}


