jQuery(document).ready(function(){
	if( jQuery('body').hasClass('home') ){

		let w = window.innerWidth;
		let video = document.querySelector('#ctk-video');
		// let video_bg = document.querySelector('#video-background');
		
		let logo = document.querySelector('.animate-logo');	
		let progress_bar = document.querySelector('.ctk-progress-bar');
		let mini_bar = document.querySelector('.mini-bar-container');
		// let title = document.querySelector('#opening h1');
		// let title_glitch = document.querySelector('#opening h1.glitch');
		// let describe = document.querySelector('#opening p');
		// let describe_glitch = document.querySelector('#opening p.glitch');

		let opening_center = document.querySelector('.opening_center');
		let opening_lc = document.querySelector('#opening_lc');
		let opening_bl = document.querySelector('#opening_bl');
		let opening_206 = document.querySelector('#opening_206');		
		
		setInterval(() => {
			opening_center.classList.toggle('glitch-on');
		}, 4000);
		// 原4500

		// duration 在影片載入前讀不到
		// setTimeout(function(){
		// 	let t = video.duration;
		// 	setTimeout(() => {
		// 		video.style.opacity = 0;
		// 		video.pause();
		// 	}, t * 1000);
		// },500);

		// video.addEventListener('ended',function(){
		// 	video_bg.classList.add('fade-in');
		// 	opening_center.classList.add('fade-in');
		// 	opening_lc.classList.add('fade-in');
		// 	opening_206.classList.add('fade-in');

		// 	title.classList.add('fade-out');
		// 	title_glitch.classList.add('fade-out');
		// 	describe.classList.add('fade-out');
		// 	describe_glitch.classList.add('fade-out');
		// });

		// function progress() {
		// 	let bar = document.querySelector('.progressbar-inner');
		// 	let bar_rate = document.querySelector('.progressbar-rate');
		// 	let rate = 1;
		// 	let frameId = setInterval(frame, 20);
		// 	function frame() {
		// 		if (rate >= 100) {
		// 			clearInterval(frameId);
		// 		}else{
		// 			rate_set = 1;
		// 			if( rate > 80 ){
		// 				rate_set = 0.5;
		// 			}else if(rate > 50){
		// 				rate_set = 2.5;
		// 			} 
		// 			rate+= rate_set;
		// 			bar.style.width = rate + '%';
		// 			bar_rate.innerText = Math.floor(rate) + '%';
		// 		}
		// 	}
		// }
		// setTimeout(() => { progress();}, 1000);

		// progress bar跑完
		// setTimeout(() => {
		// 	logo.style.display = 'none';
		// 	progress_bar.style.display = 'none';
		// 	mini_bar.style.display = 'none';
		// }, 3800);

		// 影片播放
		// setTimeout(() => {
		// 	video.classList.add('fade-in');
		// 	video.play();
		// 	video_bg.classList.add('fade-in');
		// }, 4600);
		
		setTimeout(() => {
			opening_center.classList.add('fade-in');
			opening_lc.classList.add('fade-in');
			opening_206.classList.add('fade-in');
			if( w > 768 ){
				runScripts(data, 0);
			}
			if( w < 768){
				runScriptsMain(dataMain, 0);
			}
		}, 3500);
		// 原8000
		
		setTimeout(() => {
			opening_bl.classList.add('fade-in','breathing');
		}, 6000);
		// 原11000
		
		

		// jQuery("#tsparticles")
		// .particles()
		// .init(
		// 	{
		// 		detectRetina: false,
		// 		fpsLimit: 60,
		// 		interactivity: {
		// 			detectsOn: "canvas",
		// 			events: {
		// 				onHover: {
		// 					enable: true,
		// 					mode: "bubble"
		// 				},
		// 				resize: true
		// 			},
		// 			modes: {
		// 				bubble: {
		// 					distance: 40,
		// 					duration: 2,
		// 					opacity: 8,
		// 					size: 6,
		// 					speed: 3
		// 				}
		// 			}
		// 		},
		// 		particles: {
		// 			color: {
		// 				value: "#ff0000",
		// 				// animation: {
		// 				// 	enable: true,
		// 				// 	speed: 20,
		// 				// 	sync: true
		// 				// }
		// 			},
		// 			lineLinked: {
		// 				blink: false,
		// 				color: "random",
		// 				consent: false,
		// 				distance: 30,
		// 				enable: true,
		// 				opacity: 0.3,
		// 				width: 0.5
		// 			},
		// 			move: {
		// 				attract: {
		// 					enable: false,
		// 						rotate: {
		// 							x: 600,
		// 							y: 1200
		// 						}
		// 				},
		// 				bounce: false,
		// 				direction: "none",
		// 				enable: true,
		// 				outMode: "bounce",
		// 				random: true,
		// 				speed: 0.5,
		// 				straight: false
		// 			},
		// 			number: {
		// 				density: {
		// 					enable: false,
		// 					area: 2000
		// 				},
		// 				limit: 0,
		// 				value: 200
		// 			},
		// 			opacity: {
		// 				animation: {
		// 					enable: true,
		// 					minimumValue: 0.05,
		// 					speed: 2,
		// 					sync: false
		// 				},
		// 				random: false,
		// 				value: 1
		// 			},
		// 			shape: {
		// 				type: "circle"
		// 			},
		// 			size: {
		// 				animation: {
		// 					enable: false,
		// 					minimumValue: 0.1,
		// 					speed: 40,
		// 					sync: false
		// 				},
		// 				random: true,
		// 				value: 1
		// 			}
		// 		},
		// 		polygon: {
		// 			draw: {
		// 				enable: true,
		// 				lineColor: "rgba(255,255,255,0.2)",
		// 				lineWidth: 0.5
		// 			},
		// 			move: {
		// 				radius: 10
		// 			},
		// 			inlineArrangement: "equidistant",
		// 			scale: 0.023,
		// 			type: "inline",
		// 			url: "../wp-content/themes/vice-dhrk/img/rog-logo.svg"
		// 		},
		// 	},
		// 	function (container) {
		// 		container.pause();
		// 		setTimeout(function(){
		// 			container.play();
		// 		}, 5500);
		// 		setTimeout(() => {
		// 			container.stop();
		// 		}, 8000);
		// 	}
		// );


		// 左上terminal
		// api參考：https://mattboldt.github.io/typed.js/
		// 換行範例參考：https://codepen.io/cluzier/pen/RYMVBP?editors=0110
		let data = [
			{
				strings: ["function getROGAngle(){"],
				postDelay: 1000
			},{
				strings: ["//Some code here then"],
				postDelay: 1000
			},{
				strings: ["ROG_Angle1 = Math(S;", 'ROG_Angle1 = Math.atan(Slope(center, point1));'],
				postDelay: 1000
				
			},{
				strings: ['ROG_Angle2 = Math.atan(Slope(center, point2));'],
				postDelay: 1000

			},{
				strings: ['firstAngle = getStartAngle(ROG_Angle1, point1, center);'],
				postDelay: 1000
			},{
				strings: ['secondAngle = getStartAngle(ROG_Angle2, point2, center);'],
				postDelay: 1000
			},{
				strings: ['ROG_Angle1 = degreesToRadians(firstAngle);'],
				postDelay: 1000
			},{
				strings: ['ROG_Angle2 = degreesToRadians(secondAngle);'],
				postDelay: 1000
			},{
				strings: ['baseRadius = distance(point, center);'],
				postDelay: 1000
			},{
				strings: ['radius = baseRadius + (lines * y);'],
				postDelay: 1000
			},{
				strings: ['p1["x"] = roundValue(radius * Math.cos(radAgle1) + center["x"]);'],
				postDelay: 1000
			},{
				strings: ['p1["y"] = roundValue(radius * Math.sin(radAgle1) + center["y"]);'],
				postDelay: 1000
			},{
				strings: ['pt2["x"] = roundValue(radius * Math.cos(radAgle2) + center["y"]);'],
				postDelay: 1000
			},{
				strings: ['pt2["y"] = roundValue(radius * Math.sin(radAgle2) + center["y"]);'],
				postDelay: 1000
			},{
				strings: ['//Now some more code'],
				postDelay: 1000
			},{
				strings: ['\n'],
				postDelay: 1500
			},{
				strings: ['\n'],
				postDelay: 1500
			},{
				strings: ['\n'],
				postDelay: 1500
			},{
				strings: ['\n'],
				postDelay: 2000
			}
		];


		function runScripts(data, pos) {
			let prompt = jQuery('.prompt');
				script = data[pos];
			// cleanup for next execution
			prompt.removeData();
			jQuery('.typed-cursor').text('');
			prompt.typed({
				strings: script.strings,
				typeSpeed: 0,
				callback: function() {
					let history = jQuery('.ctk-editor').html();
					history = history ? [history] : [];
					history.push(prompt.text());
					// if(script.output) {
					//     history.push(script.output);
					// }
					prompt.html('');
					jQuery('.ctk-editor').html(history.join('<br>'));
					// scroll to bottom of screen
					jQuery('section.terminal').scrollTop(350);
					// Run next script
					pos++;
					if(pos < data.length) {
						setTimeout(function() {
							runScripts(data, pos);
						},script.postDelay || 800);
					}else{
						setTimeout(function(){
							jQuery('.ctk-editor').html('');
							runScripts(data, 0);
						},2000)
					}
				}
			});      
		}

   
		let dataMain = [
			{
				strings: ["“Dare to be different!” is a core value in the booming years of gaming."],
				postDelay: 1000
			},{
				strings: ["Genders, skin colors, races, and languages should not separate us from connecting with each other."],
				postDelay: 1000
			},{
				strings: ["We are vanguards. We are rebels. We stand together."],
				postDelay: 1000
			},{
				strings: ["We gamers prove our existence in our own way."],
				postDelay: 1000
			}
		];

		function runScriptsMain(data, pos) {
			let prompt = jQuery('.prompt-main');
				script = data[pos];
			// cleanup for next execution
			prompt.removeData();
			jQuery('.typed-cursor-main').text('');
			prompt.typed({
				strings: script.strings,
				typeSpeed: 0,
				callback: function() {
					let history = jQuery('.ctk-editor-main').html();
					history = history ? [history] : [];
					history.push('<p>'+prompt.text()+'</p>');

					// history.push('<br>');

					prompt.html('');

					// if(pos%2 == 1){
					// 	jQuery('.ctk-editor-main').html(history.join('<br>'));
					// }else{
						// jQuery('.ctk-editor-main').html(history.join('<br>'));
					// }
					jQuery('.ctk-editor-main').html(history);

					if(pos>2){
						if(pos != data.length-1){
							jQuery('.ctk-editor-main').css('margin-top',(pos-1) * -19 + 'px');	
						}
					}
					jQuery('.terminal-main .typed-cursor').empty();
					// scroll to bottom of screen
					// jQuery('section.terminal-main').scrollTop(1000);
					// Run next script
					pos++;
					if(pos < data.length) {
						setTimeout(function() {
							runScriptsMain(data, pos);
						},script.postDelay || 800);
					}else{
						setTimeout(function(){
							jQuery('.ctk-editor-main').html('');
							jQuery('.ctk-editor-main').css('margin-top','0px');
							runScriptsMain(data, 0);
						},2000)
					}
				}
			});      
		}
	}



});


 