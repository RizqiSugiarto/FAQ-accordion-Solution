function toogleRespone(ParagrafId, imageId) {
  var paragraf = document.getElementById(ParagrafId);
  var image = document.getElementById(imageId);

  paragraf.classList.toggle("hidden");

  if (paragraf.classList.contains("hidden")) {
    image.src = "./assets/images/icon-plus.svg";
  } else {
    image.src = "./assets/images/icon-minus.svg";
  }
}
