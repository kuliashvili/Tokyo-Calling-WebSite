// change images on background //////////////////////////////////////////////////////////////////////////////

const images = document.querySelectorAll(".slider img");
let currentImageIndex = 0;

document.getElementById("next").addEventListener("click", function() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex++;
    if (currentImageIndex === images.length) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("active");
});

document.getElementById("preview").addEventListener("click", function() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    images[currentImageIndex].classList.add("active");
});



// change numbers on button clicks //////////////////////////////////////////////////////////////////////////////

// Get the two buttons and the div
const nextButton = document.getElementById("next");
const previewButton = document.getElementById("preview");
const moveNumber = document.getElementById("move-number");
const info1Div = document.getElementById("info1");
const info2Div = document.getElementById("info2");
const info3Div = document.getElementById("info3");
const info4Div = document.getElementById("info4");
const info5Div = document.getElementById("info5");

// Initialize a counter
let counter = 1;

// Add an event listener to the next button
nextButton.addEventListener("click", function() {
    // Increment the counter
    counter = (counter + 1) % 6;
    if (counter == 0) {
        counter = 1;
    }

    // Update the text of the div  
    moveNumber.innerText = counter;

    // Display information by numbero ////////////////////////////////////////////////////////////////
    if (moveNumber.innerText === "1") {
        info1Div.style.display = "block";
        info2Div.style.display = "none";
        info3Div.style.display = "none";
        info4Div.style.display = "none";
        info5Div.style.display = "none";
    } else if (moveNumber.innerText === "2") {
        info2Div.style.display = "block";
        info1Div.style.display = "none";
        info3Div.style.display = "none";
        info4Div.style.display = "none";
        info5Div.style.display = "none";
    } else if (moveNumber.innerText === "3") {
        info3Div.style.display = "block";
        info1Div.style.display = "none";
        info2Div.style.display = "none";
        info4Div.style.display = "none";
        info5Div.style.display = "none";
    } else if (moveNumber.innerText === "4") {
        info4Div.style.display = "block";
        info1Div.style.display = "none";
        info2Div.style.display = "none";
        info3Div.style.display = "none";
        info5Div.style.display = "none";

    } else {
        info5Div.style.display = "block";
        info1Div.style.display = "none";
        info2Div.style.display = "none";
        info3Div.style.display = "none";
        info4Div.style.display = "none";
    }

});

// Add an event listener to the preview button
previewButton.addEventListener("click", function() {
    // Decrement the counter, but keep it within the range [1, 4]
    counter = (counter - 1) % 6;
    if (counter == 0) {
        counter = 5;
    }

    // Update the text of the div
    moveNumber.innerText = counter;

    // Display information by number ////////////////////////////////////////////////////////////////
    if (moveNumber.innerText === "1") {
        info1Div.style.display = "block";
        info2Div.style.display = "none";
        info3Div.style.display = "none";
        info4Div.style.display = "none";
        info5Div.style.display = "none";
    } else if (moveNumber.innerText === "2") {
        info2Div.style.display = "block";
        info1Div.style.display = "none";
        info3Div.style.display = "none";
        info4Div.style.display = "none";
        info5Div.style.display = "none";
    } else if (moveNumber.innerText === "3") {
        info3Div.style.display = "block";
        info1Div.style.display = "none";
        info2Div.style.display = "none";
        info4Div.style.display = "none";
        info5Div.style.display = "none";
    } else if (moveNumber.innerText === "4") {
        info4Div.style.display = "block";
        info1Div.style.display = "none";
        info2Div.style.display = "none";
        info3Div.style.display = "none";
        info5Div.style.display = "none";
    } else {
        info5Div.style.display = "block";
        info1Div.style.display = "none";
        info2Div.style.display = "none";
        info3Div.style.display = "none";
        info4Div.style.display = "none";
    }
});
// /////////////////////////






// image1 = document.getElementById("image1").addEventListener("click", function() {
//     info2Div.style.display = "block";
//     info1Div.style.display = "none";
//     info3Div.style.display = "none";
//     info4Div.style.display = "none";
//     info5Div.style.display = "none";

// });
// image2 = document.getElementById("image2").addEventListener("click", function() {
//     info2Div.style.display = "none";
//     info1Div.style.display = "none";
//     info3Div.style.display = "block";
//     info4Div.style.display = "none";
//     info5Div.style.display = "none";

// });
// image3 = document.getElementById("image3").addEventListener("click", function() {
//     info2Div.style.display = "none";
//     info1Div.style.display = "none";
//     info3Div.style.display = "none";
//     info4Div.style.display = "none";
//     info5Div.style.display = "block";

// });
// image4 = document.getElementById("image4").addEventListener("click", function() {
//     info2Div.style.display = "block";
//     info1Div.style.display = "none";
//     info3Div.style.display = "none";
//     info4Div.style.display = "none";
//     info5Div.style.display = "none";

// });