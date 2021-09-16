/**====================================================================
 *
 *  Main Script File
 *
 *====================================================================*/
/* jshint unused:false */
/*globals snabbt */

(function($) {
	"use strict";
	$.viceElementor = {
		window: $(window),
		fxActivationClass: 'vice-fx-on',
		
		/**
		 * ====================================================================
		 * Global options
		 * ====================================================================
		 */
		options: {
			glitchDuration: 1000, //glitchFx
			glitchPause: 4000, //glitchFx
		},

		/**
		 * ====================================================================
		 * Initialization
		 * ====================================================================
		 */
		__init: function(){
			var viceElementor = this;
			viceElementor.countFps(viceElementor);
			viceElementor.viceCarousel(viceElementor, 'init', 'body');
			viceElementor.windowResized(viceElementor);
			viceElementor.viceMouseMove.init( viceElementor );
			viceElementor.fx3dElements.init(viceElementor);
			viceElementor.viceSectionFx();
			viceElementor.glitchParticles.init( viceElementor );
			viceElementor.glitchText.init( viceElementor );
			viceElementor.glitchPics.init( viceElementor );
			viceElementor.glitchLoop.init( viceElementor );
		},


		/**
		 * ====================================================================
		 *  FPS counter
		 * ====================================================================
		 */
		countFps: function(viceElementor){
			var that = this;
			var body = $("body");
			var debugOutput = ($("body").data('jsdebug'))? 1 : 0;
			body.append('<output id="vice-elementor-PerformanceCheck" style="position: fixed;bottom: 0px;left: auto; right:0;padding: 0 2px;opacity: '+debugOutput+';background:black;color:white;z-index:100; font-size: 10px;"></output>');
			var $out = $('#vice-elementor-PerformanceCheck');
			that.countFPSf = (function () {
			  var lastLoop = (new Date()).getMilliseconds();
			  var count = 1;
			  var fps = 0;
			  return function () {
				var currentLoop = (new Date()).getMilliseconds();
				if (lastLoop > currentLoop) {
				  fps = count;
				  count = 1;
				} else {
				  count += 1;
				}
				lastLoop = currentLoop;
				viceElementor.fps = fps;
				return fps;
			  };
			}());
			
			(function loop() {
				requestAnimationFrame(function () {
				  $out.html(that.countFPSf() + 'FPS');
				  loop();
				});
			}());
		},

		/**
		 * ====================================================================
		 * Trigger custom functions on window resize
		 * ====================================================================
		 */
		windowResized: function(v){
			var rst;
			var	w = v.window;
			v.wW = v.window.width();
			v.wH = v.window.height();
			w.on('resize', function() {
				clearTimeout(rst);
				rst = setTimeout(function() {
					if (w.width() != v.wW){
						v.wW = w.width();
						v.animation3D.reset();
						v.viceMouseMove.init( v );
					}
					if (w.height() != v.wH){
						v.wH = w.height(); // used in other functions
					}
				}, 1000);
			});
		},

	
		/**
		 * ====================================================================
		 *  Mouse move binding
		 *  * Do not run on small screens
		 *  * Do not run if the FPS are too low, prevent browser stuck
		 * ====================================================================
		 */
		viceMouseMove: {
			init: function( vice ){
				var win = vice.window;
				win.off('mousemove.vicespace'); //vicespace = aleatory namespace
				vice.mousePos = { x: vice.wW / 2, y: vice.wH / 2 };
				win.trigger('viceMouseMoved');
				vice.mouseAnimation = false;
				if( win.width() > 1190 ){
					win.on('mousemove.vicespace', function(e){ // stateful 
						vice.mousePos = { 
							x: e.pageX,
							y: e.pageY
						};
						win.trigger('viceMouseMoved'); 
					});
				}
			},
		},

		
		/**
		 * ====================================================================
		 * Animation in 3D
		 * ====================================================================
		 */
		animation3D: {
			target: false,
			reset: function() {
				var old = $('.vice-animating-3d');
				if( old.length > 0 ){
					var resetCss = {"transform": "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1) translate(0, 0)", "transition" : 'all 1s ease' };
					jQuery('.vice-animating-3d').css(resetCss).find('.vice-3d-element__front').css(resetCss);
					old.removeClass('vice-animating-3d');
				}
			},
			init: function( v ){
				var that = this,
					win = v.window,
					item = false, e, mouseXrel, mouseYrel,  moveX, moveY, matrix1, matrix2;
				that.reset();
				if( v.wW > 1190 && false !== that.target ){
					that.target.addClass('vice-animating-3d');
					item = $('.vice-animating-3d');
					e = v.mousePos;
					var centerX = item.offset().left + ( item.width() / 2 );
					var centerY = item.offset().top + ( item.height() / 2 );
					mouseXrel = (e.x - centerX) * - 1 / 100;
					mouseYrel = (e.y - centerY) * - 1 / 100;
					moveX = mouseXrel * 0.000013;
					moveY = mouseYrel * 0.000013;
					matrix1 = [[1, 0, 0, - moveX], [0, 1, 0, - moveY], [0, 0, 1, 1], [0, 0, 0, 1]];
					matrix2 = [[1, 0, 0, - moveX], [0, 1, 0, - moveY], [0, 0, 1, 1], [0, 0, 0, 1]];
					
					item .css({"transition" : 'all 0.15s ease', "transform": "matrix3d(" + matrix1.toString() + ") translate(" + mouseXrel *  -4 + "px, " + mouseYrel  * -4 + "px)"})
						.find('.vice-3d-element__front').css({"transition" : 'all 0.15s ease', "transform": "perspective(1000px) matrix3d(" + matrix2.toString() + ") translate(" + mouseXrel  * -4 + "px, " + mouseYrel * -4 + "px)"});
					
					v.moverMouse = { 
						x: centerX,
						y: centerY
					};

					win.on('viceMouseMoved.vice3d', function(){
						if( v.fps > 8 ){
							var tempItem = $('.vice-animating-3d');
							$(v.moverMouse).clearQueue();
							$(v.moverMouse).animate({
							  x: v.mousePos.x ,
							  y: v.mousePos.y
							}, {
							  	duration: 110,
							  	step: function() {
									mouseXrel = (v.moverMouse.x - centerX) * - 1 / 100;
									mouseYrel = (v.moverMouse.y - centerY) * - 1 / 100;
									moveX = mouseXrel * 0.000013;
									moveY = mouseYrel * 0.000013;
									matrix1 = [[1, 0, 0, - moveX], [0, 1, 0, - moveY], [0, 0, 1, 1], [0, 0, 0, 1]];
									matrix2 = [[1, 0, 0, - moveX], [0, 1, 0, - moveY], [0, 0, 1, 1], [0, 0, 0, 1]];
									// IMPORTANT: never replace $('.vice-animating-3d') with a variable or the animation falls bad
									$('.vice-animating-3d').css({"transform": "matrix3d(" + matrix1.toString() + ") translate(" + mouseXrel *  -4 + "px, " + mouseYrel  * -4 + "px)", 'transition':'none'})
									.find('.vice-3d-element__front').css({"transform": "perspective(1000px) matrix3d(" + matrix2.toString() + ") translate(" + mouseXrel  * -4 + "px, " + mouseYrel * -4 + "px)", 'transition':'none'});
							  	}
							});
						}
					});
				}
			},
		},

		/**
		 * ====================================================================
		 *  3D elements append listeners
		 * ====================================================================
		 */
		fx3dElements: {
			init: function(v){
				$('.vice-elementor-3dfx [data-vice-elementor-3dpicture="true"]').attr('data-vice-elementor-3dpicture', 'false'); // disable if the container has 3d
				$('.vice-elementor-3dfx [data-vice-elementor-3delement="true"]').attr('data-vice-elementor-3delement', 'false'); // disable if the container has 3d
				var the3dElements = [
					$('[data-vice-elementor-3dpicture="true"]'), 
					$('[data-vice-animation3d="true"] .owl-item'),
					$('[data-vice-elementor-3delement="true"]'), 
					$('.vice-elementor-3dfx > .elementor-container')
				];
				$.each(the3dElements, function(){
					$(this).each(function(){
						var t = $(this);
						t.css({"transform": "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1) translate(0, 0)" });
						t.off('onmouseenter.vice3d').off('mouseleave.vice3d')
						.on('mouseenter.vice3d', function(){
							v.animation3D.target = t;
							v.animation3D.init( v );
						});
					});
				});
			},
		},


		isInViewport: function( element ) {
			var elementTop = element.offset().top;
			var elementBottom = elementTop + element.outerHeight();
			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();
			return elementBottom > viewportTop && elementTop < viewportBottom;
		},

		/**
		 * ====================================================================
		 * viceCarousel
		 * ====================================================================
		 */
		viceCarousel: function(viceElementor, action, targetContainer){
			if(!jQuery.fn.owlCarousel) { return; }
			if(undefined === targetContainer) { targetContainer = "body"; }
			if(undefined === action) { action = "init"; }

			if( 'init' === action ){
				$(targetContainer+' .vice-elementor-owl-carousel').each( function(i,c){
					var T = $(c),
						itemIndex,
						controllerTarget;
					if(!T.hasClass('vice-elementor-carousel-created')){
						T.fadeTo(0, 0);
					}
					T.owlCarousel({
						loop: T.data('loop'),
						margin: T.data('gap'),
						nav: T.data('nav'),
						dots: T.data('dots'),
						navText: ['<i class="vice-elementor-arrow vice-elementor-arrow__l"></i>', '<i class="vice-elementor-arrow vice-elementor-arrow__r"></i>'],
						center: T.data('center'),
						stagePadding: T.data('stage_padding'),
						autoplay:  false,
						autoWidth:false,
						autoplayTimeout: T.data('autoplay_timeout'),
						// autoplayHoverPause: T.data('pause_on_hover'),
						callbacks: true,
						responsive:{
							0:{
								items: T.data('items_mobile'),
								autoWidth:false,
								margin: 30
							},
							420:{
								items: T.data('items_mobile_hori'),
								autoWidth:false
							},
							600:{
								items: T.data('items_tablet'),
								autoWidth:false,
							},
							1025:{
								items: T.data('items'),
								autoWidth:false
							}
						},
						onInitialized:function(){
							T.addClass('vice-elementor-carousel-created');
							$(c).delay(250).fadeTo(250, 1);
						},
					});
					// multinav
					if( T.hasClass('vice-elementor-multinav-main')) {
						controllerTarget = T.data('target');
						T.parent().find('.vice-elementor-multinav__controller').find('a:first-child').addClass('current');
						T.on('changed.owl.carousel', function (e) {
							if (e.item) {
								itemIndex = T.find('.active [data-index]').data('index') + 1;
								T.parent().find('.vice-elementor-multinav__controller .current').removeClass('current');
								T.parent().find('.vice-elementor-multinav__controller').find('[data-multinav-controller="'+itemIndex+'"]').addClass('current');
							}
						});
					}
					// Index number [modernSlider]
					if( T.data('indexslide') ){
						T.find('.owl-nav').append('<div class="vice-modernslider__index" data-vice-itemindex>01</div>');
						var cur;
						var indexContainer = T.find('.owl-nav').find('[data-vice-itemindex]');
						var currentItem = T.find('.active');
						if(T.data('vicefx') === 'glitch'){
							currentItem.find('[data-vicefx="glitch"]').addClass(viceElementor.fxActivationClass);
						}
						T.on('translated.owl.carousel', function(e) {
							if (e.item) {
								cur = T.find('.active [data-index]').data('index');
								if( cur < 10 ){
									cur = '0'+cur;
								}
								indexContainer.animate({
									'opacity': 0,
									'margin-top': '-20px'
								}, 300, function(){
									indexContainer.html( cur ).css({'margin-top': '20px'}).animate({
										'opacity': 1,
										'margin-top': '0px'
									}, 300);
								});
								if(T.data('vicefx') === 'glitch'){
									currentItem = T.find('.active');
									currentItem.find('[data-vice-imgfx="glitch"]').addClass(viceElementor.fxActivationClass);
									currentItem.prev().find('[data-vice-imgfx="glitch"]').removeClass(viceElementor.fxActivationClass);
								}
							}
						});
					}
					T.on('click', "[data-multinav-controller]", function(e){
						e.preventDefault();
						var t = $(this),
							i = t.data("multinav-controller"),
							targ = t.data("multinav-target");
						$('#'+targ).trigger('stop.owl.autoplay', i);
						$('#'+targ).trigger('to.owl.carousel', i);
						T.parent().find('.vice-elementor-multinav__controller .owl-item a').removeClass('current');
						t.addClass('current');
					});
				});
			} // if( 'init' === action ){
		},

		/**
		 * ====================================================================
		 * Glitch on text capions
		 * ====================================================================
		 */
		glitchText: {
			init: function( viceElementor ){
				var that = this;
				var glitchclass = viceElementor.fxActivationClass;
				that.items = $('[data-vice-textfx="glitch"]');
				that.items.each(function(){
					var t = $(this);
					var text = t.html();
					var decor = t.find('.vice-elementor-caption__decor');
					t.html('<span class="vice-textfx-glitch__l0">'+text+'</span><span class="vice-textfx-glitch__l1">'+text+'</span><span class="vice-textfx-glitch__l2">'+text+'</span>');
					t.addClass(glitchclass);
					t.on('touchstart, mouseenter', function(){
						t.addClass(glitchclass);
					}).on('touchend, mouseleave', function(){
						t.removeClass(glitchclass);
					});
				});
				viceElementor.window.off('viceGlitchStart.vicetextglitch')
					.off('viceGlitchStop.vicetextglitch')
					.on('viceGlitchStart.vicetextglitch', function(){
						that.items.addClass(glitchclass);
					}).on('viceGlitchStop.vicetextglitch', function(){
						that.items.removeClass(glitchclass);
					});
			}
		},

		/**
		 * ====================================================================
		 * Glitch picture
		 * ====================================================================
		 */
		glitchPics: {
			init: function( viceElementor ){
				var that = this;
				var glitchclass = viceElementor.fxActivationClass;//'vice-fx-on';
				that.items = $('[data-vice-imgfx="glitch"]');
				that.items.each(function(){
					var t = $(this);
					var ti = t.find('img:first-child');
					var imgurl = ti.attr('src');
					t.append('<img src="'+ti.attr('src')+'" class="vice-imgfx--glitch__f1">');
					t.append('<img src="'+ti.attr('src')+'" class="vice-imgfx--glitch__f2">');
					if( t.data('vice-fx-activation') === 'auto' ){
							t.addClass(glitchclass);
						}
					if( t.data('vice-glitch-activation') == 'hover' ){
						t.on('touchstart, mouseenter', function(){
							t.addClass(glitchclass);
						}).on('touchend, mouseleave', function(){
							t.removeClass(glitchclass);
						});
					}
				});
				viceElementor.window.off('viceGlitchStart.viceimgglitch').off('viceGlitchStop.viceimgglitch');
				viceElementor.window.on('viceGlitchStart.viceimgglitch', function(){
					that.items.each(function(){
						var t = $(this);
						if( t.data('vice-fx-activation') === 'auto' ){
							t.addClass(glitchclass);
						}
					});
				});
				viceElementor.window.on('viceGlitchStop.viceimgglitch', function(){
					that.items.removeClass(glitchclass);
				});
			}
		},

		/**
		 * ====================================================================
		 * Elementor section glitch effect
		 * transform background image into an inline image and glitch it
		 * ====================================================================
		 */
		viceSectionFx: function(){
			// Add a phisical image as background to apply the glitch
			$(".vice-elementor-glitchsection").each(function(){
				var bg = $(this).css('background-image');
				if( bg && "none" !== bg ){
					bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
					$(this).prepend('<div class="vice-elementor-glitchsection__bg vice-imgfx--glitch" data-vice-imgfx="glitch" data-vice-fx-activation="auto"><img src="'+bg+'"></div>');
				}
			});
		},

		/**
		 * ====================================================================
		 * Glitch particles
		 * ====================================================================
		 */
		glitchParticles: {
			quantity: 10,
			fxBoxes: [],
			items: [],
			animationInterval: false,
			init: function(viceElementor){
				var that = this;
				that.targets = $('.vice-elementor-glitchsection');
				that.class = viceElementor.fxActivationClass;
				if( that.targets.length === 0 ){ return; }
				that.destroy(that); // always destroy first, or it can destroy the browser 
				that.create(that);
				viceElementor.window.off('viceGlitchStart.particles').off('viceGlitchStop.particles')
					.on('viceGlitchStart.particles', function(){ that.show(that); })
					.on('viceGlitchStop.particles', function(){ that.hide(that); });
			},
			create: function(that){
				that.targets.each(function(){
					var t = $(this);
					t.find('.vice-elementor-glitchparticles').remove();
					t.find('[data-vice-particles]').remove();
					t.append('<div data-vice-particles class="vice-elementor-glitchparticles"></div>');
					var layer = t.find('[data-vice-particles]');
					for(var i = 0; i < that.quantity; i ++){
						t.find('[data-vice-particles]').append('<hr>');
					}
					that.fxBoxes.push(layer);
				}).promise().done(function(){
					that.fxBoxes = $('[data-vice-particles]');
					that.show(that); 
				})
			},
			show: function(that){
				that.fxBoxes.addClass(that.class);
				that.animation(that);
				that.animationInterval = setInterval(function(){ 
					that.animation(that);
				}, 200);
			},
			animation: function(that){
				if( that.fxBoxes.hasClass(that.class) ){
					var total = 0;
					that.fxBoxes.find('hr').each( function(){
						total++;
						$(this).css({
							'left': Math.floor(Math.random() * 90)+'%',
							'top': Math.floor(Math.random() * 100)+'%',
							'width':   8 + Math.floor( Math.random() * 20) +'px',
							'height': 3 +  Math.floor( Math.random() * 3) + 'px'
						});
					});
				}
			},
			hide: function(that){
				if( false !== that.animationInterval ){
					clearInterval(that.animationInterval);
				}
				that.fxBoxes.removeClass(that.class);
			},
			destroy: function(that){
				if('undefined' !== typeof(that.animateInterval) ){
					clearInterval(that.animateInterval);
				}
			}
		},

		/**
		 * ====================================================================
		 * Global glitch automation loop
		 * ====================================================================
		 */
		glitchLoop: {
			state: 0,
			newstate: 0,
			init: function( viceElementor ){
				var that = this;
				var arrogance = $('[data-vice-glitch-arrogance]').data('vice-glitch-arrogance');
				if( !arrogance ){
					arrogance = 15;
				}
				arrogance = 1 - ( arrogance / 100 );
				if( 'undefined' !== typeof( that.glitchInterval  ) ){
					clearInterval( that.glitchInterval );
				}
				that.glitchInterval = setInterval(
					function(){
						that.newstate = 0;
						if( Math.random() > arrogance){ // the hightr the limit it, the less it glitches. Chance or probability to glitch
							that.newstate = 1;
						}
						// act only if it changes
						if( that.newstate !== that.state ){
							that.state = that.newstate;
							if( that.state ){
								viceElementor.window.trigger('viceGlitchStart');
							}else {
								viceElementor.window.trigger('viceGlitchStop');
							}
						}
					}, 500
				);
			}
		}

	};

	/**====================================================================
	 *
	 *	Page Ready Trigger
	 * 	This needs to call only $.fn.qtInitTheme
	 * 
	 ====================================================================*/
	$(document).ready(function() {
		$.viceElementor.__init($.viceElementor);		
	});

})(jQuery);