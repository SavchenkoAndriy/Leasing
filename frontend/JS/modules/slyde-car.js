// обробляєм нажаття кожнох кнопки і робим відпоовідні дії (все по шаблону першої кнопки)
$(function btnOne(){
    $('.slide-btn__one').click(function(){
        // кнопка більша всі остальні менші, картінка їде на відповідну зону
        $('.slide-btn__three , .slide-btn__two , .slide-btn__five , .slide-btn__four, .slide-btn__six').css({'width' : '6vh', 'height' : '6vh'});
        $('.slide-btn__one').css({'width' : '7vh', 'height' : '7vh'});
        $('.slide-car__img-active').css({'marginLeft': '0'});
        $('.slide-car__img-active').animate({marginLeft: '3%'}, 500);
        //текст під кнопкой робим повсюду неактивним, всі до відповідної кнопки активним
        $('.text__wrap').children('div').addClass('text__de-active').removeClass('text__active');
        $('.h-text-one').addClass('text__active').removeClass('text__de-active');
        // на всіх прибираєм картінки в кнопці, всім до відповідної кнопки добавляєм
        $('.btn__wrap').children('button').children('img').addClass('btn-img__de-active').removeClass('btn-img__active');
        $('.slide-btn__one').children('img').addClass('btn-img__active').removeClass('btn-img__de-active');
        // на всі добавляєм цифру в кнопці, на всіх до відповідної кнопки прибираєм цифру
        $('.btn__wrap').children('button').children('a').addClass('btn-text__active').removeClass('btn-text__de-active');
        $('.slide-btn__one').children('a').addClass('btn-text__de-active').removeClass('btn-text__active');
        // на всих прибираєм білий фон і контур, всі до відповідної кнопки добавляєм
        $('.btn__wrap button').addClass('btn__de-active').removeClass('btn__active');
        $('.slide-btn__one').addClass('btn__active').removeClass('btn__de-active');
        // трикутники під текстом повсюду прибираєм. добавляєм на відповідному
        $('.slide__wrap').children('div').removeClass('slide-car__active').addClass('slide-car__de-active');
        $('.slide__wrap').children('div').children('div').removeClass('slide-car-pointer__active').addClass('slide-car-pointer__de-active');
        $('.slide-car-one').removeClass('slide-car__de-active').addClass('slide-car__active');
        $('.slide-car-one').children('div').removeClass('slide-car-pointer__de-active').addClass('slide-car-pointer__active');
        // текст під ліняєю весь прибираєм. добавляєм текст потрібного блоку
        $('.leasing-work-car__text').children('div').addClass('car_text__de-active').removeClass('car_text__active');
        $('.text_one').addClass('car_text__active').removeClass('car_text__de-active');
        return false;
    });
});

$(function btnTwo(){
    $('.slide-btn__two').click(function(){
        $('.slide-btn__one , .slide-btn__three , .slide-btn__five , .slide-btn__four, .slide-btn__six').css({'width' : '6vh', 'height' : '6vh'});
        $('.slide-btn__two').css({'width' : '7vh', 'height' : '7vh'});
        $('.slide-car__img-active').css({'marginLeft': '3%'});
        $('.slide-car__img-active').animate({marginLeft: '17%'}, 500);
        $('.text__wrap').children('div').addClass('text__de-active').removeClass('text__active');
        $('.h-text-one , .h-text-two').addClass('text__active').removeClass('text__de-active');
        $('.btn__wrap').children('button').children('img').addClass('btn-img__de-active').removeClass('btn-img__active');
        $('.slide-btn__one , .slide-btn__two').children('img').addClass('btn-img__active').removeClass('btn-img__de-active');
        $('.btn__wrap').children('button').children('a').addClass('btn-text__active').removeClass('btn-text__de-active');
        $('.slide-btn__one , .slide-btn__two').children('a').addClass('btn-text__de-active').removeClass('btn-text__active');
        $('.btn__wrap button').addClass('btn__de-active').removeClass('btn__active');
        $('.slide-btn__one , .slide-btn__two').addClass('btn__active').removeClass('btn__de-active');
        $('.slide__wrap').children('div').removeClass('slide-car__active').addClass('slide-car__de-active');
        $('.slide__wrap').children('div').children('div').removeClass('slide-car-pointer__active').addClass('slide-car-pointer__de-active');
        $('.slide-car-two').removeClass('slide-car__de-active').addClass('slide-car__active');
        $('.slide-car-two').children('div').removeClass('slide-car-pointer__de-active').addClass('slide-car-pointer__active');
        $('.leasing-work-car__text').children('div').addClass('car_text__de-active').removeClass('car_text__active');
        $('.text_two').addClass('car_text__active').removeClass('car_text__de-active');
        return false;
    });
});

