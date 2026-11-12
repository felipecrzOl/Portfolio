const botaoTema = document.getElementById('btn-tema');
const corpoPagina = document.body;

if(localStorage.getItem('tema') === 'escuro') {
    corpoPagina.classList.add('tema-escuro');
    botaoTema.textContent = 'Modo Claro';
}

botaoTema.addEventListener('click', () =>{
    corpoPagina.classList.toggle('tema-escuro');

    if(corpoPagina.classList.contains('tema-escuro')) {
        botaoTema.textContent = 'Modo Claro';
        localStorage.setItem('tema','escuro')
    } 
    
    else{
        botaoTema.textContent = 'Modo Escuro';
        localStorage.setItem('tema', 'claro')
    }
});