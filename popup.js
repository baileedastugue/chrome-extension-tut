const changeColorButton = document.getElementById('changeColor');

// Retrieve the color from storage and update the button's style and value
chrome.storage.sync.get('color', ({ color }) => {
  changeColorButton.style.backgroundColor = color;
  changeColorButton.setAttribute('value', color);
});

changeColorButton.addEventListener('click', (event) => {
  const color = event.target.value;

  // Query the active tab before injecting the content script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Use the Scripting API to execute a script
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      args: [color],
      func: setColor,
    });
  });
});

function setColor(color) {
  document.body.style.backgroundColor = color;
}
