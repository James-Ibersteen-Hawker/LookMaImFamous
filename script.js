window.onload = function startUp() {
  bigPic();
};

function bigPic() {
  let image = document.getElementsByClassName("main-image")[0];
  let header = document.getElementsByTagName("HEADER")[0];
  let title = document.getElementsByClassName("title")[0];
  let height = window.innerHeight;
  let remaining = height - header.offsetHeight;
  image.style.height = remaining + "px";
}

// window.addEventListener("scroll", scrollBlur);

// function scrollBlur() {
//   let image = document.getElementsByClassName("main-image")[0];
//   image.setAttribute("style", `filter: blur(${scrollY / 100}%);`);
// }
