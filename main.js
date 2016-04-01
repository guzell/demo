/**
 * Created by Guzel on 01.03.2016.
 */
//выпадающее меню
$(function(){
    var $header = $(".header");
    $(".header__menu-icon").on("click", function(e){
        e.stopPropagation();
        $header.toggleClass('open-menu');
    });
    $(document).on("click", function(){
        $header.removeClass('open-menu');
    });
    $(".dropdown").on("click", function(e){
        e.stopPropagation();
    });
});

//форма
$(function(){//label
   var $input = $(".form-item input");
    var $formItem = $(".form-item");
    $input.on("focus", function(){
        $formItem.has(this).find(".label").addClass('label-active');
    })
    .on("blur", function(){
            $formItem.has(this).find("label").removeClass('label-active');
    });
});

$(function(){//textarea
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

//faq-component
$(function(){
    $(".faq__question .btn").on("click", function() {
        $(this).toggleClass("open-faq");
        $(".faq__list-item").has(this).find(".faq__answer").slideToggle(500);
    });
});

//скролл
$(function(){
    var $footer = $('.footer');
    var $btnUp = $('#btn-up');
    $(window).on("scroll", function() {
        if (($footer.offset().top) < (window.innerHeight+$(window).scrollTop())) {//расположение по вертикали отн-но футера
            $btnUp.addClass('btn-up-absolute');
        } else {
            $btnUp.removeClass('btn-up-absolute');
        }
        if ($(this).scrollTop() > 3000) {
            $btnUp.css('display','block');
        } else {
            $btnUp.css('display','none');
        }
    })
    .on("resize",scrollCalculateRight)//расположение по горизонтали
        .trigger("resize");
    function scrollCalculateRight(){
        var $page_w = ($(window).width()-$(".container").width())/2;
        $btnUp.css('right',$page_w);
    }
    $btnUp.on("click", function(){
        $('html, body').animate({scrollTop: 0},1000);
    });

});









