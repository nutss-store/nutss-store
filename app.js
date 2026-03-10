// contador de clientes
let counter = document.querySelector(".counter");
if(counter){
let target = counter.getAttribute("data-target");
let count = 0;

function updateCounter(){
count += 1;
counter.innerText = count;

if(count < target){
setTimeout(updateCounter,20);
}
}

updateCounter();
}

// popup de compra fake
let names = ["Lucas","João","Pedro","Ana","Carlos","Mateus"];
let products = ["Conta FiveM","Discord Nitro"];

function fakeSale(){

let popup = document.getElementById("popup");
if(!popup) return;

let name = names[Math.floor(Math.random()*names.length)];
let product = products[Math.floor(Math.random()*products.length)];

popup.innerText = name + " acabou de comprar " + product;
popup.style.display = "block";

setTimeout(()=>{
popup.style.display="none";
},4000);

}

setInterval(fakeSale,8000);
