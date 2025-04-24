// $(document).ready(function() {
//     $('.flip-burger').click(function() {
//         $(this).toggleClass('flipped');
//     });
// });

$(document).ready(function() {
    // Обработчик клика по бургеру
    $('.block_flip-burger').on('click', function() {
        // Переворачиваем бургер
        $('.flip-burger-inner').toggleClass('flipped');

        // Открываем/закрываем меню
        $('.mobile-menu').toggleClass('open');

        // Блокируем/разблокируем скролл страницы
        $('body').toggleClass('no-scroll');
    });

    // Закрытие меню при клике на ссылку
    $('.mobile-nav-link, .mobile-button').on('click', function() {
        $('.flip-burger-inner').removeClass('flipped');
        $('.mobile-menu').removeClass('open');
        $('body').removeClass('no-scroll');
    });

    // Добавляем класс no-scroll в CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .no-scroll {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});