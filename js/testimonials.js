const testimonialCards = document.querySelectorAll('.testimonialCard');
const testimonialsUl = document.querySelector('.testimonialsUl');
const btnLeft = document.querySelector('.testimonials .left');
const btnRight = document.querySelector('.testimonials .right');
const ratingStars = document.querySelectorAll('.ratingStars i');
const feedbackContainer = document.querySelector('.feedbackContainer');
const feedbackForm = document.querySelector('#feedbackForm');
const feedback = document.querySelector('#feedback');
const feedbackName = document.querySelector('#name');

const tCardLength = testimonialCards.length;
const tCardWidth = testimonialCards[0].offsetWidth + 20;
let currentCardID = Math.ceil(tCardLength / 2);
let startTime = '' // touch start time
let startPositionX = '' // touch start mouseX
let startPositionY = '' // touch start mouseY
let rating = 5;

testimonialCards.forEach((card) => {
    moveCards(card);
    card.addEventListener('click', () => {
        currentCardID = card.id;
        testimonialCards.forEach(card => {
            moveCards(card);
        })
    });
});

btnLeft.addEventListener('click', swipeLeft);
btnRight.addEventListener('click', swipeRight);
testimonialsUl.addEventListener('touchstart', (e) => {
    startTime = new Date().getTime();
    startPositionX = e.touches[0].clientX;
    startPositionY = e.touches[0].clientY;
})
testimonialsUl.addEventListener('touchend', (e) => {
    const endTime = new Date().getTime();
    const endPositionX = e.changedTouches[0].clientX;
    const endPositionY = e.changedTouches[0].clientY;
    const timeDiff = endTime - startTime;
    const XDiff = endPositionX - startPositionX;
    const YDiff = endPositionY - startPositionY
    //finger swipe x-direction>40 and y-direction<100 and time<500ms
    if (Math.abs(XDiff) > 40 && Math.abs(YDiff) < 100 && timeDiff < 500) {
        if (XDiff < 0) {//swipe right
            swipeRight();
        } else {//swipe left
            swipeLeft();
        }
    }
})
ratingStars.forEach((i, index) => {
    i.addEventListener('click', () => {
        rating = index;
        ratingStars.forEach((i, n) => {
            if (!i.classList.contains('active')) {
                i.classList.add('active');
            }
            if (n > index) {
                i.classList.remove('active');
            }
        })
    })
    i.addEventListener('mouseover', () => {
        ratingStars.forEach((i, n) => {
            if (!i.classList.contains('hover')) {
                i.classList.add('hover');
            }
            if (n > index) {
                i.classList.remove('hover');
            }
        })
    })
    i.addEventListener('mouseout', () => {
        ratingStars.forEach((i) => {
            i.classList.remove('hover');
        })
    })
})
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    feedbackContainer.innerHTML = `
        <i class="fa fa-heart"></i>
        <h1>Thank You!<br>${feedbackName.value}</h1>
        <strong>Feedback: ${rating} stars</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})


//functions definition
function swipeLeft() {
    if (currentCardID > 1) {
        currentCardID--;
        testimonialCards.forEach(card => {
            moveCards(card);
        })
    }
}
function swipeRight() {
    if (currentCardID < tCardLength) {
        currentCardID++;
        testimonialCards.forEach(card => {
            moveCards(card);
        })
    }
}
function moveCards(card) {
    let times = 0.5 + (currentCardID - card.id);
    card.style.left = `calc(50% - ${tCardWidth * times}px + 10px)`;
    if (card.id != currentCardID) {
        card.style.opacity = 1 - 0.45 * Math.abs(card.id - currentCardID);
    } else {
        card.style.opacity = 1
    }
}