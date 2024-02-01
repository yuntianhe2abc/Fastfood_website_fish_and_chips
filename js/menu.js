const menuIntroListItems = document.querySelectorAll('.menuIntroContainer li');
const menuIntroImgCovers = document.querySelectorAll('.menuIntroImgCover');
const menuPicturesWrappers = document.querySelectorAll('.menuPicturesWrapper');
const menuCardWrappers = document.querySelectorAll('.menuCardWrapper');

menuIntroListItems.forEach((li,index)=>{
    const menuIntroImgCover = menuIntroImgCovers[index];
    li.addEventListener('mouseover',()=>{
        menuIntroImgCover.classList.add('mousehover');
    })
    li.addEventListener('mouseout',()=>{
        menuIntroImgCover.classList.remove('mousehover');
    })
})


window.addEventListener('scroll', showWrappers);

showWrappers();

function showWrappers() {
    const triggerBottom = window.innerHeight / 5 * 4
    menuPicturesWrappers.forEach(i => move(i,triggerBottom));
    menuCardWrappers.forEach(i => move(i,triggerBottom));
}

function move(i,triggerBottom){
    const wrapperTop = i.getBoundingClientRect().top
    if(wrapperTop < triggerBottom) {
        i.classList.add('show')
    } else {
        i.classList.remove('show')
    }
}