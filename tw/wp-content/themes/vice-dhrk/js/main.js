jQuery( document ).ready(function($) {
    // TO-DO - SVG ICONS - DOWNLOAD BTN OPTION - A11Y TESTING - SWIPE SUPPORT

    //Options
    var showNav = 1;
    var keyboardNav = 1;
    var showCaption = 1;
    var loop = 1;

    //Media lightbox
    //Create overlay items
    // var $overlay = $('<div id="overlay"></div>');
    // var $lightboxMedia = $('<div class="lightbox-img"><img></div>');
    // var $image = $('<div class="lightbox-img"><img></div>');
    // var $holder = $('<div class="holder"></div>');
    // var $caption = $('<p></p>');
    // var $lightboxnav = $('<div class="lightbox-nav"></div>');
    // var $nav = $('<div class="nav"><a id="close" nohref><img src="/wp-content/themes/vice-dhrk/img/close.svg"></a><a id="prev" nohref><img src="/wp-content/themes/vice-dhrk/img/prev.svg"></a><a id="next" nohref><img src="/wp-content/themes/vice-dhrk/img/next.svg"></a></nav>');
    // var $info = $('<div class="info"></div>');
    // var glength = $('#imageGallery li').length;
    // var imageIndex, imageLocation, captionText, allowKeyboard;

    //Add overlay items to DOM
    // $('#overlay img').before('');
    // $holder.append( $lightboxMedia );
    // //$holder.append( $image );
    // $holder.append( $lightboxnav );
    // $lightboxnav.append( $nav );
    // $lightboxnav.append( $info );
    // if ( showCaption ){ $holder.append( $caption ); }
    // if ( !showNav ){ $nav.hide(); }
    // $overlay.append( $holder );
    // $("body").append( $overlay );
    // $($overlay).hide();

    //Click image link
    // $('#imageGallery li').click( function(event) {
    //     imageLocation = $(this).find('img').attr("src");

    //     // index of clicked item
    //     imageIndex = $( '#imageGallery li' ).index(this) + 1;

    //     //Image focused on
    //     $image.find("img").attr("src", imageLocation);
        
    //     //Add and remove active class on link
    //     $(this).addClass('active');
    //     $('#imageGallery li').not(this).removeClass('active');
        
    //     //顯示圖片與資訊
    //     $lightboxMedia.empty();
    //     $lightboxMedia.append($(this).find(".lightbox-media").clone());
    //     $info.empty();
    //     $info.append($(this).find(".desc").clone());

    //     allowKeyboard = 1;
    //     $overlay.show(); 
    // });

    // //Close overlay
    // $image.click(function() {
    //     allowKeyboard = 0;
    //     $($overlay).hide();
    // });

    // $overlay.click(function(e) {
    //     if(e.target != this) return;
    //     $(this).hide();
    // });

    // $('#close').click(function() {
    //     $($overlay).hide();
    // });
    // //Cycle images
    // $('#next').click(function() {
    //     //check to see if its the last image
    //     if (glength != imageIndex){
    //         $('.active').closest('li').next().find('img').trigger('click');
    //     } else if (loop == 1){
    //         $('#imageGallery li').first().find('img').trigger('click');
    //     } 
    // });

    // $("body").keydown(function(e) {
    //     if (keyboardNav == 1 && allowKeyboard == 1) {
    //         if(e.which == 37) { $('#prev').trigger("click"); }
    //         else if(e.which == 39) { $('#next').trigger("click"); }	
    //         else if(e.which == 27) { $($overlay).hide(); }	
    //     }
    // });

    // $('#prev').click(function() {
    //     //check to see if its the first image	
    //     if (imageIndex != 1){
    //         $('.active').closest('li').prev().find('img').trigger('click');	
    //     } else if (loop == 1){
    //         $('#imageGallery li').last().find('img').trigger('click');
    //     }  
    // });

    //Gamers內頁
    
    //Add overlay items to DOM
    // $('#overlay img').before('');
    // $holder.append( $lightboxMedia );
    // $holder.append( $lightboxnav );
    // $lightboxnav.append( $info );
    // if ( showCaption ){ $holder.append( $caption ); }
    // if ( !showNav ){ $nav.hide(); }
    // $overlay.append( $holder );
    // $("body").append( $overlay );
    // $($overlay).hide();

    // //Click image link
    // $('#gamer .info-img img').click( function(event) {
    //     imageLocation = $(this).attr("src");

    //     // index of clicked item
    //     imageIndex = $( '#gamer .info-img img' ).index(this) + 1;

    //     //Image focused on
    //     $lightboxMedia.find('img').attr("src", imageLocation);
        
    //     //Add and remove active class on link
    //     $(this).addClass('active');
    //     $('#gamer .info-img img').not(this).removeClass('active');
        
    //     //顯示圖片與資訊
    //     // $lightboxMedia.empty();
    //     // $lightboxMedia.append($(this).find(".lightbox-media").clone());
    //     // $info.empty();
    //     // $info.append($(this).find(".desc").clone());

    //     allowKeyboard = 1;
    //     $overlay.show(); 
    // });

    // //Close overlay
    // $image.click(function() {
    //     allowKeyboard = 0;
    //     $($overlay).hide();
    // });

    // $overlay.click(function(e) {
    //     if(e.target != this) return;
    //     $(this).hide();
    // });

    // $('#close').click(function() {
    //     $($overlay).hide();
    // });

    //Worldview
    // let cards = document.querySelectorAll('.card');
    let ancords = document.querySelectorAll('.timeline li');
    // let cardsIndexes = [];
    // var isFromAnchor = false;
    // cards.forEach( ele => {
    //     cardsIndexes.push(ele.dataset.slide);
    //     ele.addEventListener('click', () => {
    //         if (!isFromAnchor) {
    //             $("#progress").attr("class", "point"+$(ele).attr("data-point"));
    //             console.log("data-point"+$(ele).attr("data-point"));
    //         }
    //         isFromAnchor = false;
    //         setTimeout(() => {
    //             // setNumberToFirst(ele.dataset.slide);
    //             // setIndex();
                
    //             var s = ele.getAttribute('data-img');
    //             $('#worldview-bg').css("background-image","linear-gradient(180deg, black -20%, transparent),url('"+ s +"')");
    //             $('.year').css("display","none");
    //             $(ele).find('.year').css("display","block");
    //             setNumberToFirst(ele.dataset.slide);
    //             setIndex();
    //             }, 500);
                
    //     // setNumberToFirst(ele.dataset.slide);
    //     // setIndex();
    //     })
    // })
    // jQuery('.card').eq(0).click();
    let timer;
    let current = 0;
    let triggerInit = false;
    ancords.forEach( ele => {
        ele.addEventListener('click', () => {
            // setNumberToFirst(ele.dataset.slide);
            // setIndex();
            let currentpoint = ele.getAttribute('data-point');
            $('.anchor').removeClass('past-time-point');
            $('.anchor').each(function(){
                if($(this).attr('data-point') <= currentpoint){
                    $(this).addClass('past-time-point');
                }
            });
            isFromAnchor = true;
            $("#progress").attr("class", "point"+currentpoint);
            // jQuery('.card').eq(currentpoint).click();
            // jQuery('.slide_buttons').eq(currentpoint).click();
            
            if(triggerInit){
                clearInterval(timer);
                current = currentpoint;
                playWorldview();
            }
        })    
    })
    jQuery('.anchor').eq(0).click();
    function playWorldview(){
        // timer = setTimeout(function(){
        //     $('.anchor[data-point='+current+']').click();
        // },12000);
        current++;
        current = current > ancords.length-1 ? 0 : current;
    }
    
    let inViewportPlayOnce = true;
    window.addEventListener('scroll',(e)=>{
        let scrolled = window.pageYOffset;

        // 剛好看得到一點worldview時，就要啟動了（手機版同）
        if( scrolled > 1200 && inViewportPlayOnce){
            playWorldview();
            inViewportPlayOnce = false;
            triggerInit = true;
        }
    })

    function setIndex(){
        cards.forEach( (ele,i) => {
            ele.dataset.slide = cardsIndexes[i]
        })
        ancords.forEach( (ele,i) => {
            ele.dataset.slide = cardsIndexes[i]
        })
    }

    function setNumberToFirst(index){
        
        for (let i = 0; i < index; i++) {
            cardsIndexes.unshift(cardsIndexes.pop());
        }
    }


    // 首頁transition 視差滾動
    // let universe = document.querySelector('#universe');
    // let w = window.innerWidth;
    // window.addEventListener('scroll',(e)=>{
    //     const targets = document.querySelectorAll('section.transition');
    //     let scrolled = window.pageYOffset;
    //     let offset = scrolled * -0.4;
        
    //     targets[0].style.marginTop = offset + 'px'; 

        // if( w > 768){
        //     if( scrolled > 1400 && scrolled < 1800){
        //         offset = (scrolled - 1400) * -0.4;
        //         targets[1].style.marginTop = offset + 'px'; 
        //     }
        //     if( scrolled > 3600 && scrolled < 4100){
        //         offset = (scrolled - 3600) * -0.4;
        //         targets[2].style.marginTop = offset + 'px'; 
        //     }
        //     if( scrolled > 4800 && scrolled < 5300){
        //         offset = (scrolled - 4800) * -0.4;
        //         targets[3].style.marginTop = offset + 'px'; 
        //     }
        //     if( scrolled > 7000 ){
        //         offset = (scrolled - 7000) * -0.4;
        //         targets[4].style.marginTop = offset + 'px'; 
        //     }
        // }else{
        //     if( scrolled > 1300 && scrolled < 1600){
        //         offset = (scrolled - 1300) * -0.4;
        //         targets[1].style.marginTop = offset + 'px'; 
        //     }
        //     if( scrolled > 2850 && scrolled < 3300){
        //         offset = (scrolled - 2850) * -0.4;
        //         targets[2].style.marginTop = offset + 'px'; 
        //     }
        //     if( scrolled > 3820 && scrolled < 4200){
        //         offset = (scrolled - 3820) * -0.4;
        //         targets[3].style.marginTop = offset + 'px'; 
        //     }
        //     if( scrolled > 5200 ){
        //         offset = (scrolled - 5200) * -0.4;
        //         targets[4].style.marginTop = offset + 'px'; 
        //     }
        // }
    // })
    // 視差滾動結束
// });
    //     // if( w > 768){
    //     //     if( scrolled > 1400 && scrolled < 1800){
    //     //         offset = (scrolled - 1400) * -0.4;
    //     //         targets[1].style.marginTop = offset + 'px'; 
    //     //     }
    //     //     if( scrolled > 3600 && scrolled < 4100){
    //     //         offset = (scrolled - 3600) * -0.4;
    //     //         targets[2].style.marginTop = offset + 'px'; 
    //     //     }
    //     //     if( scrolled > 4800 && scrolled < 5300){
    //     //         offset = (scrolled - 4800) * -0.4;
    //     //         targets[3].style.marginTop = offset + 'px'; 
    //     //     }
    //     //     if( scrolled > 7000 ){
    //     //         offset = (scrolled - 7000) * -0.4;
    //     //         targets[4].style.marginTop = offset + 'px'; 
    //     //     }
    //     // }else{
    //     //     if( scrolled > 1300 && scrolled < 1600){
    //     //         offset = (scrolled - 1300) * -0.4;
    //     //         targets[1].style.marginTop = offset + 'px'; 
    //     //     }
    //     //     if( scrolled > 2850 && scrolled < 3300){
    //     //         offset = (scrolled - 2850) * -0.4;
    //     //         targets[2].style.marginTop = offset + 'px'; 
    //     //     }
    //     //     if( scrolled > 3820 && scrolled < 4200){
    //     //         offset = (scrolled - 3820) * -0.4;
    //     //         targets[3].style.marginTop = offset + 'px'; 
    //     //     }
    //     //     if( scrolled > 5200 ){
    //     //         offset = (scrolled - 5200) * -0.4;
    //     //         targets[4].style.marginTop = offset + 'px'; 
    //     //     }
    //     // }
    //   })
    // 視差滾動結束

    /**worldview v1.1**/

    $('.worldview-slider').each(function() {
        var $this = $(this);
        var $group = $this.find('.cards-box');
        var $slides = $this.find('.card');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
            var animateLeft, slideLeft, infoSlideLeft, infoAnimateLeft;
            
            advance();
            
            if ($group.is(':animated') || currentIndex === newIndex) {
            return;
            }
            
            if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
            infoSlideLeft = '+=+8000';
            infoAnimateLeft = '+=-8000';
            } else {
            slideLeft = '-100%';
            animateLeft = '100%';
            infoSlideLeft = '+=-8000';
            infoAnimateLeft = '+=+8000';
            }
            
            $slides.eq(newIndex).css({
                display: 'block',
                left: slideLeft
            });
            $slides.eq(currentIndex).find('.card-info').animate({
                left: infoSlideLeft
            });
            $group.delay(300).animate({
            left: animateLeft
            }, function() {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            $slides.eq(currentIndex).find('.card-info').animate({
                left: infoAnimateLeft
            });
            currentIndex = newIndex;
            });
        }
        
        function advance() {
            clearTimeout(timeout);
            timeout = function() {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
            }
        }
        
        $('.anchor').click(function(){
            move($(this).attr('data-point'));
        });
    });

    // 判斷螢幕寬度
    let w = window.innerWidth;

    // gamers list 
    if( w < 768 ){
        $('.gamer-link').on('click',function(e){
            e.preventDefault();
            let link = $(this).attr('href');
            setTimeout(function(){
                window.location = link;
            },700);
        })
    }
    
    autoplay = w < 768 ? '' : 'autoplay=1&mute=1&';
    // video popup
    $('#video .vice-modernslider-item a').on('click',function(e){
        e.preventDefault();
        let modernslider_item = $(this).closest('.vice-modernslider-item');
        // &controls=0
        let yt = modernslider_item.find('.vice-modernslider-item__thumbnail a').data('yt') + '?'+autoplay+'showinfo=0';
        let title = modernslider_item.find('.vice-modernslider-item__thumbnail a').data('title');
        $('#video-modal iframe').attr('src',yt.replace('watch?v=','embed/'));
        $('#video-modal .video-modal-title').text(title);
        $('#video-modal').show();
    });
    
    $('#brand-video .vice-modernslider-item a').on('click',function(e){
        e.preventDefault();
        let modernslider_item = $(this).closest('.vice-modernslider-item');

        let yt = modernslider_item.find('.vice-modernslider-item__thumbnail a').data('yt') + '?'+autoplay+'showinfo=0';
        let title = modernslider_item.find('.vice-modernslider-item__thumbnail a').data('title');
        $('#video-modal iframe').attr('src',yt.replace('watch?v=','embed/'));
        $('#video-modal .video-modal-title').text(title);
        $('#video-modal').show();
    });

    $('#video-modal .video-modal-colse').on('click',function(){
        $(this).parent().parent().parent().hide();
        $(this).parent().parent().find('iframe').attr('src','');
        $(this).parent().find('.video-modal-title').text('');
    });

    /**go back**/
    $('.post-goback').click(function(){
        window.history.back();
    });

    // 解內頁header內img src抓不到產生錯誤，整個移除掉防vice掛glitch上去
    if( $('.category-universe').length == 1 || $('.category-gamers').length == 1 ){
        $('.dhrk-pageheader').remove();

    }
    $('.bts-posts').each(function(){
        if($(this).find('.external-link')){
            var exLink = $(this).find('.external-link').attr('href');
            $(this).find('.btn-more').attr('href', exLink).attr('target','_blank');
            $(this).find('.title a').attr('href', exLink).attr('target','_blank');
            $(this).find('.featured-img').attr('href', exLink).attr('target','_blank');
        }
    });

    /**universe-blur**/
    if($('#universe-blur').length){
        var is_bg_blur = false;
        function universebg_blur(){
            is_bg_blur = true;
            $('#universe-blur').css({'background-color': 'rgba(0,0,0,0.3)', 'backdrop-filter': 'blur(5px'});
        }
        function universebg_clear(){
            $('#universe-blur').css({'background-color': '', 'backdrop-filter': ''});
        }
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(scroll > 150 && !is_bg_blur){
                universebg_blur();
            }
            if(scroll < 150 ){
                universebg_clear();
                is_bg_blur = false;
            }
        });
    }

    // 中文版footer 加多語系
    $('#block-8').parent().removeClass('col-md-3').addClass('col-md-6');
    $('#block-8').find('.wp-block-column').eq(0).append('<p style="display:inline-block"><a href="../" data-type="URL" rel="noreferrer noopener"><span class="icon-global"></span>English</a></p>').find('a').css({
        'display':'flex',
        'flex-wrap':'wrap',
        'justify-content':'center'
    });
    $('#block-8').find('.wp-block-column').eq(0).find('.icon-global').css({
        'display':'inline-block',
        'background-image': 'url(./wp-content/themes/vice-dhrk/img/icon-global-white.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'contain',
        'margin-right':'5px',
        'width': '20px',
        'height': '20px',
    });

    // if( $('body').hasClass('single-post') ){
    //     let oldPath = window.location.href;
    //     let newPath = oldPath.replace('/zh-hant', '');
    //     $('#qwjquerycontent').append('<div class="i18n"><a href="'+newPath+'" data-type="URL" rel="noreferrer noopener">English</a></div>').find('.i18n').css({
    //         'position': 'fixed',
    //         'top': '6px',
    //         'right': '50px',
    //         'padding': '10px',
    //         'font-size': '20px',
    //         'z-index': '10'
    //     }).find('a').css('color','black');
    // }
});