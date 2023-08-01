const wordElement = document.querySelector('.sparkle-logo');
const wordText = wordElement.textContent;

// Find the last occurrence of 'L' and 'C' in the text
const lastIndexL = wordText.lastIndexOf('L');
const lastIndexC = wordText.lastIndexOf('C');

// Wrap the last 'L' and 'C' in <span> elements with the corresponding classes
const finalText = wordText.slice(0, lastIndexL) +
  `<span class="last-l">${wordText[lastIndexL]}</span>` +
  wordText.slice(lastIndexL + 1, lastIndexC) +
  `<span class="last-2">${wordText[lastIndexC]}</span>` +
  wordText.slice(lastIndexC + 1);

// Set the modified text as the new innerHTML of the element
wordElement.innerHTML = finalText;

// Apply the colors to the <span> elements
const lastLElement = document.querySelector('.last-l');
lastLElement.style.color = 'purple';

const lastCElement = document.querySelector('.last-2');
lastCElement.style.color = "orange";
