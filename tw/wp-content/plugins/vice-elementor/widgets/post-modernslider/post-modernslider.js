( function( $ ) {
	var WidgetViceElementorPostModernSlider = function( $scope, $ ) {
		if(!$('body').hasClass('elementor-editor-active')){
			return;
		}
		if(typeof( $.viceElementor ) !== 'object' ){
			console.log( 'Missing main theme script' );  
		}
		try {
			$.viceElementor.viceCarousel($.viceElementor);
			$.fn.autoembed("[data-autoembed]");
		} catch(e) {
			console.log(e);
		}
	};
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/vice-elementor-post-modernslider.default', WidgetViceElementorPostModernSlider );
	} );
} )( jQuery );