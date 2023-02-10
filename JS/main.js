/*Condicional*/
const mayorDeEdad = prompt("Ingrese su edad por favor");
if (mayorDeEdad >= 18) {
  alert("acceso aprobado");
} else {
  alert("Debe ser mayor de edad para ingresar");
}

/*objetos*/
class Propiedades {
  constructor(direccion, ambientes, precioMensual) {
    this.direccion = direccion;
    this.ambientes = ambientes;
    this.precioMensual = precioMensual;
  }
  mostrarDireccion() {
    console.log("La dirección de la propiedad es: " + this.direccion);
  }
  mostrarAmbientes() {
    console.log("Posee " + this.ambientes + " ambientes");
  }
  mostrarPrecio() {
    this.precioMensual("El precio mensual es: U$s " + this.precioMensual);
  }
}

const propiedad1 = new Propiedades("Av.Libertador 6299 depto 701", 2, 1500);
const propiedad2 = new Propiedades("Guatemala 5000", 2, 1200);
const propiedad3 = new Propiedades("Av.Libertador 6100", 1, 600);
const propiedad4 = new Propiedades("Av.Libertador6300", 1, 500);

console.log(
  "El inmueble en " +
    propiedad1.direccion +
    " tiene " +
    propiedad1.ambientes +
    " ambientes"
);
console.log(propiedad2);
console.log(propiedad3);
console.log(propiedad4);

/*Array*/
/*los contratos de alquiler temporario máximo pueden ser por 3 meses,
se alquilaria por semana, son máximo 12 semanas*/

const semanas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let estadia =
  semanas[prompt("ingrese en que semana termina su estadia")] -
  semanas[prompt("ingrese en que semana empieza su estadia")];

for (let index = 0; index < 12; index++) {
  alert(semanas[index]);
}

/*ciclo*/
let nombresInquilinos = prompt(
  "ingrese nombre de una de las personas que va a alquilar, o escriba SALIR"
);
while (nombresInquilinos != "SALIR") {
  alert("El nombre del inquilino es " + nombresInquilinos);
  nombresInquilinos = prompt(
    "ingrese nombre de una de las personas que va a alquilar, o escriba SALIR"
  );
}
if ((nombresInquilinos = " ")) {
  alert(" no puede dejar vacio el estacio, escriba SALIR");
}

/*
const porcentajeComision = 0.2;
const valorInmuebleAlquiler = prompt("ingrese valor del alquiler");
const valorConComision = valorInmuebleAlquiler * porcentajeComision;
alert("pagara: " + valorConComision);
*/
/*
const calcularAlquiler = function (precioAlquiler) {
  if (precioAlquiler < 4 || precioAlquiler > 3) {
    return 600;
  } else if (precioAlquiler < 3 || precioAlquiler > 2) {
    return 500;
  } else if (precioAlquiler < 2 || precioAlquiler > 1) {
    return 400;
  }
  return 200;
};*/
