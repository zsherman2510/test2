// var hamburger = document.getElementById("hamburger");

// var menuMobile = document.getElementById("menu_mobile");

// hamburger.addEventListener("click", function () {
//   menuMobile.classList.contains("menu_show")
//     ? menuMobile.classList.remove("menu_show")
//     : menuMobile.classList.add("menu_show");
// });

var hamburger = document.getElementById("hamburger");

var menuMobile = document.getElementById("menu_mobile");

hamburger.addEventListener("click", function () {
  menuMobile.classList.contains("menu_show")
    ? menuMobile.classList.remove("menu_show")
    : menuMobile.classList.add("menu_show");
});
