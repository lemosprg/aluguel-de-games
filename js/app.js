function alterarStatus(id){
    let botaoClicado = document.getElementById(`game-${id}`);
    let imagemGame = botaoClicado.querySelector('.dashboard__item__img');
    let botao = botaoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = botaoClicado.querySelector('.dashboard__item__name');

    if (imagemGame.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo "${nomeJogo.textContent}"?`)){
            imagemGame.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        imagemGame.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}