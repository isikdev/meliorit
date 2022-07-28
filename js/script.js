$('.models__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [{
            breakpoint: 920,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$(document).ready(function() {
    slides();
    $(window).resize(function() { // проверка размеров вьюпорта брузера "на лету"
        slides();
    })
});
$('.question__head').click(function() {
    $(this).toggleClass('active');
    $(this).parent().find('.arrow').toggleClass('arrow-animate');
    $(this).parent().find('.question__body').slideToggle(280);
});
let menu = $('.menu');
$('.btn').on("click", function() {
    menu.toggleClass('menu-active');
});

$('#modalbox-cart, #bg_layer').hide();
$('.cart-btn').click(function() {
    $('#modalbox-cart, #bg_layer').show(100);
});

$('.cart-btn-close').click(function() {
    $('#modalbox-cart, #bg_layer').hide(100);
});
new WOW().init();