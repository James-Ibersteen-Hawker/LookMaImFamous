window.onload = function startUp() {
  bigPic();
};

function bigPic() {
  let image = document.getElementsByClassName("main-image")[0];
  let header = document.getElementsByTagName("HEADER")[0];
  let title = document.getElementsByClassName("title")[0];
  let height = window.innerHeight;
  let remaining = height - header.offsetHeight - title.offsetHeight;
  image.style.height = remaining + "px";
}

let opened = false;
function open_nav() {
  let menu = document.getElementsByClassName("mega-menu")[0];
  let image = document.getElementsByClassName("jumbo-image")[0];
  if (opened == false) {
    menu.classList.remove("up");
    menu.classList.add("down");
    image.classList.remove("downpic");
    image.classList.add("uppic");
    opened = true;
  } else if (opened == true) {
    menu.classList.remove("down");
    menu.classList.add("up");
    image.classList.remove("uppic");
    image.classList.add("downpic");
    opened = false;
  }
}

function linker(link) {
  window.location = link;
}
