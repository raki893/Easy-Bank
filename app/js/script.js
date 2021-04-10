const btnhamburger = document.querySelector('#btnhamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeELems = document.querySelectorAll('.has-fade');


btnhamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){      // Close menu
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeELems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }
    else {      // Open menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeELems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });    
    }
});