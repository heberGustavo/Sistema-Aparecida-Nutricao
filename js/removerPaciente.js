var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function (event) {
    //var lugarClicado = event.target;
    //var paiDoClick = lugarClicado.parentNode.classList.add('fadeOut');

    event.target.parentNode.classList.add('fadeOut');
    setTimeout(() => {
        //Remover TR
        event.target.parentNode.remove();
    }, 500);
})