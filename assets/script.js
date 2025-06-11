document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.cartao__conteudo');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('girado');
        });
    });
});
