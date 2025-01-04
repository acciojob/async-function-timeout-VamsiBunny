//your JS code here. If required.
// Function to introduce a delay using a Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to handle displaying the text after the delay
async function displayTextAfterDelay() {
  // Retrieve values from input fields
  const text = document.getElementById('text').value;
  const delayTime = parseInt(document.getElementById('delay').value, 10);
  const outputDiv = document.getElementById('output');

  // Validate input
  if (!text) {
    outputDiv.innerText = 'Please enter some text.';
    return;
  }

  if (isNaN(delayTime) || delayTime < 0) {
    outputDiv.innerText = 'Please enter a valid delay in milliseconds.';
    return;
  }

  // Clear previous output and introduce delay
  // outputDiv.innerText = 'Processing...';
  await delay(delayTime);

  // Display the text after the delay
  outputDiv.innerText = text;
}

// Attach event listener to the button
document.getElementById('btn').addEventListener('click', displayTextAfterDelay);
