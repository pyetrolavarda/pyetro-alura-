const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        
        atual.classList.remove('ativo');
        
        const proximoElemento = document.getElementById(proximoPassoId);
        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        }
    });
});
