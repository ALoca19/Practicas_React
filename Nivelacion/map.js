const datos = [
    {nombre: "Juan", edad: 30},
    {nombre: "Ana", edad: 25},
    {nombre: "Pedro", edad: 35}
];

datos.forEach(elemento => {
    console.log(`Nombre: ${elemento.nombre}, Edad: ${elemento.edad}`);
});

datos.map(elemento => {
    console.log(`Nombre: ${elemento.nombre}, Edad: ${elemento.edad}`);
});