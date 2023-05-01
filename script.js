import {featureProductNav} from "./Data/featureProductNav.js"

import { imageSlider } from "./Data/imageSlider.js";

import { electronicsProductData } from "./Data/electronicproduct.js";


let input_search = document.getElementById("search_input");

let form_search = document.getElementById("search_form");

let recent_SearchE1 = document.querySelector(".recent_Search");

let recentArray = ["Camera", "Phone"];

form_search.addEventListener("submit", (e) => {
  e.preventDefault();
  recentArray.unshift(input_search.value);
  console.log(recentArray);
  renderRecent();
});

function renderRecent() {
  let recent_Search_html = "";
  recentArray.forEach((el) => {
    recent_Search_html += `<div class="recent_list">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>${el}</p>
          </div>`;
  });
  recent_SearchE1.innerHTML = recent_Search_html;
}

renderRecent();

/*********Features Product js*********/
let featuresProduct_listE1 = document.querySelector(".FeatureProduct_list")
let featureProductListHTML = ''
// console.log(featureProductNav);

featureProductNav.forEach(el=>{
  featureProductListHTML +=` 
  <div class="FeatureProduct_item">
    <a href="${el.link}">
      <div class="FeatureProduct_image">
        <img src="${el.img}"/>
      </div>
  <p class="FeatureProduct_name">${el.name}</p> 
    </a>
</div>
  `
})

featuresProduct_listE1.innerHTML = featureProductListHTML
console.log(featureProductListHTML);


// imageSlider:
let imageSliderListE1 = document.querySelector(".imageSliderList");

let imageSliderListHTML =''
console.log(imageSlider);

imageSlider.forEach(el=>{
  imageSliderListHTML +=`
  <div class="imageSliderItem">
  <a href="${el.link}">
    <img
      src="${el.img}"
      alt=""
    />  
  </a>
</div>`
})

imageSliderListE1.innerHTML = imageSliderListHTML;

let preve_imageBtnEl = document.getElementById("preve_imageBtn")
let next_imageBtn = document.getElementById("next_imageBtn")

let start = 0;
let end = -400;

preve_imageBtnEl.addEventListener("click", handlePreveImage);
next_imageBtn.addEventListener("click",handleNextImage);

function handlePreveImage(){
  let imageallList = document.querySelectorAll(".imageSliderItem")
  console.log(imageallList);
  if(start < 0)
  start +=100
  imageallList.forEach(el=>{
    el.style.transform =` translateX(${start}%)`
  })
}

function handleNextImage(){
  let imageallList = document.querySelectorAll(".imageSliderItem")
  console.log(imageallList);
  if(start > end)
  start -=100
  imageallList.forEach(el=>{
    el.style.transform =` translateX(${start}%)`
  })
}

function renderImageSlider(){
  if(start > end){
    handleNextImage()
  }
  else{
    start =100;
  }
}

setInterval(renderImageSlider,5000)

// bestofElectronic

let bestofElctronic_product_itemEl = document.querySelector(".bestofElctronic_product_item")
let bestofElectornicProduct_html = ""

console.log(electronicsProductData)
electronicsProductData.forEach(el => {

    
    bestofElectornicProduct_html += `
    <div >
        <a href="${el.link}" class="BestofElectronic_item">   
        <div class="bestOfElectornic_image_Product">
            <img
                src="${el.img}" />
        </div>
        <div class="bestofElectronicmoreOption">
            <p class="bestofElectornicProduct_name">${el.productName}</p>
            <p class="bestofElecronic_discount">${el.discount}</p>
            <p class="bestofElectronic_brand">${el.brand}</p>
        </div>
        </a>
    </div>
    
    `
})

bestofElctronic_product_itemEl.innerHTML = bestofElectornicProduct_html











