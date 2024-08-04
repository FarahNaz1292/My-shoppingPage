
// Creating DOM Elements
const items = document.querySelectorAll("#items");
const itemsName = document.querySelectorAll(".itemName").value;
const itemsPrice = parseInt(document.querySelectorAll(".price").value);
const cartItems = document.getElementById("cartItems");
//Clicking on items
let cart=[]
function addProduct(){
    if(itemsName){
        const product={name: itemsName, price: itemsPrice}
        cart.push(product.name)
        updateCart()
        calculateTotal()

    }
}
function updateCart(){
    cartItems.innerHTML=''
    cart.forEach((product, i) => {
        const li= document.createElement("li")
        li.textContent=`${product.name}`
      cartItems.appendChild(li)
    });
}
let total=0;
function calculateTotal(){
  total=cart.reduce((acc,product)=>acc +product.itemsPrice,0)
  document.getElementById("total")= `${total}`
  if(total<=200){
    const discountedTotal=total-0.20
  document.getElementById("discountedTotal")=`${discountedTotal}`
  }

}

  