$(function btnThree(){
    $('.slide-btn__three').click(function(){
        $('.slide-btn__one , .slide-btn__two , .slide-btn__five , .slide-btn__four, .slide-btn__six').css({'width' : '6vh', 'height' : '6vh'});
        $('.slide-btn__three').css({'width' : '7vh', 'height' : '7vh'});
        $('.slide-car__img-active').css({'marginLeft': '17%'});
        $('.slide-car__img-active').animate({marginLeft: '33%'}, 500);
        $('.text__wrap').children('div').addClass('text__de-active').removeClass('text__active');
        $('.h-text-one , .h-text-two , .h-text-three').addClass('text__active').removeClass('text__de-active');
        $('.btn__wrap').children('button').children('img').addClass('btn-img__de-active').removeClass('btn-img__active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three').children('img').addClass('btn-img__active').removeClass('btn-img__de-active');
        $('.btn__wrap').children('button').children('a').addClass('btn-text__active').removeClass('btn-text__de-active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three').children('a').addClass('btn-text__de-active').removeClass('btn-text__active');
        $('.btn__wrap button').addClass('btn__de-active').removeClass('btn__active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three').addClass('btn__active').removeClass('btn__de-active');
        $('.slide__wrap').children('div').removeClass('slide-car__active').addClass('slide-car__de-active');
        $('.slide__wrap').children('div').children('div').removeClass('slide-car-pointer__active').addClass('slide-car-pointer__de-active');
        $('.slide-car-three').removeClass('slide-car__de-active').addClass('slide-car__active');
        $('.slide-car-three').children('div').removeClass('slide-car-pointer__de-active').addClass('slide-car-pointer__active');
        $('.leasing-work-car__text').children('div').addClass('car_text__de-active').removeClass('car_text__active');
        $('.text_three').addClass('car_text__active').removeClass('car_text__de-active');
        return false;
    });
});

$(function btnFour(){
    $('.slide-btn__four').click(function(){
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__five, .slide-btn__six').css({'width' : '6vh', 'height' : '6vh'});
        $('.slide-btn__four').css({'width' : '7vh', 'height' : '7vh'});
        $('.slide-car__img-active').css({'marginLeft': '33%'});
        $('.slide-car__img-active').animate({marginLeft: '47%'}, 500);
        $('.text__wrap').children('div').addClass('text__de-active').removeClass('text__active');
        $('.h-text-one , .h-text-two , .h-text-three , .h-text-four').addClass('text__active').removeClass('text__de-active');
        $('.btn__wrap').children('button').children('img').addClass('btn-img__de-active').removeClass('btn-img__active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four').children('img').addClass('btn-img__active').removeClass('btn-img__de-active');
        $('.btn__wrap').children('button').children('a').addClass('btn-text__active').removeClass('btn-text__de-active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four').children('a').addClass('btn-text__de-active').removeClass('btn-text__active');
        $('.btn__wrap button').addClass('btn__de-active').removeClass('btn__active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four').addClass('btn__active').removeClass('btn__de-active');
        $('.slide__wrap').children('div').removeClass('slide-car__active').addClass('slide-car__de-active');
        $('.slide__wrap').children('div').children('div').removeClass('slide-car-pointer__active').addClass('slide-car-pointer__de-active');
        $('.slide-car-four').removeClass('slide-car__de-active').addClass('slide-car__active');
        $('.slide-car-four').children('div').removeClass('slide-car-pointer__de-active').addClass('slide-car-pointer__active');
        $('.leasing-work-car__text').children('div').addClass('car_text__de-active').removeClass('car_text__active');
        $('.text_four').addClass('car_text__active').removeClass('car_text__de-active');
        return false;
    });
});

