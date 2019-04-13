// при нажатті на один блок всі неактивні він активний

$(function hideInfo(){
    $('.question__row-item').click(function(){
        if ($(this).parent('div').children('div .question__row-item-big').hasClass('hide')) {

            $('.question__row-item').removeClass('row-item-active');
            $('.question__row-item-big').addClass('hide').animate({height: '0', fontSize: '0', opacity: '0'},
                {
                    duration:600,
                    queue:false
                });
            $(this).addClass('row-item-active');
            $('.question__polygon-wrap').children('div').addClass('question__polygon-de-active').removeClass('question__polygon-active');
            $(this).children('div .question__polygon-wrap').children('div').addClass('question__polygon-active').removeClass('question__polygon-de-active');
            $(this).parent('div').children('div .question__row-item-big').removeClass('hide').animate({height: '100%',fontSize: '1.5rem',opacity: '1'},
                {
                    duration:600,
                    queue:false
                });
            return false;
        }
        else
        {
            $('.question__polygon-wrap').children('div').addClass('question__polygon-de-active').removeClass('question__polygon-active');
            $(this).parent('div').children('div .question__row-item-big').animate({height: '0',fontSize: '0',opacity: '0'},
                {
                    duration:600,
                    queue:false
                }).addClass('hide');
            $(this).removeClass('row-item-active');
            return false;
            }
    });
});