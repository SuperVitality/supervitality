var heartParts, heartAnim, logoContainerElem, navBarElem, contentElem;

heartParts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
              0, 0, 1, 2, 2, 2, 1, 0, 0, 1, 2, 2, 2, 1, 0, 0,
              
              0, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 0,
              0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0,
              0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0,
              0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0,
              
              0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0,
              0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0,
              0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0,
              
              0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

heartRimAnim = [ 72, 57, 42, 43, 44, 61, 78, 94, 110, 126, 141, 156, 171, 186, 201, 216, 215, 198, 181, 164, 147, 130, 113, 97, 81, 65, 50, 35, 36, 37, 54, 71 ];
heartFillAnim = [ 120, 136, 135, 119, 103, 104, 105, 121, 137, 153, 152, 151, 150, 134, 118, 102, 86, 87, 88, 89, 90, 106, 122, 138, 154, 170, 169, 168, 167, 166, 165, 149, 133, 117, 101, 85, 69, 70, 73, 74, 75, 91, 107, 123, 139, 155, 185, 184, 183, 182, 148, 132, 116, 100, 84, 68, 52, 53, 58, 59, 60, 76, 92, 108, 124, 140, 200, 199, 131, 115, 99, 83, 67, 51, 77, 93, 109, 125, 114, 98, 82, 66 ]
heartBeatAnim = [];

function setupRingAnim(elem, delay) {
    
    setTimeout(function() {
        elem.style.animation = "spin";
        elem.style.animationDuration = "0.5s";
    }, delay);
    
    setTimeout(function() {
        elem.className = "heartBoxRimFinal";
    }, delay + 1)
}

function setupFillAnim(elem, delay) {
    setTimeout(function() {
        elem.style.animation = "pop";
        elem.style.animationDuration = "1s";
    }, delay);
    
    setTimeout(function() {
        elem.className = "heartBoxFillFinal";
    }, delay + 1)
}

function hoverFront(evt) {
    evt.target.style.zIndex = "0";
}

function hoverBack(evt) {
    evt.target.style.zIndex = "-999";
}

function generateHeart() {
    var iter, hPartsCount, heartBox, x, y, animIndex, delay;
    
    hPartsCount = heartParts.length;
    
    for (iter = 0; iter < hPartsCount; iter++) {
        if (heartParts[iter] != 0) {
            if(heartParts[iter] == 1) {
                heartBox = document.createElement("div");
                heartBox.setAttribute("class", "heartBoxRim");
                x = Math.floor(iter / 16);
                y = iter % 16;
                heartBox.style.top = (x * 6.25) + "%";
                heartBox.style.left = (y * 6.25) + "%";
                heartBox.setAttribute("id", "heartBox" + iter);
                
                //heartBox.addEventListener("mouseover", hoverFront);
                //heartBox.addEventListener("mouseout", hoverBack);
                
                animIndex = heartRimAnim.indexOf(iter);
                
                if(animIndex != -1) {
                    delay = 1000 + (animIndex * 25);
                    setupRingAnim(heartBox, delay);
                }
                
                logoContainerElem.appendChild(heartBox);
            } else if(heartParts[iter] == 2) {
                heartBox = document.createElement("div");
                heartBox.setAttribute("class", "heartBoxFill");
                heartBox.setAttribute("id", "heartBox" + iter);
                x = Math.floor(iter / 16);
                y = iter % 16;
                heartBox.style.top = (x * 6.25) + "%";
                heartBox.style.left = (y * 6.25) + "%";
                
                logoContainerElem.appendChild(heartBox);
                
                heartBeatAnim.push(heartBox);
                
                animIndex = heartFillAnim.indexOf(iter);
                
                if(animIndex != -1) {
                    delay = 2000 + (animIndex * 2);
                    setupFillAnim(heartBox, delay);
                }
            }  
        }
    }
    
    setTimeout(function () {
        logoContainerElem.setAttribute("class", "webActive");
        navBarElem.setAttribute("class", "webActive");
        contentElem.setAttribute("class", "webActive");
    }, 4000);
}

/*
function contextMenu(evt) {
    evt.preventDefault();
    console.log(evt.target.getAttribute("id"));
}
*/

function heartbeat(evt) {
    for (iter = 0; iter < heartBeatAnim.length; iter++) {
        
    }
}

function init() {
    
    //document.addEventListener("contextmenu", contextMenu);
    
    document.addEventListener("onclick", heartbeat);
    
    logoContainerElem = document.getElementById("logoContainer");
    navBarElem = document.getElementById("navBar");
    contentElem = document.getElementById("content");
    
    generateHeart();
    
}

document.addEventListener('DOMContentLoaded', init, false);