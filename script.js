const switchButton = document.getElementById('switch');
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});

// Aquí empieza el cambio de color de imagen
let blackBtn = document.getElementById("black");
let blueBtn = document.getElementById("blue");
let greenBtn = document.getElementById("green");
let orangeBtn = document.getElementById("orange");
let imgchange = document.getElementById("imgchange");

blackBtn.onclick = function () {
    imgchange.src = "./img/qr-code.png";
}
blueBtn.onclick = function () {
    imgchange.src = "./img/qr-code.png";
}
greenBtn.onclick = function () {
    imgchange.src = "./img/qr-code.png";
}
orangeBtn.onclick = function () {
    imgchange.src = "./img/qr-code.png";
}

// Página actual
let curPage = 0;
// Obtener páginas y botones
let pages = document.querySelectorAll('.form-page');
let btnPrev = document.querySelector('#btn-prev');
let btnNext = document.querySelector('#btn-next');

// Función para avanzar o retroceder, recibe 1 (avanzar) o -1 (retroceder)
function showPage(action) {
    // Página a mostrar según el valor recibido
    curPage += action;
    // Validar que la página a mostrar esté dentro de los límites
    if(curPage < 0) {
        curPage = 0;
    }
    if(curPage >= pages.length) {
        curPage = pages.length - 1;
    }
    // Recorrer para mostrar u ocultar
    pages.forEach((page, index) => {
        if(index == curPage) {
            // Es página actual, se debe mostrar
            page.classList.add('active');
        } else {
            // Las demás se van a ocultar
            page.classList.remove('active');
        }
    });
    // Habilitar o deshabilitar botones
    btnPrev.disabled = (curPage == 0);
    btnNext.disabled = (curPage == pages.length - 1);
};
// Asignar evento a botones para avanzar y retroceder
btnPrev.addEventListener('click', e => showPage(-1));
btnNext.addEventListener('click', e => showPage(1));