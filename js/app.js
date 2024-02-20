function alterarStatus(id){
    let botaoClicado = document.getElementById(`game-${id}`);
    let imagemGame = botaoClicado.querySelector('.dashboard__item__img');
    let botao = botaoClicado.querySelector('.dashboard__item__button');

    if (imagemGame.classList.contains('dashboard__item__img--rented')) {
        imagemGame.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
    } else {
        imagemGame.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}