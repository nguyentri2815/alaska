$(function() {
    // =====================================
    // Layouts/loadingPage
    $('#preloader').delay(1000).fadeOut('fast');
    
    // =====================================
    // header/header-bot__bars
    jQuery('.menu-icon').click(function() {
        jQuery(this).toggleClass('opened');
      });
    // =====================================
    // header-bot-right/searchform
    const searchForm = {
        init:function(){
            this.ClickSearch()
        },
        ClickSearch:function(){
            var iconSearch=document.querySelector('.btn-search');
            iconSearch.addEventListener('click',function(e){
                e.preventDefault()
                this.nextElementSibling.classList.toggle('active');
            })
        }

    }
    searchForm.init()
    // =====================================
    // header-bot-right/searchform
    const cart = {
        init:function(){
            this.Clickcart()
        },
        Clickcart:function(){
            var iconcart=document.querySelector('.btn-cart');
            iconcart.addEventListener('click',function(e){
                e.preventDefault()
                this.nextElementSibling.classList.toggle('active');
            })
        }

    }
    cart.init()
    // =====================================
    // mobilemenu
    const mobileMenu ={
        init:function(){
            this.clickBars()
            this.clickLink()
        },
        clickBars:function(){
            var iconBars=document.querySelector('.header-bot__bars');
            var navMobile=document.getElementById('mobileMenu');
            // console.log(screen.width);
            // window.addEventListener('resize',function(){
                // if (screen.width<1023) {
                    iconBars.addEventListener("click",function(){
                        navMobile.classList.toggle('active');
                    })
                // }
            // })
        },
        clickLink:function(){
            var navLink=document.querySelectorAll('.navPage__link');
            var subMenu=document.querySelectorAll('.sub-menu');
            var iconDown=document.querySelectorAll('.navPage__link .fa-angle-down');
            navLink.forEach(element => {
                element.addEventListener('click',function(e){
                    e.preventDefault();
                    if (this.nextElementSibling.classList.contains('active')) {
                        this.nextElementSibling.classList.remove('active')
                        this.children[0].classList.remove('active');
                    }
                    else{
                        for (let i = 0; i < subMenu.length; i++) {
                             subMenu[i].classList.remove('active');
                        }
                        for (let j = 0; j < iconDown.length; j++) {
                            iconDown[j].classList.remove('active');
                        }
                        this.nextElementSibling.classList.toggle('active');
                        this.children[0].classList.toggle('active');
                    }
                })
            });
        }
    }
    mobileMenu.init()
    // =====================================
    // product
    // const hoverImg={
    //     init:function(){
    //         this.hoverimages()
    //     },
    //     hoverimages:function(){
    //         var products =document.querySelectorAll('.product');
    //         products.forEach(element => {
    //             element.addEventListener('mouseover',function(){
    //                 var dataImg=this.children[0].children[0].getAttribute("data-src");
    //                 console.log(dataImg);
    //                 this.children[0].children[0].children[0].setAttribute("src", dataImg);
    //             })
    //         });
    //     }
    // }
    // hoverImg.init()
    // =====================================
    // header/header-bot__bars
    $('.sub-menu__slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
      // =====================================
    // banner
    $('.banner__slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
      // =====================================
    // new
    $('.new__slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        // autoplay:true,
        // autoplayTimeout:4000,
        // autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
      // =====================================
    // sellers
    $('.sellers__slide').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        // autoplay:true,
        // autoplayTimeout:4000,
        // autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            560:{
                items:2,
                dots:true
            },
            768:{
                items:3,
                dots:true
            },
            1026:{
                items:4,
                dots:true
            }
        }
    })
      // =====================================
    // sellers
    $('.Testimonials__slide').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            458:{
                items:1,
                dots:false
            },
            768:{
                items:2,
                dots:false
            },
            1026:{
                items:3,
                dots:false
            }
        }
    })
      // =====================================
    // sellers
    $('.blog__slide').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            458:{
                items:1,
                dots:false
            },
            768:{
                items:2,
                dots:false
            },
            1026:{
                items:2,
                dots:false
            }
        }
    })
     // =====================================
    // footer/footer-top__slide
    $('.footer-top__slide').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:false
            },
            425:{
                items:2,
                nav:false,
                dots:false
            },
            660:{
                items:4,
                nav:false,
                dots:false
            },
            980:{
                items:6,
                nav:false,
                loop:false,
                dots:false
            }
        }
    })
});