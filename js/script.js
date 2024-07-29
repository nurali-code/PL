
$('.btn__menu').on('click', function () { $('.header .nav, .btn__menu, body').toggleClass('is_active'); })
$('.nav__link').on('click', function () { $('.header .nav, .btn__menu, body').removeClass('is_active'); })

function hideModals() {
    $('.modal').fadeOut();
    $('body').removeClass('active');
};

$(function () {
    function showModal(id) {
        $('body').addClass('active');
        $(id).addClass('active').fadeIn(300);
    }
    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal-close').on('click', () => { hideModals(); });
    $(document).on('click', function (e) {
        if (!(($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.btn').length) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('modal-content'))
        )) { hideModals(); }
    });
});

$('.main-slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 9,
    centerPadding: '0',
    slidesToScroll: 1,
});

$('.galery-slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    touchThreshold: 9,
    centerPadding: '0',
    slidesToScroll: 1,
});

$('.locate-slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    centerMode: true,
    touchThreshold: 9,
    fade: true,
    centerPadding: '0',
    slidesToScroll: 1,
    asNavFor: '.locate-navbar',
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                centerPadding: '0px',
            }
        }
    ]
});

$('.locate-navbar').slick({
    vertical: true,
    infinite: false,
    draggable: true,
    swipeToSlide: () => {
        $('.locate-nav').lenght >= 4 ? ret = true : ret = false;
        return ret;
    },
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.locate-slider',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                slidesToShow: 4,
                centerPadding: '0px',
            }
        }
    ]
});


$('.dom-slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    centerMode: true,
    touchThreshold: 9,
    fade: true,
    centerPadding: '0',
    slidesToScroll: 1,
    asNavFor: '.dom-navbar',
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                centerPadding: '0px',
            }
        }
    ]
});

$('.dom-navbar').slick({
    vertical: true,
    infinite: false,
    draggable: true,
    swipeToSlide: () => {
        $('.dom-nav').lenght >= 3 ? ret = true : ret = false;
        return ret;
    },
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.dom-slider',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                swipeToSlide: () => {
                    $('.dom-nav').lenght >= 4 ? ret = true : ret = false;
                    return ret;
                },
                vertical: false,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                swipeToSlide: () => {
                    $('.dom-nav').lenght >= 3 ? ret = true : ret = false;
                    return ret;
                },
                vertical: false,
            }
        }
    ]
});
