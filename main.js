
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

setInterval(changeBk, 3000)