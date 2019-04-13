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

