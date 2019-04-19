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