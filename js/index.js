// obtengo el dato que se ingresa
let inputText = document.getElementById("inputText");
// obtengo el botón que me "guarda" el dato ingresado
let buttonText = document.getElementById("buttonText");

// evento de al hacer click, guarde el dato
buttonText.addEventListener("click", () => {
  // guardar en localStorage
  localStorage.setItem("dato", inputText.value);
  alert("Dato guardado!");
});