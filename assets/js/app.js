// Owl carousel
$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  lazyLoad:true,
  autoplay:false,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})
