function toggleImage(img) {
    var allImages = document.querySelectorAll('.img-container img');
    for (var i = 0; i < allImages.length; i++) {
        if (allImages[i] === img) {
            img.classList.remove('grayed');
        } else {
            allImages[i].classList.add('grayed');
        }
    }
}

function trazerParaFrente(img) {
    var allImages = document.querySelectorAll('.img-container img');
    for (var i = 0; i < allImages.length; i++) {
        allImages[i].classList.remove('imagem-em-frente');
    }
    img.classList.add("imagem-em-frente");
}