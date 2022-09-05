const cart1 = document.querySelector(".cart1");
const cartAccount = document.querySelector(".cart_account");
const imageLarge = document.querySelector(".large img");
const slideShowBox = document.querySelector(".slideshow-container");
const slide = document.querySelector(".slides img");
const filter = document.querySelector("#color-overlay");
const close = document.querySelector(".close");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
//const thumb1img = document.querySelector(".oneThumb img");
 //const thumb2img = document.querySelector(".twoThumb img");
//const thumb3img = document.querySelector(".threeThumb img");
 //const thumb4img = document.querySelector(".fourThumb img");
//const thumb1 = document.querySelector(".oneThumb ");
//const thumb2 = document.querySelector(".twoThumb ");
//const thumb3 = document.querySelector(".threeThumb ");
//const thumb4 = document.querySelector(".fourThumb ");
const slides = document.querySelectorAll(".slides img");
const thumbs = document.querySelectorAll(".thumbs img");
const box = document.querySelectorAll(".thumbs div");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".cart h6");
const addToCart = document.querySelector(".right button");
let cartClosed = true;
const cartBox= document.createElement("div");

if (screen.width > 768) {
  cartAccount.appendChild(cartBox);
  cartBox.setAttribute(
    "style",
    " width:68vw; height:40vh;  position:absolute; top:50px; right:20px; z-index:70; background:white; box-shadow:-5px 5px 20px hsl(220, 14%, 75%); display:none"
  );
} else {
  document.body.appendChild(cartBox);
  cartBox.setAttribute(
    "style",
    " width:80vw; height:40vh;  position:absolute; top:100px; left:18.5vw; z-index:70; background:white; display:none"
  )};

cartBox.classList.add("cartBox");
cartBox.innerHTML =
  "<h5>Cart</h5><hr><img ><p>Your cart is empty.</p><img><button>Checkout</button>";
const imageP = document.querySelector(".cartBox img");
const checkout = document.querySelector(".cartBox button");
const deleteItem = document.querySelector(".cartBox p ~ img");
deleteItem.style.display = "none";
imageP.style.display = "none";
checkout.style.display = "none";
const paragraph = document.querySelector(".cartBox p");
if (screen.width < 768) {
  paragraph.setAttribute("style", "padding:20vw");
}
cart1.addEventListener("click", function (e) {
  if (cartClosed) {
    cartBox.style.display = "block";
    cartClosed = false;
  } else {
    cartBox.style.display = "none";
    cartClosed = true;
  }
});
const notification = document.createElement("div");
notification.setAttribute(
  "style",
  "padding:5px 10px;border-radius:50%; background-color:hsl(26, 100%, 55%); font-size:10px;position:absolute;top:10px; display:none;"
);
cartAccount.appendChild(notification);
let slideShow = false;
imageLarge.addEventListener("click", function (e) {
  slideShowBox.style.display = "block";
  filter.style.display = "block";
});
close.addEventListener("click", function () {
  slideShowBox.style.display = "none";
  filter.style.display = "none";
});
close.addEventListener("mousemove", function () {
  close.src = "img/icon-close copy.svg";
  
});
close.addEventListener("mouseout", function () {
  close.src = "img/icon-close.svg";
});
const pics = [
  "img/image-product-1.jpg",
  "img/image-product-2.jpg",
  "img/image-product-3.jpg",
  "img/image-product-4.jpg",
];

