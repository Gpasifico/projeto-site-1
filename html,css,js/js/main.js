
// declarando variaveis
let btnContact = document.querySelector('.gp-btn-contact');

// preloader




//abrindo e fechando informações de contato


window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.gp-preloader');
    pagePreloader.classList.add('gp-fade-out');
});
btnContact.addEventListener('click', function () {
    let boxContact = document.querySelector('.gp-contact-info');

    boxContact.classList.toggle('gp-is-open');
    this.classList.toggle('gp-change-icon');

});