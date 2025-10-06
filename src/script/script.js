// Seleciona o elemento que vai ser o "gatilho"
const trigger = document.querySelector('.pin-04');

// Seleciona os elementos que vão se animar
const targets = document.querySelectorAll(
  '.pin-01, .pin-02, .pin-03, .pin-05, .pin-06, section.book-animation div:nth-child(1)'
);

// Adiciona a classe 'active' quando o mouse entra
trigger.addEventListener('mouseenter', () => {
  targets.forEach(el => el.classList.add('active'));
});

// Remove a classe quando o mouse sai
trigger.addEventListener('mouseleave', () => {
  targets.forEach(el => el.classList.remove('active'));
});
