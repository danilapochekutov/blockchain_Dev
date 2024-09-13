function animation() {
	let wow = new WOW({
		boxClass: "wow",
		animateClass: "animate__animated",
		offset: 0,
		mobile: true,
		live: true,
		callback: function (box) {
			if (box.classList.contains("reviews")) {
				const swiper = new Swiper(".reviews__container", {		
                    loop: true,
                    speed: 800, 
                    freeMode: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        1400: {
                            slidesPerView: 4.3,
                            centeredSlides: true,
                            initialSlide: 3,
                        },
                        360: {
                            slidesPerView: 'auto',
                            initialSlide: 0,
                            spaceBetween: 0,
                            centeredSlides: false,
                        },
                    },
                });
                
			}
            
            if (box.classList.contains("footer")) {
                let redirectPerformed = false;
                setTimeout(() => {
                    if (!redirectPerformed) {
                        window.open("https://roobinium.io/", "_blank");
                        redirectPerformed = true;
                    }
                }, 1000);
            }

            // if (box.classList.contains("footer")) {
            //     setTimeout(() => {
            //         // let userConfirmed = confirm("Вы хотите открыть сайт в новой вкладке?");
            //         // if (userConfirmed) {
            //         //     window.open("https://roobinium.io/", "_blank");
            //         // }

            //         // window.location.href = " https://roobinium.io/"; 
            //         window.open("https://roobinium.io/", "_blank"); 

            //     }, 1000);
            // }
            
		},
	});
    wow.init();
}

export default animation;
