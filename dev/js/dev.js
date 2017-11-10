$(document).ready(function(){

    $('nav>a').click(function(){
        var href = $(this).attr('href');

        if ($(this).hasClass('active')) return false;

        $('nav>a.active').removeClass('active');
        $(this).addClass('active');

        if (href == "#home" && $('#home').hasClass('active')){            
            $('#home, nav, section.active').removeClass('active');
            return false;
        }

        if (!$('#home').hasClass('active')) {
            $('#home, nav').addClass('active');
        }

        $('section.active').removeClass('active');
        $(href).addClass('active');
        return false;
    });


});