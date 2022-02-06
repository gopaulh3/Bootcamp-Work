// Scrollbar and Navbar menu activation

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');


menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navigation.classList.toggle("active");
}

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navigation.classList.remove("active");
}

const filterArr = [{
  id: 1293,
  name: "Check Hood Cotton Blend Hooded Top",
  image: "https://assets.burberry.com/is/image/Burberryltd/5198ECBB-59B3-477E-8B70-9DF0D51CDBC2.jpg?$BBY_V2_SL_1x1$&wid=1876&hei=1876",
  price: 750
}, {
  id: 1295,
  name: "Slim Fit Monogram Motif Stretch Cotton Poplin Shirt",
  image: "https://assets.burberry.com/is/image/Burberryltd/83205DC0-E29E-4949-879F-BD5F477BC415.jpg?$BBY_V2_SL_1x1$&wid=1876&hei=1876",
  price: 200
}, {
  id: 1297,
  name: "14k White Gold 1.00 Carat Ring",
  image: "https://uk.pandora.net/dw/image/v2/AAKS_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwe2aa6bd2/images/productimages/main/159451C01_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
  price: 1025
}];

// const fContainer = document.getElementById('recyclerView-row');

// filterArr.forEach((result, idx) => {
//   const content = `
//   <div class="col-lg-5 col-md-6" id="img-${idx}">
//   <div class="filter-card rcard">
//     <div class="rec-img-cont">
//     <div class="rec-img"><img src=${result.image}  alt="">
//     </div>
//     </div>
//   </div>
// </div>

// <div class="col-lg-4 col-md-5" id="des-${idx}">
//   <div class="filter-card rcard">
//     <h2 class="rec-h2">${result.name} </h2>
//       <h2 class="price" id="p${idx}">£${result.price}</h2>
//     <div class="price-n-pref">
//       <div class="preference">
//         <label for="quantity">Quantity</label>
//         <input type="text" name="quantity" id="q${idx}" value="1" onchange="quantChanged(this)">
//     </div>
//       <h2 class="subtotal" id="st${idx}">£${result.price} </h2>
//     </div>
//     <h2 class="remove" id="r${idx}" onclick="remove(this)">remove</h2>
//   </div>
// </div>
//   `;
//   fContainer.insertAdjacentHTML("afterbegin", content);
// });





