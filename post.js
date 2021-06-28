
/*
let msg = document.getElementById("title").innerText; 
//console.log(msg);
let msg2 = 'img.png';
let color = 'red';
let color2 = 'blue';

let innermsg = document.querySelector(".cardpost-text-inner");


let btnPost = document.querySelector('.btn-post');
btnPost.addEventListener('click', () => {
  let newArray = [];
  let array1 = [];
  array1.push(msg);
  array1.push(color);
  console.log(array1);

  let array2 = [];
  array2.push(msg2);
  array2.push(color2);
 console.log(array2);
 newArray.push({"key":array1, "value":color
}, {"key":array2 , "value":color2});
 console.log(newArray);
 for(let i=0; i<newArray.length; i++){
  
     console.log(newArray[i]);
   }

})*/


let name= "manu";
let age = "30";
let a =[];
a.push(name);
let b=[];
b.push(age);
let array =[];
//array.push({"key": a , "value":b});
//console.log(array);
//array.push({"key": a , "value":b});
//console.log(array);
/*
array.push({"key": age,"value":name});
console.log(array);
array.push({"key": age,"value":name});
console.log(array);*/

let msgKey = document.getElementById("title").innerText; 
let msgValue = document.querySelector('.card-post-image').innerText;
//let image = document.querySelector('.image-text');

let keyInner = document.querySelector('.card-post-text-inner');
let valueInner = document.querySelector('.card-post-image-inner');
//let imgInner = document.querySelector('.image-text-inner');


let array1 = [];
let array2 = [];
let newArray = [];

let btnPost = document.querySelector('.btn-post');

//const img = document.querySelector("img"); 
//img.src = "https://picsum.photos/200/301";
//document.imgInner.appendChild(img);
let sectionInner = document.querySelector("#section-inner");

sectionInner.style.display = 'none';

btnPost.addEventListener('click', () => {
  sectionInner.style.display = 'block';

array1.push(msgKey);
array2.push(msgValue);

keyInner.textContent = array1;


valueInner.textContent = array2;





})
  