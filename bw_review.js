"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Alex A. Somoza 
   Date: 3-15-19  
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

//run the init function when page is loaded
window.onload = init;

//Create a function to define event listeners used in the page.
function init() {
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

//Make stars light up when user hovers mouse over the empty stars.
function lightStars(e) {
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");

      //lights up stars when hovered over.
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }

      for (i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = starNumber + " star(s)";
      e.target.addEventListener("mouseleave", function () {
            e.target.removeEventListener("mouseleave", turnOffStars);
      });
}

//unlight stars when the mouse pointer is off the image.
function turnOffStars() {
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = "";
}

//tracks number of characters typed into the text area box.
function updateCount() {
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText);
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount + "/1000";

      //Changes the color of the text and background when it reaches over 1000 characters.
      if (charCount > 1000) {
            wordCountBox.style.color = "white";
            wordCountBox.style.backgroundColor = "red";
      } else {
            wordCountBox.style.color = "black";
            wordCountBox.style.backgroundColor = "white";
      }
}









/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}