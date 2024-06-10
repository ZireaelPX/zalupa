/// Открытие модальных окон
let photoGridBlock = document.querySelectorAll('.photo-grid-block');
let photoGridModal = document.querySelector('.photo-grid-modal');
let photoGridModalItem = document.querySelectorAll('.photo-grid-modal-item');

for (let i = 0; i < photoGridBlock.length; i++){
    photoGridBlock[i].addEventListener('click',function(){
        photoGridModal.classList.add('photo-grid-modal--show');
        photoGridModalItem[i].classList.toggle('photo-grid-modal-item--show');
    })
}


/// Закрытие модальных окон при нажатии на крестик
let gridModalClose = document.querySelectorAll('.grid-modal-close');

for (let i = 0; i < gridModalClose.length; i++) {
    gridModalClose[i].addEventListener('click',function(){
        photoGridModal.classList.remove('photo-grid-modal--show');
        photoGridModalItem[i].classList.remove('photo-grid-modal-item--show');
    })
}