$(function btnFive(){
    $('.slide-btn__five').click(function(){
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four, .slide-btn__six').css({'width' : '6vh', 'height' : '6vh'});
        $('.slide-btn__five').css({'width' : '7vh', 'height' : '7vh'});
        $('.slide-car__img-active').css({'marginLeft': '47%'});
        $('.slide-car__img-active').animate({marginLeft: '63%'}, 500);
        $('.text__wrap').children('div').addClass('text__de-active').removeClass('text__active');
        $('.h-text-one , .h-text-two , .h-text-three , .h-text-four , .h-text-five').addClass('text__active').removeClass('text__de-active');
        $('.btn__wrap').children('button').children('img').addClass('btn-img__de-active').removeClass('btn-img__active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four , .slide-btn__five').children('img').addClass('btn-img__active').removeClass('btn-img__de-active');
        $('.btn__wrap').children('button').children('a').addClass('btn-text__active').removeClass('btn-text__de-active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four , .slide-btn__five ').children('a').addClass('btn-text__de-active').removeClass('btn-text__active');
        $('.btn__wrap button').addClass('btn__de-active').removeClass('btn__active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four , .slide-btn__five').addClass('btn__active').removeClass('btn__de-active');
        $('.slide__wrap').children('div').removeClass('slide-car__active').addClass('slide-car__de-active');
        $('.slide__wrap').children('div').children('div').removeClass('slide-car-pointer__active').addClass('slide-car-pointer__de-active');
        $('.slide-car-five').removeClass('slide-car__de-active').addClass('slide-car__active');
        $('.slide-car-five').children('div').removeClass('slide-car-pointer__de-active').addClass('slide-car-pointer__active');
        $('.leasing-work-car__text').children('div').addClass('car_text__de-active').removeClass('car_text__active');
        $('.text_five').addClass('car_text__active').removeClass('car_text__de-active');
        return false;
    });
});

$(function btnSix(){
    $('.slide-btn__six').click(function(){
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three, .slide-btn__four , .slide-btn__five').css({'width' : '6vh', 'height' : '6vh'});
        $('.slide-btn__six').css({'width' : '7vh', 'height' : '7vh'});
        $('.slide-car__img-active').css({'marginLeft': '63%'});
        $('.slide-car__img-active').animate({marginLeft: '77%'}, 500);
        $('.text__wrap').children('div').addClass('text__de-active').removeClass('text__active');
        $('.h-text-one , .h-text-two , .h-text-three , .h-text-four , .h-text-five , .h-text-six').addClass('text__active').removeClass('text__de-active');
        $('.btn__wrap').children('button').children('img').addClass('btn-img__de-active').removeClass('btn-img__active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four , .slide-btn__five , .slide-btn__six').children('img').addClass('btn-img__active').removeClass('btn-img__de-active');
        $('.btn__wrap').children('button').children('a').addClass('btn-text__active').removeClass('btn-text__de-active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four , .slide-btn__five , .slide-btn__six').children('a').addClass('btn-text__de-active').removeClass('btn-text__active');
        $('.btn__wrap button').addClass('btn__de-active').removeClass('btn__active');
        $('.slide-btn__one , .slide-btn__two , .slide-btn__three , .slide-btn__four , .slide-btn__five , .slide-btn__six').addClass('btn__active').removeClass('btn__de-active');
        $('.slide__wrap').children('div').removeClass('slide-car__active').addClass('slide-car__de-active');
        $('.slide__wrap').children('div').children('div').removeClass('slide-car-pointer__active').addClass('slide-car-pointer__de-active');
        $('.slide-car-six').removeClass('slide-car__de-active').addClass('slide-car__active');
        $('.slide-car-six').children('div').removeClass('slide-car-pointer__de-active').addClass('slide-car-pointer__active');
        $('.leasing-work-car__text').children('div').addClass('car_text__de-active').removeClass('car_text__active');
        $('.text_six').addClass('car_text__active').removeClass('car_text__de-active');
        return false;
    });
});