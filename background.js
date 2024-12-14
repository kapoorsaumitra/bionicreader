let isBionicActive = false;

chrome.action.onClicked.addListener((tab) => {
  isBionicActive = !isBionicActive; // Toggle the state
  chrome.tabs.sendMessage(tab.id, { action: isBionicActive ? 'enable' : 'disable' });
});
