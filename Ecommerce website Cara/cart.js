// const CONVENIENCE_FEES =99;
let bagItemObjects;
onLoadCart();
function onLoadCart() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
 
}

function displayBagSummary() {
  let bagSummaryElement = document.querySelector("#subtotal");
// let totalItem = bagItemObjects.length;
let totalMRP = 0;
// let totalDiscount = 0;
let finalPayment=0;
bagItemObjects.forEach(bagItem=>{
totalMRP +=bagItem.price;
// totalDiscount += bagItem.original_price - bagItem.current_price;
finalPayment = totalMRP;
});
  bagSummaryElement.innerHTML = `<h3>Cart Totals</h3>
  <table>
     <tr>
      <td>Cart Subtotal</td>
      <td>$ ${totalMRP}</td>
     </tr>
     <tr>
      <td>Shipping</td>
      <td>Free</td>
     </tr>
     <tr>
      <td><strong>Total</strong></td>
      <td><strong>$${finalPayment}</strong></td>
     </tr>
  </table>
  <button class="normal paymentBtn">Proceed to checkout</button>`;
}

function loadBagItemObjects() {
  console.log(bagItems);

  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems() {
  let containerElement = document.querySelector("#cart.section-p1 table tbody")
  let innerHTML = "";
  bagItemObjects.forEach((bagItem) => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId !== itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

function generateItemHTML(item) {
  return `
  <tr>
  <td><a href="#" onclick="removeFromBag(${item.id})"><i class="far fa-times-circle"></i></a></td>
  <td><img src="${item.imgSrc}" alt=""></td>
  <td>${item.title}</td>
  <td>$${item.price}</td>
  <td><input type="number" value="1"></td>
  <td>$${item.price}</td>
  </tr>`;
}
//payment tab

const productButton = document.querySelector("#subtotal");
        const payment = document.querySelector(".payment");
        const close = document.querySelector(".close");

        productButton.addEventListener("click",()=>{
            payment.style.display = "flex";
        });

        close.addEventListener("click", ()=>{
            payment.style.display="none";
        });
 