// obtengo el span donde mostraré el dato
let spanData = document.getElementById("data");

// leer de localStorage
let dato = localStorage.getItem("dato");

// mostrarlo en el span (si existe)
if (dato) {
  spanData.textContent = dato;
} else {
  spanData.textContent = "No hay datos guardados.";
}