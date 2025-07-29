function saludar()
{
 console.log("Hola, bienvenido a la función de saludo!");
}

saludar();

//una funcion declarada dentro de una constante
const saludo = () => {

    console.log("Hola, este es un saludo desde una función de flecha!");
}

saludo();


const saludoConParametros = (nombre) => {
    console.log(`Hola, ${nombre}! Bienvenido a la función con parámetros.`);
}

saludoConParametros("Juan");

//currying
const saludarConNombre = (nombre) => {
    return (mensaje) => {
        console.log(`${mensaje}, ${nombre}!`);
    };
};
const saludarJuan = saludarConNombre("Juan");
saludarJuan("Hola");
