const attemptsSpan = document.getElementById('attempts');
const makesSpan = document.getElementById('makes');
const resultText = document.getElementById('resultText');
const resultScreen = document.getElementById('resultScreen');

// Function to update the result text
function updateResultText() {
  const attempts = parseInt(attemptsSpan.textContent);
  const makes = parseInt(makesSpan.textContent);
  resultText.innerText = `
    Attempts: ${attempts}
    Makes: ${makes}
    WinRate: ${(makes / attempts * 100).toFixed(2)}%
  `;
}

// Event listener for done button
document.getElementById('doneButton').addEventListener('click', function() {
  updateResultText();
  const container = document.getElementById('container');
  container.style.display = 'none';
  resultScreen.style.display = 'block';
  console.log('You clicked.');
});

// Event listener for copy button
document.getElementById('startOverButton').addEventListener('click', function() {
  resultScreen.style.display = 'none';
  container.style.display = 'flex';
  attemptsSpan.innerHTML = '0';
  makesSpan.innerHTML = '0';
  });


// Function to update the count
function updateCount(elementId, delta) {
  const element = document.getElementById(elementId);
  const currentValue = parseInt(element.textContent);
  element.textContent = currentValue + delta;
}

// Event listeners for increase/decrease buttons
document.getElementById('attemptsDecrease').addEventListener('click', function() {
  updateCount('attempts', -1);
  updateResultText();
});

document.getElementById('attemptsIncrease').addEventListener('click', function() {
  updateCount('attempts', 1);
  updateResultText();
});

document.getElementById('makesDecrease').addEventListener('click', function() {
  updateCount('makes', -1);
  updateResultText();
});

document.getElementById('makesIncrease').addEventListener('click', function() {
  updateCount('makes', 1);
  updateResultText();
});

// Initial result text update
updateResultText();