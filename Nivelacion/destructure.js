const Persona = {
    nombre: "Manuel",
    apellido: "González",
    edad: 30,
    casado: false,
    hijo: {
        nombre: "Carlos",
        edad: 5
    }
}

const {nombre, edad} = Persona;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

const {hijo: {nombre: nombreHijo, edad: edadHijo}} = Persona;
console.log(`El nombre del hijo es ${nombreHijo} y tiene ${edadHijo} años.`);