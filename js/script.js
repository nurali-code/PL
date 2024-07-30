
$('.btn__menu').on('click', function () { $('.header .nav, .btn__menu, body').toggleClass('is_active'); })
$('.nav__link').on('click', function () { $('.header .nav, .btn__menu, body').removeClass('is_active'); })

$('input[name="uphone"]').inputmask({ "mask": "+7-999-999-99-99" });


$("form").submit(function () {
    $('form .btn').attr('disabled', 'disabled');
    var sender = "../smart.php";
    $.ajax({
        type: "POST",
        method: 'POST',
        url: sender,
        data: $(this).serialize(),
        success: function (response) {
            console.log(response);
            $('form .btn').removeAttr('disabled');
            $('form').trigger('reset');
            $('.modal').fadeOut();
            alert('Спасибо, за заявку, ожидайте с вами свяжется специалист');
        }
    });
    return false;
});

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
            ($(e.target).hasClass('rel')) ||
            ($(e.target).hasClass('modal-content'))
        )) { hideModals(); }
    });
});

$('.galery-slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2200,
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
    autoplay: true,
    autoplaySpeed: 3100,
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
    autoplay: true,
    autoplaySpeed: 3000,
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
