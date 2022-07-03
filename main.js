//changing the background randomly
function changeBk() {

    const images = [
        'url("bkimages/1.jpg")',
        'url("bkimages/2.jpg")',
        'url("bkimages/3.jpg")',
        'url("bkimages/4.jpg")',
        'url("bkimages/5.jpg")',
    ]

    const main = document.querySelector('main');
    const bk = images[Math.floor(Math.random() * images.length)];
    main.style.backgroundImage = bk;


}

setInterval(changeBk, 3000);



// adding the dragable scrolling on the .gallery section
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;

})
slider.addEventListener('mouseleave',() => {
    isDown = false;
})
slider.addEventListener('mouseup',() => {
    isDown = false;
})
slider.addEventListener('mousemove' ,(e) => {
    if(!isDown) return; //stop the function from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;

})


