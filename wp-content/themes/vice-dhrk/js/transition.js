import {splitFlap} from "../js/splitflap.js";
jQuery(document).ready(function(){
	// API 參考： https://github.com/masteryder/splitflap
	const texts_set = [
		[
			"REBOOT",
			"REVELATION",
		],
		[
			"RHAPSODY",
			"REBOOT",
		],
		[
			"RE-AWAKENING",
			"RHAPSODY",
		],
		[
			"REVELATION",
			"RE-AWAKENING",
		]
	]
	let splitflaps = document.querySelectorAll('.splitflap');
	splitflaps.forEach((ele,index) =>{
		splitFlap(ele, texts_set[index], {
			'timeOut' : 1500,
			'tickTimeOut' : 100,
			'nbJumpIterations' : 4,
		});
	})


	// 這邊處理opening 中心saga換字,放這不放openingjs是因為要用import
	const brand_texts_set = [
		['S','S','S','S','S','S','S','S','S','5','S','S','S','S','S','S','S','S','S'],
		['S','S','S','S','S','S','S','S','S','5','S','S','S','S','S','S','S','S','S']
	]
	let brand_splitflaps = document.querySelectorAll('.opening_center .split');
	brand_splitflaps.forEach((ele,index) =>{

		setTimeout(() => {
			splitFlap(ele, brand_texts_set[index], {
				'timeOut' : 160,
				'tickTimeOut' : 50,
				'nbJumpIterations' : 4,
			});
		}, 8000);
	})
	// opening 中心saga換字結束


	// 視差滾動
	let opening = document.getElementById("opening");
	let opening_copy = document.querySelector('#opening-copy');
    let transition = document.getElementById("transition");
    // $('#canvas').scroll(function(){
	// 	if( transition.offsetTop <= $('#canvas').scrollTop()){
	// 		opening.style.position = 'relative';
	// 		opening.style.top = window.innerHeight+ 'px';
	// 	}else{
    //         opening.style.position = 'sticky';
	// 		opening.style.top = '0px';
    //     }
	// })
	let placeholderHeight = $(opening).outerHeight();
	$(window).scroll(function(e){
		if( transition.offsetTop <= $(window).scrollTop()){
			// let offset = transition.offsetTop - $(window).scrollTop();
			// opening.style.transform = 'translate( 0, ' + offset+ 'px)';

			opening.style.position = 'relative';
			opening.style.top = placeholderHeight -40 + 'px';
			opening.style.left = '-1px';
			opening_copy.style.height = 0;
		}else{
			opening.style.left = '0px';
			setPlaceholder();
        }
	})
	function setPlaceholder(){
		opening_copy.style.height = placeholderHeight + 'px';
		opening.style.position = 'fixed';
		opening.style.top = '0px';
	}
	setPlaceholder();
});


 