document.addEventListener("DOMContentLoaded", ready);
function ready() {
  //alert('DOM cargado con exito');
  console.log("DOM cargado con exito");
}

function promedioGral() {
  //funcion promedio, obtencion de valores de los input
  function promedio() {
    var calificacion1_1 = document.getElementById("calificacion1_1").value;
    var calificacion1_2 = document.getElementById("calificacion1_2").value;
    var calificacion1_3 = document.getElementById("calificacion1_3").value;

    var calificacion2_1 = document.getElementById("calificacion2_1").value;
    var calificacion2_2 = document.getElementById("calificacion2_2").value;
    var calificacion2_3 = document.getElementById("calificacion2_3").value;

    var calificacion3_1 = document.getElementById("calificacion3_1").value;
    var calificacion3_2 = document.getElementById("calificacion3_2").value;
    var calificacion3_3 = document.getElementById("calificacion3_3").value;

    var promedio1 =
      (parseFloat(calificacion1_1) +
        parseFloat(calificacion1_2) +
        parseFloat(calificacion1_3)) /
      3;
    document.getElementById("promedio1").innerHTML = promedio1.toFixed(2);
    console.log("Promedio 1: " + promedio1);
    var promedio2 =
      (parseFloat(calificacion2_1) +
        parseFloat(calificacion2_2) +
        parseFloat(calificacion2_3)) /
      3;
    document.getElementById("promedio2").innerHTML = promedio2.toFixed(2);
    console.log("Promedio 2:" + promedio2);
    var promedio3 =
      (parseFloat(calificacion3_1) +
        parseFloat(calificacion3_2) +
        parseFloat(calificacion3_3)) /
      3;
    document.getElementById("promedio3").innerHTML = promedio3.toFixed(2);
    console.log("Promedio 3: " + promedio3);

      //get all promedio
var promedio_materia1 = document.getElementById("promedio1").innerHTML;
var promedio_materia2 = document.getElementById("promedio2").innerHTML;
var promedio_materia3 = document.getElementById("promedio3").innerHTML;

console.log(`promedio materia 1: ${promedio_materia1}, promedio materia 2: ${promedio_materia2}, promedio materia 3: ${promedio_materia3}`);
//calculate average of averages
const promedioGral =
  (parseFloat(promedio_materia1) + parseFloat(promedio_materia2) + parseFloat(promedio_materia3)) / 3;
document.getElementById("promedio_gral").innerHTML = promedioGral.toFixed(2);
  }

  //invocando funcion para los promedios por materia
  promedio();


  //evento escucha cambio en los inputs
  calificacion1_1.addEventListener("change", function () {
    promedio();
    console.log(`el valor de calificacion1 ha cambiado a: ${this.value}`);
  });

  calificacion1_2.addEventListener("change", function () {
    promedio();
    console.log(`el valor de calificacion2 ha cambiado a: ${this.value}`);
  });

  calificacion1_3.addEventListener("change", function () {
    promedio();
    console.log(`el valor de calificacion3 ha cambiado a: ${this.value}`);
  });

  calificacion2_1.addEventListener("change", function () {
    promedio();
    console.log(`el valor de calificacion1 ha cambiado a: ${this.value}`);
  });

  calificacion2_2.addEventListener("change", function () {
    promedio();
    console.log(`el valor de calificacion2 ha cambiado a: ${this.value}`);
  });

  calificacion2_3.addEventListener("change", function () {
    promedio();
    console.log(`el valor de calificacion3 ha cambiado a: ${this.value}`);
  });

  calificacion3_1.addEventListener("change", function () {
    promedio();
    console.log(`el valor de calificacion1 ha cambiado a: ${this.value}`);
  });

  calificacion3_2.addEventListener("change", function () {
    promedio();
    console.log(`el valor de calificacion2 ha cambiado a: ${this.value}`);
  });

  calificacion3_3.addEventListener("change", function () {
    promedio();
    console.log(`el valor de calificacion3 ha cambiado a: ${this.value}`);
  });


}

//invocando funcion para los promedios generales
promedioGral();
