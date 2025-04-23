$(document).ready(function () {
  // Toggle menú principal
  $(".menu-toggle").click(function () {
    $(".menu").slideToggle(); // animación al abrir/cerrar
    $(this).toggleClass("active"); // cambia ícono hamburguesa a X
  });

  // Submenús en móviles
  $(".submenu-toggle").click(function (e) {
    e.preventDefault();
    const parentLi = $(this).parent();
    const submenu = parentLi.find(".submenu");

    parentLi.toggleClass("show-submenu");
    submenu.slideToggle(); // animación para desplegar submenú
  });

  // Para evitar que quede abierto al cambiar tamaño de pantalla
  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".menu").removeAttr("style");
      $(".submenu").removeAttr("style");
      $(".menu-toggle").removeClass("active");
    }
  });
});
