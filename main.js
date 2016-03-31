/**
 * Created by Guzel on 01.03.2016.
 */
$(function(){//выпадающее меню
    var $header = $(".header");
    $(".header__menu-icon").on("click", function(e){//раскрытие верхнего меню
        e.stopPropagation();
        $header.toggleClass('open-menu');
    });
    $(document).on("click", function(){//cкрытие верхнего меню
        $header.removeClass('open-menu');
    });
    $(".dropdown").on("click", function(e){//чтобы при нажатии на dropdown он не закрывалс€ (т.к. удал€етс€ класс open-menu)
        e.stopPropagation();
    });
});

$(function(){//форма, цвет label
   var $input = $(".form-item input");
    var $formItem = $(".form-item");
    $input.on("focus", function(){
        $formItem.has(this).find(".label").addClass('label-active');
    })
    .on("blur", function(){
            $formItem.has(this).find("label").removeClass('label-active');
    });
});

$(function(){//форма, textarea
    var $message = $('#message');
    var $textarea = $(".form-item textarea");
    $textarea.on("input", function(){
        $message.css('display','block');
        if ($textarea.val() == "") {
            //console.log('sss');
            $message.css('display','none');
        }
    });
});

$(function(){//faq-component
    $(".faq__question .btn").on("click", function() {
        $(this).toggleClass("open-faq");
        $(".faq__list-item").has(this).find(".faq__answer").slideToggle(500);
    });
});

$(function(){//скролл
    var $footer = $('.footer');
    var $btnUp = $('#btn-up');
    $(window).on("scroll", function() {
        if (($footer.offset().top) < (window.innerHeight+$(window).scrollTop())) {//расположение кнопки по вертикали отн-но футера
            $btnUp.addClass('btn-up-absolute');
        } else {
            $btnUp.removeClass('btn-up-absolute');
        }
        if ($(this).scrollTop() > 3000) {//скролл наверх, по€вление и исчезновение кнопки
            $btnUp.css('display','block');
        } else {
            $btnUp.css('display','none');
        }
    })
    .on("resize",scrollCalculateRight)//расположение кнопки по горизонтали
        .trigger("resize");
    function scrollCalculateRight(){
        var $page_w = ($(window).width()-$(".container").width())/2;
        $btnUp.css('right',$page_w);
    }
    $btnUp.on("click", function(){//скроллинг
        $('html, body').animate({scrollTop: 0},1000);
    });

});









