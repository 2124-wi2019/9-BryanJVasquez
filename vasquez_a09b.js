/*
Bryan Vasquez
vasquez_a09b.js
INFO 2124
Thoendel
02/15/2020
*/

let p = document.getElementsByTagName('p');  //getting all the information from the <p> tags 
console.log(`The total number of <p> tags in this document is: ${p.length}`); //(calling variable "p" with length method to get the total count)

let div = document.getElementsByTagName('div');  //getting all the information from the <div> tags
console.log(`The total number of <div> tags in this document is: ${div.length}`); //(calling variable "div" with length method to get the total count)

let paragraph = document.getElementsByClassName('paragraph');  //getting all the information from attribute class paragraph
console.log(`The total number of paragraph class in this document is: ${paragraph.length}`); //(calling variable "paragraph" with length method to get the total count)

let blockText = document.getElementsByClassName('block-text');  //getting all the information from attribute class block-text
console.log(`The total number of block-text class in this document is: ${blockText.length}`); //(calling variable "blockText" with length method to get the total count)

let b001 = document.getElementById('b001'); //getting the attribute value of the element b001
console.log(`The element with the ID attribute value of b001 is: ${b001}`); //(calling variable "b001" to get its value)