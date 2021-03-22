// category variables & config

// Reference to <radialGradient>s
const electronColour = "url(#a02b376a-b994-4a8f-921f-7ef064d7b0db)";
const protonColour = "url(#f14616da-3d1f-4e70-8f91-9e3eb9b2e897)";

const charge1 = document.querySelector("[data-name='Electron']");
const charge2 = document.querySelector("[data-name='Proton']");
const vector1 = document.querySelector("[data-name='Vector N']");
const vector2 = document.querySelector("[data-name='Vector P']");

// Tracks if charge is positive/negative
charge1.dataset.isPos = 0;
charge2.dataset.isPos = 1;

// TransformOrigin in center of the charge that the vector belongs to
vector1.style.transformOrigin = `${charge1.children[0].getAttribute("cx")}px ${charge1.children[0].getAttribute("cy")}px`;
vector2.style.transformOrigin =  `${charge2.children[0].getAttribute("cx")}px ${charge2.children[0].getAttribute("cy")}px`;



// category functions

/**
 * Evaluates if force between charges are attracting or rejecting,
 * and rotates vectors accordingly
 * @param {HTMLElement} charge1 First charge in comparison 
 * @param {HTMLElement} charge2 Second charge in comparison
 * @returns {undefined}
 */
function evalV(charge1, charge2) {
  // Attracting force if ONE charge is positive and the other negative
  // link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
  const attract = parseInt(charge1.dataset.isPos) ^ parseInt(charge2.dataset.isPos);

  // 0 rotation gives vectors facing each other
  const rotation = attract ? 0 : 180;
  
  // Rotate both vectors around center of charge
  // link https://stackoverflow.com/questions/23098309/svg-rotation-using-javascript
  vector1.setAttribute("transform", `rotate(${rotation})`);
  vector2.setAttribute("transform", `rotate(${rotation})`);
}

/**
 * Swaps the colour and sign of a positive/negative charge to the opposite
 * @param {HTMLElement} charge HTML-element to swap pos/neg value of
 * @returns {undefined}
 */
function swapC(charge) {
  // Alternates 0 & 1 with binary NOT operator
  charge.dataset.isPos = Number(!parseInt(charge.dataset.isPos));

  // Alternates colours
  newColour = charge.children[0].getAttribute("fill") === electronColour
    ? protonColour
    : electronColour;

  // Alternates text
  newText = charge.children[1].innerHTML === "+"
    ? "-"
    : "+";
  
  // Applies new style
  charge.children[0].setAttribute("fill", newColour);
  charge.children[1].innerHTML = newText;
}



// category event listeners

charge1.addEventListener("click", ({ currentTarget }) => {
  swapC(currentTarget);
  evalV(charge1, charge2);
});

charge2.addEventListener("click", ({ currentTarget }) => {
  swapC(currentTarget);
  evalV(charge1, charge2);
});