next.addEventListener("mousemove", function () {
next.src = "img/icon-next copy.svg";
});
next.addEventListener("mouseout", function () {
  next.src = "img/icon-next.svg";
});
previous.addEventListener("mousemove", function () {
  previous.src = "img/icon-previous copy.svg";
});
previous.addEventListener("mouseout", function () {
  previous.src = "img/icon-previous.svg";
});

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let x = 0; x < thumbs.length; x++) {
    thumbs[x].classList.remove("activeThumb");
    box[x].classList.remove("activeBox");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbs[slideIndex - 1].classList.add("activeThumb");
  box[slideIndex - 1].classList.add("activeBox");
}
const images = document.querySelectorAll(".large img");
const thumbnail = document.querySelectorAll(".thumbnail img");
const box1 = document.querySelectorAll(".thumbnail div");
let imageIndex = 1;
function currentImage(n) {
  showImage((imageIndex = n));
}
function showImage(n) {
  for (let i = 0; i < images.length; i++) {
    thumbnail[i].classList.remove("activeThumb");
    box1[i].classList.remove("activeBox");
  }
  for (let x = 0; x < images.length; x++) {
    images[x].style.display = "none";
  }
  images[imageIndex].style.display = "block";
  thumbnail[imageIndex].classList.add("activeThumb");
  box1[imageIndex].classList.add("activeBox");
}
let unitPrice = 125;
let unit = 0;
plus.addEventListener("click", function () {
  unit++;
  number.textContent = unit;
});
minus.addEventListener("click", function () {
  if (unit <= 0) {
    unit = 0;
    unit.textContent = unit;
  } else {
    unit--;
    number.textContent = unit;
  }
});
deleteItem.addEventListener("click", function () {
  if (screen.width > 768) {
    cartBox.setAttribute(
      "style",
      " width:20vw; height:14vw; border-radius:8px; position:absolute; top:50px; right:0px; z-index:50; background:white; box-shadow:-5px 5px 20px hsl(220, 14%, 75%); "
    );
  } else {
    cartBox.setAttribute(
      "style",
      " width:90vw; height:300px; border-radius:8px; position:absolute; top:100px; right:10px; z-index:50; background:white; "
    );
    const paragraph = document.querySelector(".cartBox p");
    paragraph.setAttribute("style", "padding:20vw 0");
  }
  imageP.style.display = "none";
  deleteItem.style.display = "none";
  checkout.style.display = "none";
  paragraph.textContent = "Your cart is empty.";
  paragraph.style.margin = "16% 28%";
  notification.style.display = "none";
});

const productName = document.querySelector(".product");
addToCart.addEventListener("click", function () {
  cartBox.style.height = "max-content";
  let price = unit * unitPrice;
  console.log(price);
  if (screen.width > 768) {
    paragraph.innerHTML = `${productName.innerText}<br>$${unitPrice}×${unit} <span style="color:black ;font-weight:bold">$${price}</span>`;
    imageP.src = "img/image-product-1.jpg";
    imageP.style.cssText =
      "width:50px; margin-top:10px ;margin-left:20px; border-radius:4px; display:inline-block;float:left ";
    paragraph.style.cssText =
      "font-size:.8rem ;display:inline-block; position:absolute; margin:10px 7px; line-height:25px; text-align:center";
    checkout.style.cssText = "display:block; margin:50px auto 20px; width:90%";
    deleteItem.src = "img/icon-delete.svg";
    deleteItem.style.cssText =
      "display:inline-block; width:15px; position:relative; top:36px; left:60%; cursor:pointer";
    notification.style.display = "inline-block";
    notification.textContent = unit;
  } else {
    paragraph.innerHTML = `${productName.innerText}<br>$${unitPrice}×${unit} <span style="color:black ;font-weight:bold">$${price}</span>`;
    imageP.src = "img/image-product-1.jpg";
    imageP.style.cssText =
      "width:50px; margin-top:10px ;margin-left:20px; border-radius:4px; display:inline-block;float:left ";
    paragraph.style.cssText =
      "font-size:.8rem ;display:inline-block; position:absolute;right:-20px; margin:10px 7px; line-height:25px; text-align:center";
    checkout.style.cssText = "display:block; margin:50px auto 20px; width:90%";
    deleteItem.src = "img/icon-delete.svg";
    deleteItem.style.cssText =
      "display:inline-block; width:15px; position:relative; top:36px; left:60%; cursor:pointer";
    notification.style.display = "inline-block";
    notification.textContent = unit;
  }
});
const hamburgerMenu = document.getElementById("menu");
const closeHamburger = document.querySelector(".close_sideMenu");
const sideMenu = document.querySelector(".sideMenu");
hamburgerMenu.addEventListener("click", function () {
  sideMenu.style.display = "inline-block";
});
closeHamburger.addEventListener("click", function () {
  sideMenu.style.display = "none";
});