console.log("hii");
const items = [
  {
    id: 1,
    imgSrc: "img/products/f1.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 2,
    imgSrc: "img/products/f2.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 3,
    imgSrc: "img/products/f3.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 4,
    imgSrc: "img/products/f4.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 5,
    imgSrc: "img/products/f5.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 6,
    imgSrc: "img/products/f6.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 7,
    imgSrc: "img/products/f7.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 8,
    imgSrc: "img/products/f8.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 9,
    imgSrc: "img/products/n1.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 10,
    imgSrc: "img/products/n2.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 11,
    imgSrc: "img/products/n3.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 12,
    imgSrc: "img/products/n4.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 13,
    imgSrc: "img/products/n5.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 14,
    imgSrc: "img/products/n6.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 15,
    imgSrc: "img/products/n7.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  },
  {
    id: 16,
    imgSrc: "img/products/n8.jpg",
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    cartImgSrc: "img/cart-shopping-solid.svg"
  }
];

let bagItems =[];
onLoad();
function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];
displayItemsOnHomePage();
displayBagIcon();
}
function addToBag(itemId){    
 if (!bagItems.includes(itemId)) {
        
        bagItems.push(itemId);
        console.log(itemId);
        
        localStorage.setItem('bagItems', JSON.stringify(bagItems));
        
        
        displayBagIcon();
    } else {
        console.log("Item already exists in the bag");
    }
}
function displayBagIcon(){
let bagItemCountElement = document.querySelector('.bag-items');

if(bagItems.length > 0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText=bagItems.length;
} else {
    bagItemCountElement.style.visibility = 'hidden';  
}


}

function displayItemsOnHomePage(){
    
let itemsContainerElement = document.querySelector(".pro-container");
// console.log(itemsContainerElement);
if(!itemsContainerElement){
    return;
}
let innerHTML='';

items.forEach(item => { 
    innerHTML +=  `<div class="pro">
    <img src="${item.imgSrc}" class="proimg" alt="" />
    <div class="des">
      <span>${item.brand}</span>
      <h5>${item.title}</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>$${item.price}</h4>
    </div>
    <div class="cartimgbox">
      <p onclick="addToBag(${item.id})">
        <img
          src="img/cart-shopping-solid.svg"
          alt="cartimg"
          class="cartimg"
        />
      </p>
    </div>
    </div>`;
    
});

itemsContainerElement.innerHTML = innerHTML;

}

document.addEventListener("DOMContentLoaded", function() {
  const bar = document.getElementById("bar");
  const nav = document.getElementById("navbar");
  const close = document.getElementById("close");

  // Open navbar when bar is clicked
  if (bar) {
      bar.addEventListener("click", () => {
          nav.classList.add("active");
      });
  }

  // Close navbar when close button is clicked
  if (close) {
      close.addEventListener("click", () => {
          nav.classList.remove("active");
      });
  }

  // Close navbar when clicking outside of it
  document.addEventListener("click", (event) => {
      if (nav.classList.contains("active") && !nav.contains(event.target) && !bar.contains(event.target)) {
          nav.classList.remove("active");
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Select all remove buttons
  const removeButtons = document.querySelectorAll("tbody tr td:first-child a");

  // Add event listeners to each remove button
  removeButtons.forEach(button => {
      button.addEventListener("click", (event)=> {
          event.preventDefault(); // Prevent the default link behavior
          const row = button.closest("tr"); // Find the closest <tr> ancestor
          if (row) {
              row.remove(); // Remove the row from the table
          }
      });
  });
});

