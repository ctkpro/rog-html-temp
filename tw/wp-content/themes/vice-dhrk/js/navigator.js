jQuery(document).ready(function(){

	// tablinks = document.querySelectorAll('.tablinks');
	// tabcontent = document.querySelectorAll(".tabcontent");

	// tablinks.forEach(ele => {
	// 	ele.addEventListener("click",function(){
	// 		tablinks.forEach(element =>{
	// 			element.className = element.className.replace(" active", "");
	// 		})

	// 		this.className += " active";
			
	// 		// let target = this.dataset.target;
    //         let target = this.querySelector('a').getAttribute('href').replace('#','');
	// 		console.log(target);
	// 		tabcontent.forEach(element =>{
	// 			element.style.display = "none";
	// 		})
	// 		document.getElementById(target).style.display = "flex";
	// 	});
	// });
	// tablinks[0].click();

	function isInViewport (ele) {
	
		let rect = ele.getBoundingClientRect();
		
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom -100<= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
		);
	}

	let section = document.querySelectorAll('.qw-content-wrapper > section');

	// window.addEventListener('scroll', function(e){
	// 	if( isInViewport(section[0]) ){
	// 	}

	// 	// section.forEach( ele => {
	// 	// 	if( isInViewport (ele) ){
	// 	// 		console.log(ele.getAttribute('id'));
	// 	// 	}
	// 	// });
	// });
	let w = window.innerWidth;
	let lastScrollTop = 0;
	let menu = document.querySelector('#nav #qwtoggle');
	let mb_menu = document.querySelector('.vice-menu');

	window.addEventListener('scroll',(e)=>{
        let scrolled = window.pageYOffset;
        

        if( w > 768){

			// 桌機版opening之後才會出現menu
            if( scrolled >= 0 && scrolled < 600){
				menu.style.opacity = 0;
			}else{
				// menu.style.opacity = 1;

				// 暫時一直關掉狀態
				menu.style.opacity = 0;
			}

        }else{
            // 手機版往上滑才會出現固定Menu
			if(scrolled > lastScrollTop ){
				// downscroll code
				mb_menu.style.display = 'none';
			}else {
				// upscroll code
				// 暫時一直關掉
				// mb_menu.style.display = 'block';
				mb_menu.style.display = 'none';
			}
			lastScrollTop = scrolled <= 0 ? 0 : scrolled;
		}

	},false)


	$(".tablinks a").click(function(e) {

		var target = $(this).attr('href');
	
		e.preventDefault();
	
		$('html, body').animate({
		  scrollTop: $(target).offset().top - 20
		}, 500);
	  });


});
 