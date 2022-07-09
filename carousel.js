// when #go-right is clicked:
//   add 'hidden' to the current slide
//   remove .hidden to the following slide
// when #go-left is clicked:
//   add 'hidden' to the current slide
//   remove .hidden to the previous slide
// when .dot is clicked:
//   add .active to current dot
//   remove .active from the previous .dot
//   add .hidden to the previous slide
//   remove .hidden from the current slide

const SLIDES = $(".festivalfood > .slide");
const DOTS = $('.dots>.dot');

function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1;
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);

}

/* See "show previous slide snippet" to use */
function prevSlide() {

  let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1;
  /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  let dots=DOTS;
  dots.removeClass('active');
  dots.eq(index).addClass('active');
}

$("#go-left").click(function() {
  prevSlide();
});
$("#go-right").click(function() {
  nextSlide();
});
$('#dot1').click(function(){
  showSlide(1);
});
$('#dot2').click(function(){
  showSlide(2);
});
$('#dot3').click(function(){
  showSlide(3);
});
$('#dot4').click(function(){
  showSlide(4);
});
