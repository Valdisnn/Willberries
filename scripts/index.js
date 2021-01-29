const bar = document.querySelector('.progress')

const barFu = e => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const percent = winScroll / winHeight * 100

    bar.style.width = percent + '%'
}

const swiper = new Swiper('.swiper-container', {
    loop: true,

    autoplay: {
        delay: 3000,
    },

    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

document.addEventListener('scroll', barFu)
