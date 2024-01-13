const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var a = document.querySelector("#elem1")

var f = document.querySelector("#fixed-img")
var elem_c =  document.querySelector("#elem-c")
elem_c.addEventListener("mouseenter",function(){

    f.style.display = "block"
})
elem_c.addEventListener("mouseleave",function(){

    f.style.display = "none"
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-image")
        f.style.backgroundImage = `url(${img})`
    })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});