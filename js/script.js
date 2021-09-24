$(document).ready(function () {
  $("#datepicker_llegada").datepicker();
  $("#datepicker_salida").datepicker();

  $("#formulario").on("submit", function (event) {
    event.preventDefault();

    let llegada = $("#datepicker_llegada").val();
    let salida = $("#datepicker_salida").val();
    localStorage.setItem("llegada", llegada);
    localStorage.setItem("salida", salida);
    window.location.replace("confirmacion.html");
  });
});

function clickLugar(lugar) {
  localStorage.setItem("lugar", lugar.value);
}

function clickCantPersonas(cantPersonas) {
  localStorage.setItem("cantPersonas", cantPersonas.value);
}
