document.addEventListener('DOMContentLoaded', () => {
    
    
    const burger = document.querySelector('.burger');
    const burger__item = document.querySelectorAll('.burger__item')
    const navbar__list = document.querySelector('.navbar__list')
    const navbar__lang = document.querySelector('.navbar__lang')

    burger.addEventListener('click', () => {
        burger__item.forEach(item => {
            item.classList.toggle('burger__item_active');
        })
        navbar__list.classList.toggle('navbar__list_active');
        navbar__lang.classList.toggle('navbar__lang_active');
    })
    const video = document.getElementsByTagName('video')[0];
    video.addEventListener('canplay', () => {
        video.play();
    })
})