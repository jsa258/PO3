const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  });
}
navSlide();


/*
when user clicks, submit, the content in the input will disappear
*/

$(document).ready(function() {
  $(".btn").click(function(){
    $(".input input,.msg textarea").val("")
  });
  });
