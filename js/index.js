const navMobileBtn = document.querySelector('.navMobileBtn');
const navUl = document.querySelector('.nav ul');


navMobileBtn.addEventListener('click', navClickHandler);
navUl.addEventListener('click', navClickHandler);
function navClickHandler(){
    navUl.classList.toggle('open');

}

