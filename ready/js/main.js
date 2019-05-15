/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_slyde_car_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_slyde_car_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modules_slyde_car_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_calculate_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_calculate_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__modules_calculate_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_video_slyde_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_video_slyde_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__modules_video_slyde_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_question_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_question_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__modules_question_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_navigation_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_navigation_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__modules_navigation_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_info_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_info_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__modules_info_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_footer_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_footer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__modules_footer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_office__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_office___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__modules_office__);









$(function(){
    // робим маски плагіном
    $('#user_phone-one').mask('+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9' , {autoclear: false});
    $('#user_phone-two').mask('+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9' , {autoclear: false});
    $('#user_phone-three').mask('+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9' , {autoclear: false});
    $('#text').mask({autoclear: false});
    $('#text-one').mask({autoclear: false});
    $('#text-three').mask({autoclear: false});
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// звязуєм всі поля вводу і поля виводу. при змінні одного змінюються всі.
// ПОРАХУВАТЬ ФОРМУЛИ ДЛЯ РОЗРАХУНКУ ЗНАЧЕНЬ!!!!!!

window.onload = function(){

    //  money_input початок
    var inputMoneyRange = document.getElementById('money-range');

    inputMoneyRange.oninput = function() {
        document.getElementById('money-range').innerHTML = inputMoneyRange.value;
        document.getElementById('money-text').value=this.value;
        var NumMoney = Number(this.value)/150000; // все вирахувать і переписать
        $('.input-money-range').css({'background' : '-webkit-linear-gradient(left ,#f15920 0%,#f15920 '+NumMoney+'%,#ccc '+NumMoney+'%, #ccc 100%)'});
        console.log('значення повзунка:'+NumMoney);
    };

    var inputMoneyText = document.getElementById('money-text');

    inputMoneyText.oninput = function() {
        document.getElementById('money-text').innerHTML = inputMoneyRange.value;
        document.getElementById('money-range').value=this.value;
        var NumMoney = Number(this.value)/150000; // все вирахувать і переписать
        $('.input-money-range').css({'background' : '-webkit-linear-gradient(left ,#f15920 0%,#f15920 '+NumMoney+'%,#ccc '+NumMoney+'%, #ccc 100%)'});
        console.log('значення поля вводу:'+this.value);
    };

    //  money_input кынець
    //  month_input початок

    var inputMonthRange = document.getElementById('month-range');

    inputMonthRange.oninput = function() {
        document.getElementById('month-range').innerHTML = inputMonthRange.value;
        document.getElementById('month-text').value=this.value;
        var NumMonth = Number(this.value)/60*100; // все вирахувать і переписать
        $('.input-month-range').css({'background' : '-webkit-linear-gradient(left ,#f15920 0%,#f15920 '+NumMonth+'%,#ccc '+NumMonth+'%, #ccc 100%)'});
        console.log('значення повзунка:'+NumMonth);
    };

    var inputMonthText = document.getElementById('month-text');

    inputMonthText.oninput = function() {
        document.getElementById('month-text').innerHTML = inputMonthRange.value;
        document.getElementById('month-range').value=this.value;
        var NumMonth = Number(this.value)/60*100; // все вирахувать і переписать
        $('.input-month-range').css({'background' : '-webkit-linear-gradient(left ,#8f15920 0%,#f15920 '+NumMonth+'%,#ccc '+NumMonth+'%, #ccc 100%)'});
        console.log('значення поля вводу:'+this.value);
    };

    //  month_input кынець
    // percents_input початок

    var inputPercentsRange = document.getElementById('percents-range');

    inputPercentsRange.oninput = function() {
        document.getElementById('percents-range').innerHTML = inputPercentsRange.value;
        document.getElementById('percents-text').value=this.value;
        var NumPercent = Number(this.value)/44*100; // все вирахувать і переписать
        $('.input-percents-range').css({'background' : '-webkit-linear-gradient(left ,#f15920 0%,#f15920 '+NumPercent+'%,#ccc '+NumPercent+'%, #ccc 100%)'});
        console.log('значення повзунка:'+NumPercent);
    };

    var inputPercentsText = document.getElementById('percents-text');

    inputPercentsText.oninput = function() {
        document.getElementById('percents-text').innerHTML = inputPercentsRange.value;
        document.getElementById('percents-range').value=this.value;
        console.log('значення поля вводу:'+this.value);
        var NumPercent = Number(this.value)/44*100; // все вирахувать і переписать
        $('.input-percents-range').css({'background' : '-webkit-linear-gradient(left ,#f15920 0%,#f15920 '+NumPercent+'%,#ccc '+NumPercent+'%, #ccc 100%)'});
    };

    // percents_input кінець

    var PercentText = document.getElementById('percents-text');
    var MonthText = document.getElementById('month-text');
    var MoneyText = document.getElementById('money-text');
    var PercentRange = document.getElementById('percents-range');
    var MonthRange = document.getElementById('month-range');
    var MoneyRange = document.getElementById('money-range');

    var ResultSum = document.getElementById('result_sum');
    var ResultOne = document.getElementById('result_one');
    var ResultTwo = document.getElementById('result_two');
    var ResultThree = document.getElementById('result_three');


    PercentText.addEventListener('keyup', function() {
        ResultSum.innerHTML = PercentText.value*MoneyText.value*MonthText.value;
    });
    MonthText.addEventListener('keyup', function() {
        ResultSum.innerHTML = PercentText.value*MoneyText.value*MonthText.value;
    });
    MoneyText.addEventListener('keyup', function() {
        ResultSum.innerHTML = PercentText.value*MoneyText.value*MonthText.value;
    });

    PercentRange.addEventListener('mousemove', function() {
        ResultSum.innerHTML = PercentText.value*MoneyText.value*MonthText.value;
    });
    MonthRange.addEventListener('mousemove', function() {
        ResultSum.innerHTML = PercentText.value*MoneyText.value*MonthText.value;
    });
    MoneyRange.addEventListener('mousemove', function() {
        ResultSum.innerHTML = PercentText.value*MoneyText.value*MonthText.value;
    });

    PercentRange.addEventListener('change', function() {
        ResultSum.innerHTML = PercentText.value*MoneyText.value*MonthText.value;
    });
    MonthRange.addEventListener('change', function() {
        ResultSum.innerHTML = PercentText.value*MoneyText.value*MonthText.value;
    });
    MoneyRange.addEventListener('change', function() {
        ResultSum.innerHTML = PercentText.value*MoneyText.value*MonthText.value;
    });


    MonthText.addEventListener('keyup', function() {
        ResultOne.innerHTML = MonthText.value;
    });
    MonthRange.addEventListener('change', function() {
        ResultOne.innerHTML = MonthRange.value;
    });
    MonthRange.addEventListener('mousemove', function() {
        ResultOne.innerHTML = MonthRange.value;
    });

    PercentText.addEventListener('keyup', function() {
        ResultTwo.innerHTML = PercentText.value;
    });
    PercentRange.addEventListener('change', function() {
        ResultTwo.innerHTML = PercentRange.value;
    });
    PercentRange.addEventListener('mousemove', function() {
        ResultTwo.innerHTML = PercentRange.value;
    });

    MoneyText.addEventListener('keyup', function() {
        ResultThree.innerHTML = MoneyText.value;
    });
    MoneyRange.addEventListener('change', function() {
        ResultThree.innerHTML = MoneyRange.value;
    });
    MoneyRange.addEventListener('mousemove', function() {
        ResultThree.innerHTML = MoneyRange.value;
    });
};



/***/ }),
/* 4 */
/***/ (function(module, exports) {

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




/***/ }),
/* 5 */
/***/ (function(module, exports) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */
/***/ (function(module, exports) {

$(document).ready(function(){
    $('.office__main__list p').click(function () {

        $('.office__main__list').css('z-index','0').addClass('no-clicked').removeClass('clicked').addClass('click_p');
        $('.office__main__map').css('z-index','0');
        $('.text-block').css('display','none');
        $('.info__block').css('z-index','0');
        $('.text-block').css('z-index','0');


        var kuiv = {
            name: 'Киев',
            lat: 50.401699,
            lng: 30.252512,
            address: 'Хрещатик 1',
            tel: '0909999999',
            title: 'Киеве',
            graf: 'Пн-пт с 9:00 до 18:00'
            },
            lviv = {
                name: 'Львов',
                lat: 50.401699,
                lng: 30.252512,
                address: 'Шевченка 1',
                tel: '09088888888',
                title: 'Львове',
                graf: 'Пн-пт с 9:00 до 18:00'
            },
            chernihiv = {
                name: 'Чернигов',
                lat: 50.401699,
                lng: 30.252512,
                address: 'Леси Украинки 1',
                tel: '0907777777',
                title: 'Чернигове',
                graf: 'Пн-пт с 9:00 до 18:00'
            },
            odessa = {
                name: 'Одесса',
                lat: 50.401699,
                lng: 30.252512,
                address: 'Льва Толстого 1',
                tel: '0905555555',
                title: 'Одессе',
                graf: 'Пн-пт с 9:00 до 18:00'
            },
            sumy = {
                name: 'Сумы',
                lat: 50.401699,
                lng: 30.252512,
                address: 'Космонавтов 1',
                tel: '0904444444',
                title: 'Сумах',
                graf: 'Пн-пт с 9:00 до 18:00'
        };

        if ($(this).hasClass('Kiev')) {
            initMap(kuiv.lat,kuiv.lng);
            $('.address').text(kuiv.name).append('<p class=polygon></p>');
            //$('.address').append('<p class=polygon></p>');
            $('.city__name').text('Офис в '+kuiv.title);
            $('.city__address').text(kuiv.address);
            $('.city__tel').text(kuiv.tel);
            $('.city__time').text(kuiv.graf);
        }
        else
            if ($(this).hasClass('Odessa')) {
            initMap(odessa.lat,odessa.lng);
            $('.address').text(odessa.name).append('<p class=polygon></p>');
            //$('.address').append('<p class=polygon></p>');
            $('.city__name').text('Офис в '+odessa.title);
            $('.city__address').text(odessa.address);
            $('.city__tel').text(odessa.tel);
            $('.city__time').text(odessa.graf);
        }
        else
            if ($(this).hasClass('Lviv')) {
            initMap(lviv.lat,lviv.lng);
            $('.address').text(lviv.name).append('<p class=polygon></p>');
            //$('.address').append('<p class=polygon></p>');
            $('.city__name').text('Офис в '+lviv.title);
            $('.city__address').text(lviv.address);
            $('.city__tel').text(lviv.tel);
            $('.city__time').text(lviv.graf);
        }
        else
            if ($(this).hasClass('Chernihiv')) {
            initMap(chernihiv.lat,chernihiv.lng);
            $('.address').text(chernihiv.name).append('<p class=polygon></p>');
            //$('.address').append('<p class=polygon></p>');
            $('.city__name').text('Офис в '+chernihiv.title);
            $('.city__address').text(chernihiv.address);
            $('.city__tel').text(chernihiv.tel);
            $('.city__time').text(chernihiv.graf);
        }
        else
            if ($(this).hasClass('Sumy')) {
            initMap(sumy.lat,sumy.lng);
            $('.address').text(sumy.name).append('<p class=polygon></p>');
            //$('.address').append('<p class=polygon></p>');
            $('.city__name').text('Офис в '+sumy.title);
            $('.city__address').text(sumy.address);
            $('.city__tel').text(sumy.tel);
            $('.city__time').text(sumy.graf);
            }

        var someMap,marker;

        function initMap(lat,lng) {
            someMap = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: lat,
                    lng: lng
                },
                zoom: 12
            });
            marker = new google.maps.Marker({
                position:{
                    lat: lat,
                    lng: lng,
                },
                map: someMap
            });
        }
    });

    $('.address').click(function () {
        if($('.office__main__list').hasClass('click_p'))
        {
            if ($('.office__main__list').hasClass('clicked')){
                $('.office__main__list').css('z-index','0').removeClass('clicked').addClass('no-clicked');
                $('.text-block').css('z-index','0');
                $('.office__main__map').css('z-index','4');
                $('.info__block').css('z-index','5');
            }
            else
            if ($('.office__main__list').hasClass('no-clicked')){
                $('.info__block').css('z-index','5');
                $('.text-block').css('z-index','0');
                $('.office__main__map').css('z-index','4');
                $('.office__main__list').css({
                    zIndex: '10',
                    opacity: '0.9'
                }).addClass('clicked').removeClass('no-clicked');
            }
        }
        else
        {
            if ($('.office__main__list').hasClass('clicked')){
                $('.office__main__list').css('z-index','0').removeClass('clicked').addClass('no-clicked');
                $('.text-block').css('z-index','5');
                $('.office__main__map').css('z-index','4');
                //$('.info__block').css('z-index','0');
            }
            else
            if ($('.office__main__list').hasClass('no-clicked')){
                //$('.info__block').css('z-index','5');
                $('.text-block').css('z-index','5');
                $('.office__main__map').css('z-index','4');
                $('.office__main__list').css({
                    zIndex: '10',
                    opacity: '0.9'
                }).addClass('clicked').removeClass('no-clicked');
            }
        }
    });
});

/***/ })
/******/ ]);