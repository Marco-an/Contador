const vPantalla = document.getElementById('pantalla');
const btnReducir = document.getElementById('reducir');
const btnReiniciar = document.getElementById('reiniciar');
const btnAumentar = document.getElementById('aumentar');

let contador = 0;
btnAumentar.onclick = function () {
  contador++;
  if (contador > 0) {
    vPantalla.style = 'color:green;';
  } else if (contador == 0) {
    vPantalla.style = 'color:blue;';
  }
  vPantalla.innerText = contador;
};

btnReiniciar.onclick = function () {
  contador = 0;
  vPantalla.style = 'color:blue;';
  vPantalla.innerText = contador;
};

btnReducir.onclick = function () {
  contador--;
  if (contador < 0) {
    vPantalla.style = 'color:red;';
  } else if (contador == 0) {
    vPantalla.style = 'color:blue;';
  }
  vPantalla.innerText = contador;
};
