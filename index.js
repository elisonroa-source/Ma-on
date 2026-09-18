let nombre = prompt("Cual es tu nombre");
let apellido = prompt("Cual es tu apellido");
let anoNacimiento = prompt("En que año naciste");
let edad = 2026 - anoNacimiento;
let esMayorEdad = edad > 18 ? "Eres mayor de edad" : "Eres menor de edad";

let mensaje = `Hola ${nombre} ${apellido} usted nacio ${anoNacimiento} y tienes ${edad}, y ${esMayorEdad}`;

alert(mensaje);

