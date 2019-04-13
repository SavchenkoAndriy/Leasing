$(function videoBtnOne(){
    $('.video-btn-one').click(function(){
        // всі відео робимо неактивні потрібне активне
        $('.video-slide__video-wrap').children('div').addClass('video-slide__video-de-active').removeClass('video-slide__video-active');
        $('.video-one').addClass('video-slide__video-active').removeClass('video-slide__video-de-active');
        // всі кнопки робимо неактивні потрібну активну
        $('.button_wrap').children('div').addClass('video-btn-de-active').removeClass('video-btn-active');
        $('.video-btn-one').addClass('video-btn-active').removeClass('video-btn-de-active');
        return false;
    });
});

$(function videoBtnTwo(){
    $('.video-btn-two').click(function(){
        $('.video-slide__video-wrap').children('div').addClass('video-slide__video-de-active').removeClass('video-slide__video-active');
        $('.video-two').addClass('video-slide__video-active').removeClass('video-slide__video-de-active');
        $('.button_wrap').children('div').addClass('video-btn-de-active').removeClass('video-btn-active');
        $('.video-btn-two').addClass('video-btn-active').removeClass('video-btn-de-active');
        return false;
    });
});

$(function videoBtnThree(){
    $('.video-btn-three').click(function(){
        $('.video-slide__video-wrap').children('div').addClass('video-slide__video-de-active').removeClass('video-slide__video-active');
        $('.video-three').addClass('video-slide__video-active').removeClass('video-slide__video-de-active');
        $('.button_wrap').children('div').addClass('video-btn-de-active').removeClass('video-btn-active');
        $('.video-btn-three').addClass('video-btn-active').removeClass('video-btn-de-active');
        return false;
    });
});

$(function videoBtnFour(){
    $('.video-btn-four').click(function(){
        $('.video-slide__video-wrap').children('div').addClass('video-slide__video-de-active').removeClass('video-slide__video-active');
        $('.video-four').addClass('video-slide__video-active').removeClass('video-slide__video-de-active');
        $('.button_wrap').children('div').addClass('video-btn-de-active').removeClass('video-btn-active');
        $('.video-btn-four').addClass('video-btn-active').removeClass('video-btn-de-active');
        return false;
    });
});

$(function videoBtnFive(){
    $('.video-btn-five').click(function(){
        $('.video-slide__video-wrap').children('div').addClass('video-slide__video-de-active').removeClass('video-slide__video-active');
        $('.video-five').addClass('video-slide__video-active').removeClass('video-slide__video-de-active');
        $('.button_wrap').children('div').addClass('video-btn-de-active').removeClass('video-btn-active');
        $('.video-btn-five').addClass('video-btn-active').removeClass('video-btn-de-active');
        return false;
    });
});

// право,ліво кнопки перевіряєм яке відео активне і імутуєм потрібну кнопку
$(function right(){
    $('.video-slide-right').click(function(){
        if ($('#video-btn-one').hasClass('video-btn-active')) {
            $('.video-btn-two button').trigger('click');
        }
        else
            if ($('#video-btn-two').hasClass('video-btn-active')) {
            $('.video-btn-three button').trigger('click');
        }
        else
            if ($('#video-btn-three').hasClass('video-btn-active')) {
                $('.video-btn-four button').trigger('click');
            }
        else
            if ($('#video-btn-four').hasClass('video-btn-active')) {
                $('.video-btn-five button').trigger('click');
            }
        else
            if ($('#video-btn-five').hasClass('video-btn-active')) {
                $('.video-btn-one button').trigger('click');
            }
        return false;
    });
});

$(function left(){
    $('.video-slide-left').click(function(){
        if ($('#video-btn-one').hasClass('video-btn-active')) {
            $('.video-btn-five button').trigger('click');
        }
        else
        if ($('#video-btn-two').hasClass('video-btn-active')) {
            $('.video-btn-one button').trigger('click');
        }
        else
        if ($('#video-btn-three').hasClass('video-btn-active')) {
            $('.video-btn-two button').trigger('click');
        }
        else
        if ($('#video-btn-four').hasClass('video-btn-active')) {
            $('.video-btn-three button').trigger('click');
        }
        else
        if ($('#video-btn-five').hasClass('video-btn-active')) {
            $('.video-btn-four button').trigger('click');
        }
        return false;
    });
});


