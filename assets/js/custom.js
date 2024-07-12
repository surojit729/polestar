jQuery(document).ready(function () {
    // sticky_header
    jQuery(function () {
        var shrinkHeader = 2;
        jQuery(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                jQuery('header').addClass('sticky');
            } else {
                jQuery('header').removeClass('sticky');
            }
        });

        function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop; }
    });

    // Responsive_navigation
    jQuery(".menu_btn").click(function () {
        jQuery("body").toggleClass("mobile_menu_active");
        jQuery(".overlay").click(function () {
            jQuery("body").removeClass("mobile_menu_active");
        })
    });

    // Sub_menu
    jQuery(".hdr_menu ul li.menu-item-has-children > a").after("<div class='sub_menu_opener'><i class='fas fa-chevron-down'></i></div>");
    jQuery(".sub_menu_opener").click(function () {
        jQuery('.hdr_menu .sub-menu').slideUp();
        jQuery("body").removeClass("sub_menu_active");
        if (jQuery(this).parent().find(".sub-menu").css('display') == 'none') {
            jQuery(this).parent().find(".sub-menu").slideDown();
            jQuery("body").addClass("sub_menu_active");
        } else {
            jQuery(this).parent().find(".sub-menu").slideUp();
            jQuery("body").removeClass("sub_menu_active");
        }
    });

    jQuery(".sub_menu_opener").click(function () {
        if (jQuery(this).parents(".hdr_menu ul > li").hasClass('sub_menu_open')) {
            jQuery(this).parents(".hdr_menu ul > li").removeClass('sub_menu_open');
        } else {
            jQuery('.hdr_menu ul > li').removeClass("sub_menu_open");
            jQuery(this).parents(".hdr_menu ul > li").addClass("sub_menu_open");
        }
    });

    // show_modal
    // jQuery("#case_study_dtls_modal").modal({})

    // Scroll_top_top
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery(".scrollup").addClass("active");
        } else {
            jQuery(".scrollup").removeClass("active");
        }
    });

    jQuery(".scrollup").on("click", function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    // AOS
    jQuery(function () {
        AOS.init({
            once: false,
            throttleDelay: 0,
            offset: 0,
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            }
        });
    });
    let scrollRef = 0;

    window.addEventListener('scroll', function () {
        // increase value up to 10, then refresh AOS
        scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
    // Project Slider
    new Swiper('.projectSlider', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        slideToClickedSlide: true,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        speed: 1000,
        // loopAdditionalSlides: 5,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            318: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
    new Swiper('.projectGallerySlider', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        slideToClickedSlide: true,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        speed: 1000,
        // loopAdditionalSlides: 5,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            318: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });

    // Location Slider
    new Swiper('.relatedLocationSlider', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 40,
        slideToClickedSlide: true,
        loop: false,
        speed: 1000,
        // loopAdditionalSlides: 5,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            318: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });
    // Related Project

    new Swiper('.relatedProjectSlider', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 40,
        slideToClickedSlide: true,
        loop: false,
        speed: 1000,
        // loopAdditionalSlides: 5,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            318: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
    // Testimonial Slider
    new Swiper('.testimonial-slider-outer .swiper', {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 0,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".testimonial-slider-nav .swiper-button-next",
            prevEl: ".testimonial-slider-nav .swiper-button-prev",
        },
    });
    // hamburger-menu
    jQuery('.menu-toggle-btn').click(function () {
        jQuery('.off-canvas-menu-outer').toggleClass('show');
        jQuery('body').css({ 'overflow-y': 'hidden' });
        setTimeout(function () {
            jQuery('body').addClass('offcCanvasActive');
        }, 0);
    });
    jQuery('.off-canvas-close-btn,.overlay').click(function () {
        jQuery('.off-canvas-menu-outer').removeClass('show');
        jQuery('body').removeClass('offcCanvasActive');
    });
    jQuery(".off-canvas-close-btn,.overlay").click(function () {
        setTimeout(function () {
            jQuery('body').css({ 'overflow-y': 'scroll' });
        }, 300);
    });


});