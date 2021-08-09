window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return; //si no existe un audio con esa tecla no ejecuta nada
  audio.currentTime = 0; //No hay tiempo de espera para reproducir el audio
  audio.play();
  key.classList.add("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing"); //Quita la clase playing cuando termina de colocarse
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

for (const key of keys) {
  key.addEventListener("click", () => {
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"`);
    const k = document.querySelector(`.key[data-key="${key.dataset.key}"`);
    audio.currentTime = 0; //No hay tiempo de espera para reproducir el audio
    audio.play();
    k.classList.add("playing");
  });
}
