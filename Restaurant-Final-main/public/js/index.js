const filterArr = [{
  fImage: "/images/burger.png",
  fName: "Burgers"
}, {
  fImage: "/images/pizza.png",
  fName: "Pizza"
}, {
  fImage: "/images/curry.png",
  fName: "Curry"
}];

const fContainer = document.getElementById('filter-row');

filterArr.forEach((result, idx) => {
  const content = `
  <div class="col-4">
  <div class="filter-card fcard">
    <div class="filter-img-cont"><img class="filter-img" src=${result.fImage} alt=""></div>
    <div class="filter-main-text">
      <h2 class="filter-h2">${result.fName}</h2>
      <a href="#" class="chevron">
        <ion-icon class="white-chevron" name="chevron-forward-circle-outline"></ion-icon>
        <ion-icon class="black-chevron" name="chevron-forward-circle"></ion-icon>
        </a>
    </div>
  </div>
</div>
  `;
  fContainer.innerHTML += content;
});

















// const calcColumnSize = arrLength => {
//   if (arrLength === 5 || arrLength > 6) {
//     return 2;
//   } else {
//     return 12/arrLength;
//   }
// }
// const columnSize = calcColumnSize(apiResult2.length);
// console.log(`The column size is ${columnSize}`);