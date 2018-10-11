AOS.init();


// Animación texto
$(document).ready(function() {
  let mouseX, mouseY;
  let ww = $(window).width();
  let wh = $(window).height();
  let traX, traY;
  $(document).mousemove(function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    traX = ((7 * mouseX) / 570) + 80;
    traY = ((7 * mouseY) / 570) + 90;
    console.log(traX);
    $('.title').css({'background-position': traX + '%' + traY + '%' });
  });
});

// Animación proyectos
$('.hover').mouseleave(
  function() {
    $(this).removeClass('hover');
  }
);

function aboutMe() {
  location.href = '#aboutMe';
}

function navBarMenu() {
  location.href = '#navBarMenu';
}

function projects() {
  location.href = '#projects';
}

function skills() {
  location.href = '#skills';
}

