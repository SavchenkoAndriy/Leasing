import './modules/slyde-car.js';
import './modules/calculate.js';
import './modules/video-slyde.js';
import './modules/question.js';
import './modules/navigation.js';
import './modules/info.js';
import './modules/footer.js';

$(function(){
    // робим маски плагіном
    $('#user_phone-one').mask('+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9' , {autoclear: false});
    $('#user_phone-two').mask('+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9' , {autoclear: false});
    $('#text').mask({autoclear: false});
    $('#text-one').mask({autoclear: false});
});