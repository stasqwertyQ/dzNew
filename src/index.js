document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");

    const galleryItems = document.querySelectorAll('.gallery__item');

    galleryItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const img = item.querySelector('.gallery__image');
            modal.style.display = "block";
            modalImg.src = img.dataset.source;
            captionText.innerHTML = img.alt;
        });
    });

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };
});
