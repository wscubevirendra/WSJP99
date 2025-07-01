var navBar = document.querySelector("nav ul");
var togglebtn = document.querySelector("#togglebtn");
var black_bg_overlay = document.querySelector(".black-bg-overlay")



togglebtn.addEventListener(
    "click",
    function () {
        navBar.classList.toggle("open")
        togglebtn.classList.toggle("fa-xmark")
        black_bg_overlay.classList.add("done")

    }
)


black_bg_overlay.addEventListener(
    "click",
    function () {
        navBar.classList.remove("open")
        togglebtn.classList.toggle("fa-xmark")
        black_bg_overlay.classList.remove("done")
    }
)



document.addEventListener(
    "scroll",
    function () {
        console.clear()
        if (window.scrollY > 63) {
            document.body.classList.add("sticky")
        } else {
            document.body.classList.remove("sticky")

        }
    }
)




$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


