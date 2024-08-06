const addedCartItems = document.getElementById("cartitems");
const totalPrice=document.getElementById("totalItemPrice")
const grandTotal=document.getElementById("total")
const discountedTotal=document.getElementById("discountedTotal")
const couponBtn=document.getElementById("coupon-btn")
const purchaseBtn=document.getElementById("purchasebtn")
const couponValue= document.getElementById("coupon")


let total = 0;
function addToCart(target) {
  const cartItem = target.childNodes[3].childNodes[3].innerText;
  const priceString = target.childNodes[3].childNodes[5].innerText.slice(1);
  const price = parseFloat(priceString);
  const cartList = document.createElement("li");
  cartList.innerText = cartItem;
  addedCartItems.appendChild(cartList);
  total += price;
  totalPrice.innerHTML=total
  grandTotal.innerHTML=total
  
  if (total>0) {
    purchaseBtn.removeAttribute('disabled')
  } 
  if(total>=200){
   couponBtn.removeAttribute('disabled')
  }  
}
couponBtn.addEventListener("click",()=>{
  const coupon=couponValue.value
  if(coupon=="SELL200"){
    const discountedPrice=total*0.20
   discountedTotal.innerText=discountedPrice
   grandTotal.innerText=total-discountedPrice
  }
} )



