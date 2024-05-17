let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

document.getElementById("botao_comprar").addEventListener("click", function() {
    var descricaoProduto = document.getElementById("descricao_produto").innerText;
    var numeroTelefone = "5531994785531"; // Insira seu número de telefone com o código do país aqui
    var mensagem = encodeURIComponent("Gostaria de comprar o produto: " + descricaoProduto);
    var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=" + mensagem;
    window.location.href = linkWhatsApp;
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Altere aqui para controlar o tempo de exibição de cada slide
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}


// Função para alternar a exibição do menu ao clicar no ícone do menu hamburguer
function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Adiciona um event listener para fechar o menu ao clicar em um dos links
document.querySelectorAll('.list-menu a').forEach(link => {
  link.addEventListener('click', () => {
    var menu = document.getElementById('menu');
    menu.classList.remove('active');
  });
});









