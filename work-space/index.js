const a = document.getElementsByClassName("grid-section");
const b = document.querySelectorAll(".grid-section");

const arrayLike = Array.from(a);

arrayLike.forEach(function name(item) {
  item.classList.add("rosa");
  console.log(item);
});
