const homeTextContainerP = document.querySelectorAll('.textContainer p');

const p1 = homeTextContainerP[0];
const p2 = homeTextContainerP[1];

window.onload = ()=>{
    p1.classList.toggle('horizontalMove');
    p2.classList.toggle('horizontalMove');
}

window.onscroll=()=>{
    p1.classList.toggle('horizontalMove');
    p2.classList.toggle('horizontalMove');
}
