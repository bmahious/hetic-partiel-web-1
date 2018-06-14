var header = document.querySelector('#header');
document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    header.style.display = "none";
  } else if (event.deltaY < 0) {
    header.style.display = "block";
  }
})
