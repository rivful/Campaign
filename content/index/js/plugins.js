
//*********************************************
//  RESPONSIVE HOME PAGE BEFORE WINDOW LOAD
//*********************************************

    // Check android devices OS system if they are older than 4.4
    var ua = navigator.userAgent;
    if( ua.indexOf("Android") >= 0 ) {
        var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)),
            wHeight = $(window).height();
        if (androidversion < 4.9) {
            $(".home .right-animation").css({"height": wHeight + "px", "width": wHeight + "px"});
        }
    }

// Start Window Load Function
$(window).on('load', function() {

    'use strict';


        if ($('#filters').exists()){
            //Show and hide extra Navigation
            $(window).scroll(function(){ 
                var nowPos = $(window).scrollTop(),
                    wheight = $(window).height() / 2,
                    demoP = $('#demos').offset().top,
                    demoH = $('#demos').height();
                if (nowPos > demoP - wheight && nowPos < demoP + demoH - wheight ) {
                    $('#filters').addClass('showing');
                } else  {
                    $('#filters').removeClass('showing');
                }
            });
        }


        $(".cbp-filter-item").one("click", function(){
            $(".cbp-caption-defaultWrap").removeClass("cbp-lazyload");
            $(".animated").removeClass("animated fadeInUp");
        });

        $(".cbp-filter-item").on("click", function(){
            setTimeout(function() {
                $('html, body').stop().animate({ scrollTop : $("#demo-layouts").offset().top }, 600, 'easeInOutExpo');
            }, 0);
        });



        $('.variations-of-item').on('click', function(e){
            e.preventDefault();
            var location = $(this).data('location');
            window.open(location,'_blank');
        });

// End Function
});


(function($, window, document, undefined) {
    'use strict';
    

    //*********************************************
    //  DEMOS
    //*********************************************

        $('#demos').cubeportfolio({
            filters: '#filters',
            loadMoreAction: 'click',
            layoutMode: 'masonry',
            mediaQueries: [{
                width: 1400,
                cols: 4
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 640,
                cols: 3,
                options: {
                    caption: '',
                    gapHorizontal: 25,
                    gapVertical: 15,
                }
            }, {
                width: 400,
                cols: 2,
                options: {
                    caption: '',
                    gapHorizontal: 25,
                    gapVertical: 15,
                }
            }, {
                width: 300,
                cols: 1,
                options: {
                    caption: '',
                    gapHorizontal: 25,
                    gapVertical: 15,
                }
            }],
            defaultFilter: '*',
            animationType: 'quicksand',
            gapHorizontal: 45,
            gapVertical: 35,
            gridAdjustment: 'responsive',
            caption: 'none',
            displayType: 'none',
            displayTypeSpeed: 0,
        });




    //*********************************************
    //  VARIATIONS
    //*********************************************

        $('#variations').cubeportfolio({
            loadMoreAction: 'click',
            layoutMode: 'masonry',
            mediaQueries: [{
                width: 1500,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 800,
                cols: 2
            }, {
                width: 640,
                cols: 2
            }, {
                width: 480,
                cols: 1,
                gapHorizontal: 0,
                gapVertical: 0
            }],
            defaultFilter: '*',
            animationType: 'quicksand',
            gapHorizontal: 45,
            gapVertical: 25,
            gridAdjustment: 'responsive',
            caption: 'none',
            displayType: 'sequentially',
            displayTypeSpeed: 0,
        });


// End Function
})(jQuery, window, document);
