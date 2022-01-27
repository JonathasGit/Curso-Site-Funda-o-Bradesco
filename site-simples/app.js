const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme') //Para fazer funcionar o tema escuro
    
    /*Aqui faz o texto do botão mudar, conforme muda o tema*/
    var classNome = document.body.className;
if(classNome =="light-theme") {
    this.textContent = "Dark";
} else {
    this.textContent = "Light";
}
});

