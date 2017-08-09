var heartParts, heartAnim, logoContainerElem;

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

heartAnim = [ 72, 57, 42, 43, 44, 61, 78, 94, 110, 126, 141, 156, 171, 186, 201, 216, 215, 198, 181, 164, 147, 130, 113, 97, 81, 65, 50, 35, 36, 37, 54, 71 ];

function setupAnim(elem, delay) {
    
    setTimeout(function() {
        elem.style.animation = "spin";
        elem.style.animationDuration = "1s";
    }, delay);
    
    setTimeout(function() {
        elem.className = "heartBoxFinal";
    }, delay + 1)
}

function generateBoxes() {
    var iter, hPartsCount, heartBox, x, y, animIndex, delay;
    
    hPartsCount = heartParts.length;
    
    for (iter = 0; iter < hPartsCount; iter++) {
        if(heartParts[iter] != 0) {
            if(heartParts[iter] == 1) {
                heartBox = document.createElement("div");
                heartBox.setAttribute("class", "heartBox");
                x = Math.floor(iter / 16);
                y = iter % 16;
                heartBox.style.top = (x * 6.25) + "%";
                heartBox.style.left = (y * 6.25) + "%";
                
                animIndex = heartAnim.indexOf(iter);
                
                if(animIndex != -1) {
                    delay = 1000 + (animIndex * 62.5);
                    setupAnim(heartBox, delay);
                }
                
                logoContainerElem.appendChild(heartBox);
            }
        }
    }
}

function init() {
    
    logoContainerElem = document.getElementsByClassName("logoContainer")[0];
    
    generateBoxes();
    
}

document.addEventListener('DOMContentLoaded', init, false);