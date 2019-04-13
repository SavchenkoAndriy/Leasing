// скролл вверх
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 150) {
            $('#scrollTop').fadeIn();
        }
        else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

// добавляєм фіксовану навігацію
$(document).ready(function(){

    var $menu = $('#navigation-hide');

    if( window.innerWidth >= 760 ){
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass('default-hide') ){
                $menu.fadeOut(0,function(){
                    $('#navigation').addClass('fixed');
                    $(this).removeClass('default-hide').addClass('fixed-hide').fadeIn(0);
                });
            }
            else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed-hide")) {
                $menu.fadeOut(0,function(){
                    $('#navigation').removeClass('fixed');
                    $(this).removeClass('fixed-hide').addClass('default-hide').fadeIn(0);
                });
            }
        });
    }
});


// скрол на нужний якорь
$(document).ready(function(){
    navigationMenu();
    $(window).bind('scroll',function(){
        navigationMenu();
    });

    $('.calculate1').click(function(){
        $('html, body').animate({scrollTop:$('#calculate').offset().top}, 1000);return false;
    });
    $('.action1').click(function(){
        $('html, body').animate({scrollTop:$('#action').offset().top}, 1000);return false;
    });
    $('.video1').click(function(){
        $('html, body').animate({scrollTop:$('#video').offset().top}, 1000);return false;
    });
    $('.leasing-work-1').click(function(){
        $('html, body').animate({scrollTop:$('#leasing-work').offset().top}, 1000);return false;
    });
    $('.question1').click(function(){
        $('html, body').animate({scrollTop:$('#question').offset().top}, 1000);return false;
    });
    $('.navigation__info1').click(function(){
        $('html, body').animate({scrollTop:$('#navigation__info').offset().top}, 1000);return false;
    });
    $('.navigation__office1').click(function(){
        $('html, body').animate({scrollTop:$('#navigation__office').offset().top}, 1000);return false;
    });

});

// рахуєм де який якорь
function navigationMenu(){

    var sectionCalculate = $('#calculate').offset().top - (($('#action').offset().top - $('#calculate').offset().top) / 10);
    var sectionAction = $('#action').offset().top - (($('#video').offset().top - $('#action').offset().top) / 10);
    var sectionVideo = $('#video').offset().top - (($('#leasing-work').offset().top - $('#video').offset().top) / 10);
    var sectionLeasingWork = $('#leasing-work').offset().top - (($('#question').offset().top - $('#leasing-work').offset().top) / 10);
    var sectionQuestion = $('#question').offset().top - (($('#navigation__info').offset().top - $('#question').offset().top) / 10);
    var sectionNavigationInfo = $('#navigation__info').offset().top - (($('#navigation__office').offset().top - $('#navigation__info').offset().top) / 10);
    var sectionNavigationOffice = $('#navigation__office').offset().top - (($('#footer').offset().top - $('#navigation__office').offset().top) / 10);
    var sectionFooter = $('#footer').offset().top - (($(document).height() - $('#footer').offset().top) / 10);

    $('.navigation__button').removeClass('active-hover');
    $('.navigation__button div a').removeClass('act');

    if($(document).scrollTop() >= sectionCalculate && $(document).scrollTop() < sectionAction){
        $('.calculate1').addClass('act').parent('div').parent('div').addClass('active-hover');
    }
    else if ($(document).scrollTop() >= sectionAction && $(document).scrollTop() < sectionVideo){
        $('.action1').addClass('act').parent('div').parent('div').addClass('active-hover');
    }
    else if ($(document).scrollTop() >= sectionVideo && $(document).scrollTop() < sectionLeasingWork){
        $('.video1').addClass('act').parent('div').parent('div').addClass('active-hover');
    }
    else if ($(document).scrollTop() >= sectionLeasingWork && $(document).scrollTop() < sectionQuestion){
        $('.leasing-work-1').addClass('act').parent('div').parent('div').addClass('active-hover');
    }
    else if ($(document).scrollTop() >= sectionQuestion && $(document).scrollTop() < sectionNavigationInfo){
        $('.question1').addClass('act').parent('div').parent('div').addClass('active-hover');
    }
    else if ($(document).scrollTop() >= sectionNavigationInfo && $(document).scrollTop() < sectionNavigationOffice){
        $('.navigation__info1').addClass('act').parent('div').parent('div').addClass('active-hover');
    }
    else if ($(document).scrollTop() >= sectionNavigationOffice && $(document).scrollTop() < sectionFooter){
        $('.navigation__office1').addClass('act').parent('div').parent('div').addClass('active-hover');
    }
}

// при перезагрузці на любій точці сайту включаєм скрол ввехр і фіксоване меню
$( document ).ready(function() {
    if($(window).scrollTop() >= 100) {
        if( window.innerWidth >= 760 ){
            $('#navigation-hide').addClass('fixed-hide').removeClass('default-hide');
            $('#navigation').addClass('fixed');
        }
    }
    if($(window).scrollTop() >= 150){
        $('#scrollTop').fadeIn();
    }
});

$(document).ready(function(){
    $('.navigation__field__wrap-mob').click(function(){
        $(this).css('display', 'none');
        $('.navigation__list-mob').css('display','flex');
    });
    $('.navigation__list-mob').click(function(){
        $(this).css('display', 'none');
        $('.navigation__field__wrap-mob').css('display','grid');
    });
});