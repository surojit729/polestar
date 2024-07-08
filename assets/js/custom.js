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

    // tabCumAccordian
    jQuery('.tabPan').prepend('<span class="tabTitleHead"></span>');
    jQuery('.tabNav li').each(function () {
        var index = jQuery(this).index();
        var tdt = jQuery(this).text();
        jQuery(this).closest('.tabCumAccordian').find('.tabPan').eq(index).children('.tabTitleHead').text(tdt);
    });
    jQuery('.tabNav li:first-child, .tabPan:first-child .tabTitleHead').addClass('active');
    jQuery('.tabPan .tabInner').hide();
    jQuery('.tabPan:first-child .tabInner').show();
    jQuery('.tabNav li').click(function () {
        var index = jQuery(this).index();
        jQuery(this).siblings().removeClass('active');
        jQuery(this).addClass('active');
        jQuery(this).closest('.tabNav').next('.tabMain').find('.tabPan .tabInner').hide();
        jQuery(this).closest('.tabNav').next('.tabMain').find('.tabPan .tabTitleHead').removeClass('active');
        jQuery(this).closest('.tabNav').next('.tabMain').find('.tabPan').eq(index).children('.tabInner').show();
        jQuery(this).closest('.tabNav').next('.tabMain').find('.tabPan').eq(index).find('.tabTitleHead').addClass('active');
        return false;
    });
    jQuery('.tabTitleHead').click(function () {
        var index = jQuery(this).parent('.tabPan').index();
        jQuery(this).parent('.tabPan').siblings('.tabPan').children('.tabInner').slideUp(200)
        jQuery(this).next('.tabInner').slideToggle(200);
        jQuery(this).closest('.tabMain').prev('.tabNav').find('li').removeClass('active');
        jQuery(this).closest('.tabMain').prev('.tabNav').find('li').eq(index).toggleClass('active');
        jQuery(this).parent('.tabPan').siblings().find('.tabTitleHead').removeClass('active');
        jQuery(this).toggleClass('active');
    });
    jQuery(".tabImage").hide();
    jQuery(".tabImage:first-child").show();
    var tabImg = jQuery('.tabWithImage');
    if (tabImg.length) {
        jQuery('.tabLink').click(function () {
            var index = jQuery(this).index();
            jQuery(this).closest('.tabWithImage').find(".tabImage").eq(index).show();
            jQuery(this).closest('.tabWithImage').find(".tabImage").eq(index).siblings().hide();
        });
    }

    /*
        // Cache selectors
        var topMenu = jQuery(".scrollSpy"),
            topMenuHeight = topMenu.outerHeight() + 150,
            // All list items
            menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function () {
                var item = jQuery(jQuery(this).attr("href"));
                if (item.length) { return item; }
            });
    
        // Bind to scroll
        jQuery(window).scroll(function () {
            // Get container scroll position
            var fromTop = jQuery(this).scrollTop() + topMenuHeight;
    
            // Get id of current scroll item
            var cur = scrollItems.map(function () {
                if (jQuery(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        });
        var id = 0
        $(".locationDetailsContentOuter h2").each(function () {
            $(this).attr("id", "item-" + id)
            id++
        })
    
        var searchArea = $(".locationDetailsContentOuter")
    
        var blockDynamic = $(".scrollSpy")
        searchArea.find("h2").each(function (i, e) {
            var title = $(this).text()
            blockDynamic.append(
                '<a href="#item-' + i + '"><h3>' + title + "</h3></a>"
            )
        })
    */
    // Scrollspy
    // jQuery("body").scrollspy({
    //     target: ".scrollSpy",
    //     offset: 270,
    // })
    // Cache selectors
    var topMenu = jQuery(".scrollSpy"),
        topMenuHeight = topMenu.outerHeight() + 50,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = jQuery(jQuery(this).attr("href"));
            if (item.length) { return item; }
        });
    // Bind to scroll
    jQuery(window).scroll(function () {
        // Get container scroll position
        var fromTop = jQuery(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if (jQuery(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    });
    // Blog Side Menu Scroll
    jQuery(".scrollSpy a").each(function () {
        jQuery(this).on("click", function (event) {
            event.preventDefault()
            jQuery("html, body").animate(
                {
                    scrollTop: jQuery(jQuery(this).attr("href")).offset().top - 150,
                },
                "slow"
            )
        })
    })
    // Sidebar Location Toogle
    $(".toggleBtn p").click(function () {
        $(this).text(function (i, v) {
            return v === 'view More +' ? 'View less' : 'view More +'
        });
    });
    jQuery(".toggleBtn p").click(function () {
        jQuery(".locationMenu").toggleClass("active");
    });

});