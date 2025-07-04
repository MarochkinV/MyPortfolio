$(document).ready(function () {
    // Обработчик клика по бургеру
    $('.block_flip-burger').on('click', function () {
        // Переворачиваем бургер
        $('.flip-burger-inner').toggleClass('flipped');

        // Открываем/закрываем меню
        $('.mobile-menu').toggleClass('open');

        // Блокируем/разблокируем скролл страницы
        $('body').toggleClass('no-scroll');
    });

    // Закрытие меню при клике на ссылку
    $('.mobile-nav-link, .mobile-button').on('click', function () {
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


//обработчик ссылки читать больше
    $('.read-more').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.about_me__text').addClass('expanded');
    });

    $('.read-less').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.about_me__text').removeClass('expanded');
    });


    //Реализация скрытых проектов


    $('.open-project a').click(function (e) {
        e.preventDefault();

        if ($(this).text() === 'Показать больше проектов') {
            $('.added-content')
                .css('display', 'block')
                .delay(50) // небольшая задержка перед анимацией
                .queue(function () {
                    $(this).addClass('visible').dequeue();
                });
            $('.open-project').addClass('expanded');

            // Плавная прокрутка к новому контенту
            $('html, body').animate({
                scrollTop: $('.added-content').offset().top - 100
            }, 800);
        } else {
            $('.added-content').removeClass('visible');
            setTimeout(function () {
                $('.added-content').css('display', 'none');
            }, 500); // Ждем завершения анимации
            $('.open-project').removeClass('expanded');
        }
    });


});