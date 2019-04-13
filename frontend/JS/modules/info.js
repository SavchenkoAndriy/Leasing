// обробляєм нажаття кнопок вправо і вліво. перевіряєм чи є в першому(останньому) блоці відповідне зображення
// і відповідно зсуваєм. працює по кругу

$(function btnLeft(){
    $('.slider__btn-left').click(function () {
        if ($('.slider__body-wrap div:first-child').hasClass('img-1')) {
            $('.img-1').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').append('<div><img></div>');
            $('.slider__body-wrap div').last().addClass('slider__body-img').addClass('img-5').attr('id', 'img-5').children('img').attr('src', './img/work-5.jpg');
            $('.img-5').css('width', '0');
            $('.img-5').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div:first-child').remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div:first-child').hasClass('img-2')) {
            $('.img-2').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').append('<div><img></div>');
            $('.slider__body-wrap div').last().addClass('slider__body-img').addClass('img-6').attr('id', 'img-6').children('img').attr('src', './img/work-6.jpg');
            $('.img-6').css('width', '0');
            $('.img-6').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div:first-child').remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div:first-child').hasClass('img-3')) {
            $('.img-3').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').append('<div><img></div>');
            $('.slider__body-wrap div').last().addClass('slider__body-img').addClass('img-1').attr('id', 'img-1').children('img').attr('src', './img/work-1.jpg');
            $('.img-1').css('width', '0');
            $('.img-1').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div:first-child').remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div:first-child').hasClass('img-4')) {
            $('.img-4').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').append('<div><img></div>');
            $('.slider__body-wrap div').last().addClass('slider__body-img').addClass('img-2').attr('id', 'img-2').children('img').attr('src', './img/work-2.jpg');
            $('.img-2').css('width', '0');
            $('.img-2').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div:first-child').remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div:first-child').hasClass('img-5')) {
            $('.img-5').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').append('<div><img></div>');
            $('.slider__body-wrap div').last().addClass('slider__body-img').addClass('img-3').attr('id', 'img-3').children('img').attr('src', './img/work-3.jpg');
            $('.img-3').css('width', '0');
            $('.img-3').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div:first-child').remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div:first-child').hasClass('img-6')) {
            $('.img-6').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').append('<div><img></div>');
            $('.slider__body-wrap div').last().addClass('slider__body-img').addClass('img-4').attr('id', 'img-4').children('img').attr('src', './img/work-4.jpg');
            $('.img-4').css('width', '0');
            $('.img-4').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div:first-child').remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        return false;
    });
});


$(function btnRight(){
    $('.slider__btn-right').click(function(){
        if ($('.slider__body-wrap div').last().hasClass('img-4')) {
            $('.img-4').animate({width: '0'}, {duration: 15});
            $('.slider__body-wrap').prepend('<div><img></div>');
            $('.slider__body-wrap div').first().addClass('slider__body-img').addClass('img-6').attr('id', 'img-6').children('img').attr('src', './img/work-6.jpg');
            $('.img-6').css('width', '0');
            $('.img-6').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div').last().remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div').last().hasClass('img-5')) {
            $('.img-5').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').prepend('<div><img></div>');
            $('.slider__body-wrap div').first().addClass('slider__body-img').addClass('img-1').attr('id', 'img-1').children('img').attr('src', './img/work-1.jpg');
            $('.img-1').css('width', '0');
            $('.img-1').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div').last().remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div').last().hasClass('img-6')) {
            $('.img-6').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').prepend('<div><img></div>');
            $('.slider__body-wrap div').first().addClass('slider__body-img').addClass('img-2').attr('id', 'img-2').children('img').attr('src', './img/work-2.jpg');
            $('.img-2').css('width', '0');
            $('.img-2').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div').last().remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div').last().hasClass('img-1')) {
            $('.img-1').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').prepend('<div><img></div>');
            $('.slider__body-wrap div').first().addClass('slider__body-img').addClass('img-3').attr('id', 'img-3').children('img').attr('src', './img/work-3.jpg');
            $('.img-3').css('width', '0');
            $('.img-3').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div').last().remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div').last().hasClass('img-2')) {
            $('.img-2').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').prepend('<div><img></div>');
            $('.slider__body-wrap div').first().addClass('slider__body-img').addClass('img-4').attr('id', 'img-4').children('img').attr('src', './img/work-4.jpg');
            $('.img-4').css('width', '0');
            $('.img-4').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div').last().remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        else
        if ($('.slider__body-wrap div').last().hasClass('img-3')) {
            $('.img-3').animate({width: '0'}, {duration: 150});
            $('.slider__body-wrap').prepend('<div><img></div>');
            $('.slider__body-wrap div').first().addClass('slider__body-img').addClass('img-5').attr('id', 'img-5').children('img').attr('src', './img/work-5.jpg');
            $('.img-5').css('width', '0');
            $('.img-5').animate({width: '25%'}, {duration: 150});
            setTimeout(function () {
                $('.slider__body-wrap div').last().remove();
            }.bind('.slider__body-wrap div:first-child'), 150);
        }
        return false;
    });
});