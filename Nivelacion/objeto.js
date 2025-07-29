const Persona = {
    nombre: "Manuel",
    apellido: "González",
    edad: 30,
    casado: false
}

console.log(`Hola, mi nombre es ${Persona.nombre} ${Persona.apellido}. Tengo ${Persona.edad} años y estoy casado: ${Persona.casado}.`);
console.log(Persona.nombre);
console.log(Persona["apellido"]);

Persona.id = 1;
console.log(Persona.id);