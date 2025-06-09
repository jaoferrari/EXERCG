// Aguarda o conteúdo do DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.main-header');
    
    // Função para adicionar/remover classe do header ao rolar a página
    function handleScroll() {
        if (window.scrollY > 50) { // Se rolar mais de 50 pixels
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Efeito de animação suave nos cartões de produto ao aparecer na tela
    const productCards = document.querySelectorAll('.product-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // O gatilho é ativado quando 10% do elemento está visível
    });

    productCards.forEach(card => {
        observer.observe(card);
    });

});

// Adicione este CSS extra ao seu arquivo style.css para os efeitos do JS

/*
.main-header.scrolled {
    background-color: #1e1e1e;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.product-card {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.product-card.visible {
    opacity: 1;
    transform: translateY(0);
}
*/